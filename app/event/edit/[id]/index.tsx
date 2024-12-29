import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Switch, StyleSheet, Image, TouchableOpacity } from 'react-native';
import TextInputField from '@/components/ui/TextInputField';
import Button from '@/components/ui/Button';
import styles from '@/constants/Styles';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import SwitchInput from '@/components/ui/SwitchInput';
import * as ImagePicker from 'expo-image-picker';
// import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from '@react-native-community/datetimepicker';

const EventPage = () => {
  const [eventName, setEventName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [theme, setTheme] = useState('');
  const [ticketCost, setTicketCost] = useState('');
  const [coverPhoto, setCoverPhoto] = useState('');
  const [services, setServices] = useState({
    security: false,
    medicalTeam: false,
    pool: false,
    alcoholSale: false,
    eCigaretteSale: false,
    food: false,
  });
  const [isEventVisible, setIsEventVisible] = useState(true);
  const [allowUserPhotos, setAllowUserPhotos] = useState(true);
  const [contactInfo, setContactInfo] = useState('');

  interface Services {
    security: boolean;
    medicalTeam: boolean;
    pool: boolean;
    alcoholSale: boolean;
    eCigaretteSale: boolean;
    food: boolean;
  }

  const handleServiceChange = (service: keyof Services) => {
    setServices((prevServices: Services) => ({
      ...prevServices,
      [service]: !prevServices[service],
    }));
  };

  const handleCreateEvent = () => {
    // Lógica para crear el evento
  };

  useEffect(() => {
    const requestPermissions = async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Se requieren permisos para acceder a la biblioteca de imágenes.');
      }
    };

    requestPermissions();
  }, []);

  const handleFilePick = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 0.5,
      });

      if (!result.canceled) {
        setCoverPhoto(result.assets[0].uri);
      }

      // if (!result.canceled) {
      //     await upload(cld, {
      //         file: result.assets[0].uri, callback: (error: any, response: any) => {
      //             setFormData({ ...formData, [fileType]: response.secure_url });
      //         }
      //     });
      // } else {
      //     alert('No seleccionaste ninguna imagen.');
      // }
    } catch (error) {
      console.error('Error al seleccionar la imagen:', error);
    }
  };

  return (
    <ScrollView style={[styles.flex1, styles.blackBg, styles.padding20, styles.safeArea]}>
      <View style={[styles.flex, styles.row, styles.justifyBetween, styles.marginBottom20]}>
        <View style={[styles.flex, styles.row, styles.itemsCenter, styles.marginBottom10]}>
          <Ionicons name='chevron-back' style={styles.white} size={30} onPress={() => {
            router.back();
          }} />
          <Text style={[styles.white, styles.fontSize24, styles.bold]}>Crear Evento</Text>
        </View>
        <Ionicons name='trash' style={styles.red} size={30} onPress={() => {
        }} />
      </View>
      <Text style={[styles.secondaryColor, styles.fontSize16, styles.marginBottom10]}>Llena el formulario para continuar</Text>
      <TextInputField
        label="Nombre del Evento"
        value={eventName}
        onChangeText={setEventName}
        placeholder="Ej: Neon Party 2025"
      />
      <TextInputField
        label="Descripción"
        value={description}
        onChangeText={setDescription}
        placeholder="Describe tu evento..."
        numberOfLines={4}
        multiline
      />

      <Text style={[styles.fontSize16, styles.bold, styles.white, styles.marginBottom10]}>Fecha y hora</Text>

      <View style={[styles.row, styles.flex, styles.justifyBetween]}>
        {/* Get date */}
        <DateTimePicker
          accentColor='#4D4DFF'
          textColor='#4D4DFF'
          style={[styles.borderRadius10, styles.whiteBg]}
          value={date}
          onChange={(event, selectedDate) => {
            const currentDate = selectedDate || date;
            setDate(currentDate);
          }}
        />

        {/* Get time */}
        <DateTimePicker
          accentColor='#4D4DFF'
          textColor='#4D4DFF'
          style={[styles.borderRadius10, styles.marginBottom20, styles.whiteBg]}
          value={date}
          mode='time'
          onChange={(event, selectedDate) => {
            const currentDate = selectedDate || date;
            setTime(currentDate.toLocaleTimeString());
          }} />
      </View>
      <TextInputField
        label="Ubicación"
        value={location}
        onChangeText={setLocation}
        placeholder="Dirección del evento"
      />
      <TextInputField
        label="Número de Personas"
        value={numberOfPeople}
        onChangeText={setNumberOfPeople}
        placeholder="Max. 1000"
      />
      <TextInputField
        label="Temática (Código de Vestimenta)"
        value={theme}
        onChangeText={setTheme}
        placeholder="Ingresa la temática del evento"
      />
      <TextInputField
        label="Costo del Boleto"
        value={ticketCost}
        onChangeText={setTicketCost}
        placeholder="Ingresa el costo del boleto"
      />

      <View style={[styles.justifyCenter]}>
        <TouchableOpacity onPress={() => handleFilePick()} style={[styles.justifyCenter, styles.itemsCenter, styles.marginTop10, styles.thirdBg, styles.padding10, styles.borderRadius10]}>
          <Ionicons name="cloud-upload-outline" size={24} color={styles.primaryColor.color} />
          <Text style={[styles.primaryColor, styles.bold, styles.marginLeft10]}>Seleccionar Imagen</Text>
        </TouchableOpacity>
        {
          coverPhoto && <Image source={{ uri: coverPhoto }} style={{ width: '100%', height: 200, marginTop: 50 }} />
        }
      </View>

      <Text style={[styles.white, styles.fontSize16, styles.bold, styles.marginTop50]}>Servicios Disponibles</Text>
      <View style={localStyles.checkboxContainer}>
        <SwitchInput
          label="Seguridad"
          value={services.security}
          onValueChange={() => handleServiceChange('security')}
        />
        <SwitchInput
          label="Equipo Médico"
          value={services.medicalTeam}
          onValueChange={() => handleServiceChange('medicalTeam')}
        />
        <SwitchInput
          label="Alberca"
          value={services.pool}
          onValueChange={() => handleServiceChange('pool')}
        />
        <SwitchInput
          label="Venta de Alcohol"
          value={services.alcoholSale}
          onValueChange={() => handleServiceChange('alcoholSale')}
        />
        <SwitchInput
          label="Venta de Cigarros Electrónicos"
          value={services.eCigaretteSale}
          onValueChange={() => handleServiceChange('eCigaretteSale')}
        />
        <SwitchInput
          label="Comida"
          value={services.food}
          onValueChange={() => handleServiceChange('food')}
        />

        <Text style={[styles.white, styles.fontSize16, styles.bold, styles.marginTop50]}>Configuración de Evento</Text>


        <SwitchInput
          label="Evento Visible"
          value={isEventVisible}
          onValueChange={() => setIsEventVisible(!isEventVisible)}
        />
        <SwitchInput
          label="Permitir Fotos de Usuarios"
          value={allowUserPhotos}
          onValueChange={() => setAllowUserPhotos(!allowUserPhotos)}
        />


      </View>
      <View style={styles.marginTop50}>
        <TextInputField
          label="Información de Contacto"
          value={contactInfo}
          onChangeText={setContactInfo}
          placeholder="Ingresa la información de contacto, ¿cómo pueden comprar boletos?,
           Ej: WhatsApp: 1234567890, preventas disponibles en zona centro."
          multiline
          numberOfLines={4}
        />
      </View>
      <View style={styles.marginTop10}>
        <Button title="Crear Evento" onPress={handleCreateEvent} />
      </View>
    </ScrollView>
  );
};

const localStyles = StyleSheet.create({
  checkboxContainer: {
    marginTop: 10,
  },
  checkboxRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default EventPage;