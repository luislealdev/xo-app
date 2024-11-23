// components/Button.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, View } from 'react-native';;
import { Ionicons } from '@expo/vector-icons';
import styles from '@/constants/Styles';
import { colors } from '@/constants/Colors';

interface ButtonProps {
    title: string;
    onPress: () => void;
    isLoading?: boolean;
    disabled?: boolean;
    iconName?: keyof typeof Ionicons.glyphMap;
    backgroundColor?: string;
}

const Button: React.FC<ButtonProps> = ({
    title,
    onPress,
    isLoading = false,
    disabled = false,
    iconName,
    backgroundColor,
}) => {

    return (
        <TouchableOpacity
            style={[
                styles.paddingHorizontal25,
                styles.borderRadius10,
                styles.paddingVertical20,
                styles.itemsCenter,
                styles.row,
                styles.flex,
                styles.justifyCenter,
                { backgroundColor: backgroundColor || colors.primary },
                disabled && styles.disabled]}
            onPress={onPress}
            disabled={disabled || isLoading}
        >
            {isLoading ? (
                <ActivityIndicator color={colors.secondary} />
            ) : (
                <View style={[styles.row, styles.itemsCenter]}>
                    {iconName && <Ionicons name={iconName} size={24} color={colors.white} style={styles.marginRight10} />}
                    <Text style={[styles.fontSize16, styles.bold, { color: colors.white }]}>{title}</Text>
                </View>
            )}
        </TouchableOpacity>
    );
};

// const styles = StyleSheet.create({
//     button: {
//         paddingVertical: 15,
//         paddingHorizontal: 20,
//         borderRadius: 10,
//         alignItems: 'center',
//         justifyContent: 'center',
//         flexDirection: 'row',
//     },
//     content: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     icon: {
//         marginRight: 10,
//     },
//     buttonText: {
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
//     disabled: {
//         backgroundColor: '#cccccc',
//     },
// });

export default Button;