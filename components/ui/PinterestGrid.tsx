import React, { useState } from 'react';
import { View, Image, StyleSheet, FlatList, Dimensions, TouchableOpacity, Modal, Text, Alert } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const numColumns = 3;
const imageWidth = width / numColumns - 15;

interface PinterestGridProps {
    images: string[];
}

const PinterestGrid: React.FC<PinterestGridProps> = ({ images }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImagePress = (image: string) => {
        setSelectedImage(image);
        setModalVisible(true);
    };

    const handleLongPress = (image: string) => {
        Alert.alert(
            "Opciones",
            "Selecciona una opción",
            [
                {
                    text: "Guardar",
                    onPress: () => saveImage(image),
                },
                {
                    text: "Reportar",
                    onPress: () => reportImage(image),
                },
                {
                    text: "Cancelar",
                    style: "cancel",
                },
            ],
            { cancelable: true }
        );
    };

    const saveImage = async (image: string) => {
        try {
            const { status } = await MediaLibrary.requestPermissionsAsync();
            if (status !== 'granted') {
                alert('Se requieren permisos para guardar imágenes.');
                return;
            }

            const documentDirectory = FileSystem.documentDirectory;
            if (!documentDirectory) {
                alert('No se pudo acceder al directorio de documentos.');
                return;
            }
            const fileUri = documentDirectory + image.split('/').pop();
            await FileSystem.downloadAsync(image, fileUri);
            await MediaLibrary.createAssetAsync(fileUri);
            alert('Imagen guardada en el dispositivo.');
        } catch (error) {
            console.error('Error al guardar la imagen:', error);
        }
    };

    const reportImage = (image: string) => {
        alert('Imagen reportada.');
    };

    const renderItem = ({ item }: { item: string }) => (
        <TouchableOpacity
            onPress={() => handleImagePress(item)}
            onLongPress={() => handleLongPress(item)}
            style={localStyles.imageContainer}
        >
            <Image source={{ uri: item }} style={localStyles.image} />
        </TouchableOpacity>
    );

    return (
        <View>
            <FlatList
                data={images}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                numColumns={numColumns}
                contentContainerStyle={localStyles.grid}
            />
            <Modal visible={modalVisible} transparent={true} onRequestClose={() => setModalVisible(false)}>
                <View style={localStyles.modalContainer}>
                    {selectedImage && <Image source={{ uri: selectedImage }} style={localStyles.modalImage} />}
                    <TouchableOpacity style={localStyles.closeButton} onPress={() => setModalVisible(false)}>
                        <Ionicons name="close" size={30} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={localStyles.saveButton} onPress={() => saveImage(selectedImage!)}>
                        <Ionicons name="download" size={30} color="white" />
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
};

const localStyles = StyleSheet.create({
    grid: {
        paddingHorizontal: 5,
        gap: 10,
    },
    imageContainer: {
        flex: 1,
        margin: 5,
    },
    image: {
        width: imageWidth,
        height: imageWidth * 1.5,
        borderRadius: 10,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalImage: {
        width: '90%',
        height: '70%',
        borderRadius: 10,
    },
    closeButton: {
        position: 'absolute',
        top: 40,
        right: 20,
    },
    saveButton: {
        position: 'absolute',
        bottom: 40,
        right: 20,
    },
});

export default PinterestGrid;