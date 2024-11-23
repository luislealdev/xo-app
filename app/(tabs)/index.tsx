import styles from "@/constants/Styles";
import { Image, Text, View } from "react-native";
import TextInputField from '@/components/ui/TextInputField';
import { useState } from "react";

export default function HomeScreen() {

  //Todo: Get date and time from the device like: Month Day, Hour:Minute AM/PM
  const date = new Date().toLocaleString('es-MX', {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  const [searchText, setSearchText] = useState('');

  return (
    <View style={[styles.flex1, styles.blackBg]}>
      <View style={[styles.flex, styles.padding40]}>
        <View>
          <Text style={[styles.secondaryColor, styles.bold, styles.fontSize16]}>{date}</Text>
          <Text style={[styles.white, styles.fontSize30, styles.bold]}>Explorar eventos</Text>
        </View>
        <TextInputField
          placeholder="Buscar eventos"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
      <Text style={[styles.white, styles.marginTop10]}>Cerca de ti</Text>
      {/* TODO: Add rounded cards to slice */}
    </View>
  );
}
