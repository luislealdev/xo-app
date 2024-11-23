// pages/LoginPage.tsx
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
// import * as Google from 'expo-google-auth-session';
// import * as Facebook from 'expo-facebook';
import Button from '@/components/ui/Button';
import TextInputField from '@/components/ui/TextInputField';
import { colors } from '@/constants/Colors';
import styles from '@/constants/Styles';
import { Link } from 'expo-router';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
      setIsLoading(true);
      // Lógica de inicio de sesión
      // Simulación de una llamada a una API
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      //   const result = await Google.logInAsync({
      //     androidClientId: 'YOUR_ANDROID_CLIENT_ID',
      //     iosClientId: 'YOUR_IOS_CLIENT_ID',
      //     scopes: ['profile', 'email'],
      //   });

      //   if (result.type === 'success') {
      //     // Lógica de inicio de sesión con Google
      //   } else {
      //     // Cancelado
      //   }
    } catch (e) {
      console.error(e);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      //   await Facebook.initializeAsync({
      //     appId: 'YOUR_FACEBOOK_APP_ID',
      //   });
      //   const result = await Facebook.logInWithReadPermissionsAsync({
      //     permissions: ['public_profile', 'email'],
      //   });

      //   if (result.type === 'success') {
      //     // Lógica de inicio de sesión con Facebook
      //   } else {
      //     // Cancelado
      //   }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={[styles.flex, styles.padding40, styles.justifyCenter, styles.flex1]}>
      <Text style={{ color: colors.white, fontSize: 30, fontWeight: 'bold', marginBottom: 2, textAlign: 'center' }}>¡Hola de Nuevo!</Text>
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
      <View style={{ paddingVertical: 30, gap: 20 }}>
        <Button title="Iniciar Sesión" onPress={handleLogin} isLoading={isLoading} />
        <Text style={{ color: 'gray', textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>o</Text>
        <Button title="Iniciar sesión con Google" onPress={handleGoogleLogin} iconName="logo-google" backgroundColor="#DB4437" />
        <Button title="Iniciar sesión con Facebook" onPress={handleFacebookLogin} iconName="logo-facebook" backgroundColor="#3b5998" />
      </View>
      <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>¿Todavía no tienes una cuenta? <Link style={[styles.primaryColor]} href='/auth/register'>Registrate</Link></Text>
    </View>
  );
}
