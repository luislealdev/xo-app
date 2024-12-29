import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView, TextInput, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import styles from '@/constants/Styles';
import Button from '@/components/ui/Button';

import * as ImagePicker from 'expo-image-picker';


const EventView = () => {
    const [isRegistered, setIsRegistered] = useState(false);
    const [eventStarted, setEventStarted] = useState(false);

    const [code, setCode] = useState('');

    const handleRegister = () => {
        setIsRegistered(true);
    };

    const handleAddMemory = async () => {
        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            quality: 0.5,
        });

        if (!result.canceled) {
            // Lógica para manejar la imagen tomada
        }
    };

    return (
        <ScrollView style={[styles.flex1, styles.blackBg]}>
            <ImageBackground
                source={{ uri: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://www.duendesproducciones.com/wp-content/uploads/2022/04/uv-party-2.jpg' }}
                // style={localStyles.imageBackground}
                style={{ width: '100%', height: 500, display: 'flex', justifyContent: 'center', alignSelf: 'center', alignItems: 'center' }}
            >
                <LinearGradient
                    colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.7)']}
                    style={localStyles.gradient}
                />
                <View>
                    <Text style={[styles.white, styles.bold, { fontSize: 60 }]}>NEON PARTY</Text>
                    <View style={{ marginTop: 40 }}>
                        <Text style={[styles.white, styles.centerText, styles.fontSize24, styles.bold]}>340</Text>
                        <Text style={[styles.white, styles.centerText, styles.fontSize20, styles.bold]}>asistentes</Text>
                    </View>
                </View>
                {/* <View style={{}}>
                    <View style={localStyles.ribbon}>
                        <Text style={[styles.white, styles.bold]}>14 Dic</Text>
                    </View>
                </View> */}
            </ImageBackground>

            <View style={localStyles.infoContainer}>
                <View style={[styles.flex, styles.justifyBetween, styles.row]}>
                    <View style={localStyles.infoRow}>
                        <Ionicons name="calendar" size={24} color={styles.primaryColor.color} />
                        <Text style={[styles.white, styles.marginLeft10, styles.fontSize16]}>14 Dic 2025</Text>
                    </View>
                    <View style={localStyles.infoRow}>
                        <Ionicons name="time" size={24} color={styles.primaryColor.color} />
                        <Text style={[styles.white, styles.marginLeft10, styles.fontSize16]}>8:00 PM</Text>
                    </View>
                </View>
                <Text style={[styles.white, styles.marginTop10, styles.fontSize16, styles.marginBottom20, styles.justifyText]}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut asperiores accusamus hic consectetur, ab reprehenderit. Temporibus voluptatem, nesciunt excepturi sit vero, possimus a maxime laboriosam sapiente, perspiciatis ipsam cupiditate sunt!
                </Text>
                <View style={localStyles.infoRow}>
                    <Ionicons name="location" size={24} color={styles.primaryColor.color} />
                    <Text style={[styles.white, styles.marginLeft10, styles.fontSize16]}>Casa Rotaria</Text>
                </View>
                <View style={localStyles.infoRow}>
                    <Ionicons name="shirt" size={24} color={styles.primaryColor.color} />
                    <Text style={[styles.white, styles.marginLeft10, styles.fontSize16]}>Neon colors</Text>
                </View>
                <View style={localStyles.servicesContainer}>
                    <FontAwesome5 name="shield-alt" size={24} color={styles.primaryColor.color} />
                    <FontAwesome5 name="beer" size={24} color={styles.primaryColor.color} />
                    <FontAwesome5 name="smoking" size={24} color={styles.primaryColor.color} />
                    <FontAwesome5 name="ambulance" size={24} color={styles.primaryColor.color} />
                    <FontAwesome5 name="utensils" size={24} color={styles.primaryColor.color} />
                    <FontAwesome5 name="swimmer" size={24} color={styles.primaryColor.color} />
                </View>
            </View>

            {!isRegistered && !eventStarted && (
                <View style={localStyles.registrationContainer}>
                    <TextInput
                        style={[styles.input, styles.white, styles.marginBottom10]}
                        placeholder="Ingresa tu código"
                        placeholderTextColor="#888"
                        value={code}
                        onChangeText={setCode}
                    />
                    <Button title="Registrarse" onPress={handleRegister} />
                </View>
            )}

            {isRegistered && !eventStarted && (
                <View style={localStyles.qrContainer}>
                    <Image source={{ uri: 'https://luisrrleal.com/_next/image?url=https%3A%2F%2Fquickchart.io%2Fqr%3Ftext%3Dhttps%3A%2F%2Fluisrrleal.com%2F%26width%3D300%26height%3D300%26format%3Dpng&w=640&q=75' }} style={localStyles.qrCode} />
                    <Text style={[styles.white, styles.marginBottom10, styles.marginTop50]}>Ya estás registrado. Presenta este código QR en la entrada.</Text>
                </View>
            )}

            {eventStarted && (
                <View style={localStyles.memoryContainer}>
                    <Button title="Agregar Memoria" onPress={handleAddMemory} />
                    <Text style={[styles.white, styles.marginBottom10, styles.marginTop50]}>
                        Las memorias son imágenes que se compartirán con todos los asistentes de la fiesta 24 horas después de haberse terminado.
                    </Text>
                </View>
            )}
        </ScrollView>
    );
};

const localStyles = StyleSheet.create({
    gradient: {
        ...StyleSheet.absoluteFillObject,
        height: '100%',
    },
    infoContainer: {
        padding: 20,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    servicesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    registrationContainer: {
        marginBottom: 50,
        padding: 20,
    },
    qrContainer: {
        padding: 20,
        alignItems: 'center',
    },
    qrCode: {
        width: 200,
        height: 200,
    },
    memoryContainer: {
        padding: 20,
    },
});

export default EventView;