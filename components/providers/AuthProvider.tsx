import React, { createContext, useContext, useState, useEffect, FC, PropsWithChildren } from 'react';
import * as SecureStore from 'expo-secure-store';

// Define una interfaz de contexto que incluye las propiedades y métodos necesarios.
interface AuthContextType {
    userToken: string | null;
    role: string | null;
    id: string | null;
    isLoading: boolean;
    login: (token: string) => Promise<void>;
    logout: () => Promise<void>;
}

// Inicializa el contexto sin un valor por defecto.
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
    const [userToken, setUserToken] = useState<string | null>(null);
    const [role, setRole] = useState<string | null>(null);
    const [id, setId] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // Separar lógica de decodificación del token en una función
    const decodeToken = (token: string) => {
        try {
            const payload = JSON.parse(atob(token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')));
            return payload;
        } catch (e) {
            console.error("Error decoding token", e);
            return null;
        }
    };

    // Verificar si el token es válido mediante una solicitud a la API
    const renewToken = async (token: string): Promise<string | null> => {
        try {
            const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/auth/validate`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            });

            if (response.ok) {

                const data = await response.json();
                return data.object; // Devuelve el nuevo token si es válido
            }

            return null;
        } catch (error) {
            console.error("Error verifying token:", error);
            return null;
        }
    };

    // Manejo de cierre de sesión y notificación al usuario
    const logoutWithMessage = async (message: string) => {
        await SecureStore.deleteItemAsync('userToken');
        setUserToken(null);
        setRole(null);
        setId(null);
        alert(message);
    };

    // Cargar el token desde el almacenamiento seguro al iniciar la app
    useEffect(() => {
        const loadToken = async () => {
            const token = await SecureStore.getItemAsync('userToken');
            if (token) {
                await handleTokenValidation(token);
            }
            setIsLoading(false);
        };

        loadToken();
    }, []);

    // Manejo de validación de token
    const handleTokenValidation = async (token: string) => {
        const newToken = await renewToken(token);
        if (!newToken) {
            await logoutWithMessage("Tu sesión ha expirado.");
            return;
        }

        const decodedToken = decodeToken(newToken);

        if (!decodedToken) {
            await logoutWithMessage("Error al procesar el token.");
            return;
        }

        if (!decodedToken.isActive) {
            await logoutWithMessage("Tu cuenta ha sido desactivada.");
        } else if (decodedToken.isDeleted) {
            await logoutWithMessage("Tu cuenta ha sido eliminada.");
        } else {
            // Token válido, actualizar el contexto
            setUserToken(newToken);
            setRole(decodedToken.role);
            setId(decodedToken.id);
        }
    };

    // Login del usuario con verificación previa de estado de la cuenta
    const login = async (token: string) => {
        const decodedToken = decodeToken(token);

        if (!decodedToken) {
            console.error("Error al decodificar el token.");
            return;
        }

        if (!decodedToken.isActive) {
            alert("Tu cuenta ha sido desactivada.");
        } else if (decodedToken.isDeleted) {
            alert("Tu cuenta ha sido eliminada.");
        } else {
            // Token válido, almacenar el token y establecer el contexto
            await SecureStore.setItemAsync('userToken', token);
            setUserToken(token);
            setRole(decodedToken.role);
            setId(decodedToken.id);
        }
    };

    // Logout del usuario y eliminación del token almacenado
    const logout = async () => {
        setUserToken(null);
        setRole(null);
        setId(null);
        await SecureStore.deleteItemAsync('userToken');
    };

    return (
        <AuthContext.Provider value={{ userToken, isLoading, login, logout, role, id }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook personalizado para acceder al contexto de autenticación
export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};