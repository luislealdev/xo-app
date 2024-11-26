import React, { useState } from 'react';
import { Dimensions, FlatList, Image, ScrollView, Text, View } from 'react-native';
import styles from '@/constants/Styles';
import TextInputField from '@/components/ui/TextInputField';
import { PartyCard } from '@/components/ui';

export default function HomeScreen() {
  // Obtener la fecha y hora del dispositivo
  const date = new Date().toLocaleString('es-MX', {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  const [searchText, setSearchText] = useState('');

  const width = Dimensions.get('window').width;

  const data = [
    { id: '1', title: 'Fiesta 1', month: 'Dic', day: 14, image: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://www.duendesproducciones.com/wp-content/uploads/2022/04/uv-party-2.jpg', location: 'Celaya, México' },
    { id: '2', title: 'Fiesta 2', month: 'Ene', day: 20, image: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://www.duendesproducciones.com/wp-content/uploads/2022/04/uv-party-2.jpg', location: 'León, México' },
    { id: '3', title: 'Fiesta 2', month: 'Ene', day: 20, image: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://www.duendesproducciones.com/wp-content/uploads/2022/04/uv-party-2.jpg', location: 'León, México' },
    { id: '4', title: 'Fiesta 2', month: 'Ene', day: 20, image: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://www.duendesproducciones.com/wp-content/uploads/2022/04/uv-party-2.jpg', location: 'León, México' },
    // Agrega más datos según sea necesario
  ];

  return (
    <ScrollView style={[styles.flex1, styles.blackBg, styles.paddingBottom100]}>
      <View style={[styles.flex, styles.padding20]}>
        <View style={[styles.flex, styles.justifyBetween, styles.row]}>
          <View>
            <Text style={[styles.secondaryColor, styles.bold, styles.fontSize16]}>{date}</Text>
            <Text style={[styles.white, styles.fontSize30, styles.bold]}>Explorar eventos</Text>
          </View>
          <View>
            <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/030/557/451/large_2x/ai-generative-portrait-of-handsome-male-model-fashion-background-banner-with-copy-space-text-commercial-template-free-photo.jpg' }} style={[{ width: 50, height: 50 }, styles.borderRadius100]} />
          </View>
        </View>
        <TextInputField
          placeholder="Buscar eventos"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
      <Text style={[styles.white, styles.fontSize20, styles.marginTop10, styles.padding20]}>Cerca de ti</Text>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ width: width / 2, margin: 10 }}>
            <PartyCard
              title={item.title}
              month={item.month}
              day={item.day}
              image={item.image}
              location={item.location}
            />
          </View>
        )}
      />
      <Text style={[styles.white, styles.fontSize20, styles.marginTop10, styles.padding20]}>Tus fiestas</Text>
      <PartyCard
        title="Neon Party"
        month="Dic"
        day={24}
        image="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://www.duendesproducciones.com/wp-content/uploads/2022/04/uv-party-2.jpg"
        location="Celaya, México"
      />
      <PartyCard
        title="Neon Party"
        month="Dic"
        day={24}
        image="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://www.duendesproducciones.com/wp-content/uploads/2022/04/uv-party-2.jpg"
        location="Celaya, México"
      />
      <PartyCard
        title="Neon Party"
        month="Dic"
        day={24}
        image="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://www.duendesproducciones.com/wp-content/uploads/2022/04/uv-party-2.jpg"
        location="Celaya, México"
      />
    </ScrollView>
  );
}