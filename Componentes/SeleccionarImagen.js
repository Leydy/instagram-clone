import React from 'react';
import { Button, Image, View, TouchableOpacity } from 'react-native';
import { ImagePicker } from 'expo';


const SeleccionarImagen = (props) => {
  const seleccionarImagen = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    console.log(result);

    if (!result.cancelled) {
      props.cargar(result);
    }
  };
  return (
    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={seleccionarImagen}>
        {
              props.imagen
                ? <Image
                  source={{ uri: props.imagen.uri }}
                  style={{ width: 160, height: 160, borderRadius: 80 }}
                />
                : <Image
                  source={require('../assets/nn.png')}
                  style={{ width: 160, height: 160, borderRadius: 80 }}
                />
          }
      </TouchableOpacity>
    </View>
  );
};

export default SeleccionarImagen;
