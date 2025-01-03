import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Camera, CameraView } from 'expo-camera';
import { useRouter } from 'expo-router';
import styles from '@/constants/Styles';

const QRScanner = () => {
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [scanned, setScanned] = useState(false);
    const router = useRouter();

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }: { type: string; data: string }) => {
        setScanned(true);
        alert(`Código QR escaneado: ${data}`);
        // Aquí puedes manejar el código escaneado, por ejemplo, redirigir a otra página
    };

    if (hasPermission === null) {
        return <Text>Solicitando permiso para usar la cámara...</Text>;
    }
    if (hasPermission === false) {
        return <Text>No se ha concedido permiso para usar la cámara.</Text>;
    }

    return (
        <View style={styles.flex1}>
            <CameraView facing='back' onBarcodeScanned={({ data }) => {
                console.log(data);
            }} />
        </View>
    );
};

const localStyles = StyleSheet.create({
    rescanButton: {
        position: 'absolute',
        bottom: 50,
        left: '50%',
        marginLeft: -30,
        backgroundColor: '#4D4DFF',
        borderRadius: 50,
        padding: 15,
        elevation: 5,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topOverlay: {
        flex: 1,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    centerOverlay: {
        flexDirection: 'row',
    },
    leftOverlay: {
        flex: 1,
        height: 200,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    focused: {
        width: 200,
        height: 200,
        borderColor: '#4D4DFF',
        borderWidth: 2,
    },
    rightOverlay: {
        flex: 1,
        height: 200,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    bottomOverlay: {
        flex: 1,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});

export default QRScanner;