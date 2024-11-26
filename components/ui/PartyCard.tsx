import React from 'react';
import { Text, View, ImageBackground, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '@/constants/Styles';

interface Props {
    title: string;
    month: string;
    day: number;
    image: string;
    location: string;
    assistants?: number;
}

export const PartyCard = ({ title, month, day, image, location }: Props) => {
    return (
        <View style={localStyles.cardContainer}>
            <ImageBackground source={{ uri: image }} style={localStyles.imageBackground}>
                <View style={localStyles.dateContainer}>
                    <Text style={localStyles.dateText}>{month}</Text>
                    <Text style={localStyles.dateText}>{day}</Text>
                </View>
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.8)']}
                    style={localStyles.gradient}
                >
                    <View style={localStyles.infoContainer}>
                        <Text style={[styles.white, styles.bold]}>{location}</Text>
                        <Text style={[styles.white, styles.bold, styles.fontSize20]}>{title}</Text>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </View>
    );
};

const localStyles = StyleSheet.create({
    cardContainer: {
        minHeight: 150,
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 20,
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'space-between',
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '100%',
        justifyContent: 'flex-end',
    },
    dateContainer: {
        backgroundColor: 'white',
        padding: 5,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignSelf: 'flex-end',
        marginRight: 20,
    },
    dateText: {
        color: 'black',
        textAlign: 'center',
    },
    infoContainer: {
        padding: 20,
    },
});

export default PartyCard;