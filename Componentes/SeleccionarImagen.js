import React from 'react';
import { Button, Image, View, TouchableOpacity } from 'react-native';
import { ImagePicker } from 'expo';

export default class SeleccionarImagen extends React.Component {
  state = {
    image: null,
  };

  render() {
    const { image } = this.state;
    return (
      <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={this.seleccionarImagen}>
          {
            this.state.image 
            ? <Image
              source={{uri: this.state.image}}
              style={{ width: 160, height: 160, borderRadius: 80 }}
            /> :
            <Image
              source={require('../assets/nn.png')}
              style={{ width: 160, height: 160, borderRadius: 80 }}
            />
        }
        </TouchableOpacity>
      </View>
    );
  }

  seleccionarImagen = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}
