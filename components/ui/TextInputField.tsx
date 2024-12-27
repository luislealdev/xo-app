// components/TextInputField.tsx
import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import styles from '@/constants/Styles';

interface TextInputFieldProps {
    label?: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    secureTextEntry?: boolean;
    error?: string;
    multiline?: boolean
    numberOfLines?: number
}

const TextInputField: React.FC<TextInputFieldProps> = ({
    label,
    value,
    onChangeText,
    placeholder,
    secureTextEntry,
    error,
    multiline,
    numberOfLines
}) => {

    return (
        <View style={styles.marginBottom20}>
            <Text style={[styles.label, styles.white, styles.bold]}>{label}</Text>
            <TextInput
                style={[styles.input, styles.white]}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor="#585858"
                secureTextEntry={secureTextEntry}
                multiline={multiline}
                numberOfLines={numberOfLines}
            />
            {error ? <Text style={styles.error}>{error}</Text> : null}
        </View>
    );
};


export default TextInputField;