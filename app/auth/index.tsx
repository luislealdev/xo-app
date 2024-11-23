// pages/LoginPage.tsx
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Button from '@/components/ui/Button';
import { useTheme } from '@react-navigation/native';
import TextInputField from '@/components/ui/TextInputField';

export default function LoginPage() {
    const { colors } = useTheme();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validate = () => {
        let valid = true;
        if (!email) {
            setEmailError('El correo electrónico es obligatorio');
            valid = false;
        } else {
            setEmailError('');
        }

        if (!password) {
            setPasswordError('La contraseña es obligatoria');
            valid = false;
        } else {
            setPasswordError('');
        }

        return valid;
    };

    const handleLogin = () => {
        if (validate()) {
            // Lógica de inicio de sesión
        }
    };

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Text style={{ color: colors.text, fontSize: 30, fontWeight: 'bold', marginBottom: 2, textAlign: 'center' }}>¡Hola de Nuevo!</Text>
            <Text style={{ color: "gray", fontWeight: 'bold', fontSize: 14, marginBottom: 50, textAlign: 'center' }}>Inicia sesión para continuar</Text>
            <TextInputField
                value={email}
                onChangeText={setEmail}
                placeholder="Correo electrónico"
                error={emailError}
            />
            <TextInputField
                value={password}
                onChangeText={setPassword}
                placeholder="Contraseña"
                secureTextEntry
                error={passwordError}
            />
            <Text style={{ color: 'gray', fontWeight: 'bold', fontSize: 12, textAlign: 'right', marginTop: 15, }}>Olvidaste tu contraseña?</Text>
            <View style={{ paddingVertical: 30 }}>
                <Button title="Iniciar Sesión" onPress={handleLogin} />
                <Text style={{ color: 'gray', padding: 10, textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>o</Text>
                {/*  Add login with google and facebook */}

            </View>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>¿Todavía no tienes una cuenta? Registrate</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        textAlign: 'center',
        padding: 50,
    },
});