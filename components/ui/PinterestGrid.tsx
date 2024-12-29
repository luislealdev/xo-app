import React from 'react';
import { View, Image, StyleSheet, FlatList, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const numColumns = 2;
const imageWidth = width / numColumns - 10;


interface PinterestGridProps {
    images: string[];
}

const PinterestGrid: React.FC<PinterestGridProps> = ({ images }) => {
    const renderItem = ({ item }: { item: string }) => (
        <View style={localStyles.imageContainer}>
            <Image source={{ uri: item }} style={localStyles.image} />
        </View>
    );

    return (
        <FlatList
            data={images}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={numColumns}
            contentContainerStyle={localStyles.grid}
        />
    );
};

const localStyles = StyleSheet.create({
    grid: {
        paddingHorizontal: 5,
        gap: 10,
    },
    imageContainer: {
        flex: 1,
    },
    image: {
        width: imageWidth,
        height: imageWidth * 1.5,
        borderRadius: 10,
    },
});

export default PinterestGrid;