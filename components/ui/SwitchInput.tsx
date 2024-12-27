import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import styles from '@/constants/Styles';

interface SwitchInputProps {
  label: string;
  value: boolean;
  onValueChange: () => void;
}

const SwitchInput: React.FC<SwitchInputProps> = ({ label, value, onValueChange }) => {
  return (
    <View style={localStyles.checkboxRow}>
      <Text style={styles.white}>{label}</Text>
      <Switch
        trackColor={{ false: '#222222', true: '#4D4DFF' }}
        thumbColor={value ? '#fff' : '#4D4DFF'}
        ios_backgroundColor="#222222"
        value={value}
        onValueChange={onValueChange}
      />
    </View>
  );
};

const localStyles = StyleSheet.create({
  checkboxRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
});

export default SwitchInput;