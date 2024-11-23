// components/TextInputField.tsx
import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

interface TextInputFieldProps {
    label?: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    secureTextEntry?: boolean;
    error?: string;
}

const TextInputField: React.FC<TextInputFieldProps> = ({
    label,
    value,
    onChangeText,
    placeholder,
    secureTextEntry,
    error,
}) => {
    const { colors } = useTheme();

    return (
        <View>
            <Text style={[styles.label, { color: colors.text }]}>{label}</Text>
            <TextInput
                style={[styles.input, { borderColor: colors.border, color: colors.text }]}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor="#585858"
                secureTextEntry={secureTextEntry}
            />
            {error ? <Text style={styles.error}>{error}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    label: {
        marginBottom: 8,
        fontSize: 16,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: '#222222',
        color: 'white',
        paddingVertical: 20,
        paddingHorizontal: 25,
        // paddingRight: 30,
        fontWeight: 'bold',
        fontSize: 16,
    },
    error: {
        marginTop: 4,
        color: 'red',
        fontSize: 14,
    },
});

export default TextInputField;