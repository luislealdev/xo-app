// pages/RegisterPage.tsx
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Button from '@/components/ui/Button';
import TextInputField from '@/components/ui/TextInputField';
import { Link } from 'expo-router';
import styles from '@/constants/Styles';
import { colors } from '@/constants/Colors';

export default function RegisterPage() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [nameError, setNameError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const validate = () => {
        let valid = true;

        if (!name) {
            setNameError('El nombre es obligatorio');
            valid = false;
        } else {
            setNameError('');
        }

        if (!username) {
            setUsernameError('El nombre de usuario es obligatorio');
            valid = false;
        } else {
            setUsernameError('');
        }

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

        if (password !== confirmPassword) {
            setConfirmPasswordError('Las contraseñas no coinciden');
            valid = false;
        } else {
            setConfirmPasswordError('');
        }

        return valid;
    };

    const handleRegister = () => {
        if (validate()) {
            setIsLoading(true);
            // Lógica de registro
            // Simulación de una llamada a una API
            setTimeout(() => {
                setIsLoading(false);
            }, 2000);
        }
    };

    return (
        <View style={[styles.flex, styles.padding40, styles.justifyCenter, styles.flex1]}>
            <Text style={{ color: colors.white, fontSize: 30, fontWeight: 'bold', marginBottom: 2, textAlign: 'center' }}>¡Regístrate!</Text>
            <Text style={{ color: "gray", fontWeight: 'bold', fontSize: 14, marginBottom: 50, textAlign: 'center' }}>Crea una cuenta para continuar</Text>
            <TextInputField
                value={name}
                onChangeText={setName}
                placeholder="Nombre"
                error={nameError}
            />
            <TextInputField
                value={username}
                onChangeText={setUsername}
                placeholder="Nombre de usuario"
                error={usernameError}
            />
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
            <TextInputField
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="Confirmar contraseña"
                secureTextEntry
                error={confirmPasswordError}
            />
            <View style={{ paddingVertical: 30, gap: 20 }}>
                <Button title="Registrarse" onPress={handleRegister} isLoading={isLoading} />
            </View>
            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>¿Ya tienes una cuenta?
                <Link style={[styles.primaryColor]} href='/auth'> Inicia sesión</Link>
            </Text>
        </View>
    );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     textAlign: 'center',
//     padding: 50,
//   },
// });