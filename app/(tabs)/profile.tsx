import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { FlatList } from 'react-native';
import { PartyCard } from '@/components/ui';
import styles from '@/constants/Styles';

const data = [
  { id: '1', title: 'Fiesta 1', month: 'Dic', day: 14, image: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://www.duendesproducciones.com/wp-content/uploads/2022/04/uv-party-2.jpg', location: 'Celaya, México' },
  { id: '2', title: 'Fiesta 2', month: 'Ene', day: 20, image: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://www.duendesproducciones.com/wp-content/uploads/2022/04/uv-party-2.jpg', location: 'León, México' },
  // Agrega más datos según sea necesario
];

const ProfileView = () => {
  return (
    <ScrollView style={[styles.flex1, styles.blackBg]}>
      <ImageBackground
        source={{ uri: 'https://static.vecteezy.com/system/resources/previews/030/557/451/large_2x/ai-generative-portrait-of-handsome-male-model-fashion-background-banner-with-copy-space-text-commercial-template-free-photo.jpg' }}
        style={localStyles.profileImage}
      >
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          style={localStyles.gradient}
        />
        <View style={localStyles.statsContainer}>
          <View style={[styles.itemsCenter]}>
            <Text style={[styles.white, styles.bold, styles.fontSize20]}>34.4k</Text>
            <Text style={[styles.white, styles.fontSize14]}>asistentes</Text>
          </View>
          <View style={[styles.itemsCenter]}>
            <Text style={[styles.white, styles.bold, styles.fontSize20]}>32</Text>
            <Text style={[styles.white, styles.fontSize14]}>fiestas</Text>
          </View>
          <View style={[styles.itemsCenter]}>
            <Text style={[styles.white, styles.bold, styles.fontSize20]}>6.8k</Text>
            <Text style={[styles.white, styles.fontSize14]}>fotos</Text>
          </View>
        </View>
      </ImageBackground>

      <View style={localStyles.infoContainer}>
        <View>
          <Text style={[styles.white, styles.bold, styles.fontSize20]}>Luis Farid</Text>
          <Text style={[styles.secondaryColor, styles.fontSize16]}>Celaya, Guanajuato</Text>
        </View>
        <Ionicons name="checkmark-circle" size={40} color={styles.primaryColor.color} />
      </View>

      <View style={localStyles.tabsContainer}>
        <TouchableOpacity style={[localStyles.tab, styles.primaryBg, styles.itemsCenter]}>
          <Text style={[styles.white, styles.bold]}>Próximamente</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[localStyles.tab, styles.itemsCenter]}>
          <Text style={[styles.white, styles.bold]}>Anteriores</Text>
        </TouchableOpacity>
      </View>

      <PartyCard
        title={data[0].title}
        month={data[0].month}
        day={data[0].day}
        image={data[0].image}
        location={data[0].location}
      />
    </ScrollView>
  );
};

const localStyles = StyleSheet.create({
  profileImage: {
    width: '100%',
    height: 400,
    justifyContent: 'flex-end',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  infoContainer: {
    backgroundColor: 'black',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 20,
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  tab: {
    width: '50%',
    padding: 10,
    paddingVertical: 15,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
});

export default ProfileView;