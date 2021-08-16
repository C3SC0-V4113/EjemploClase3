import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

const estilos=StyleSheet.create({
  grandeAzul:{
    color:'blue',
    fontWeight:'bold',
    fontSize:'60'
  },
  rojo:{
    color:'red'
  },
  titulo:{
    color:'black',
    fontWeight:'bold',
    fontSize:'100'
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={
          {uri:'https://reactjs.org/logo-og.png'}
        }
        style={{width:400,height:400}}
      />
      <Text style={estilos.titulo}>Mi nombre es Francisco José Valle Cornejo</Text>
      <Text style={estilos.grandeAzul}>Mi carrera es Ingenieria en Ciencias de la Computación</Text>
      <Text style={[estilos.grandeAzul,estilos.rojo]}>Pasatiempos son Jugar Videojuegos, desarrollar paginas web estaticas</Text>
      <Text style={[estilos.rojo,estilos.grandeAzul]}>Lenguaje Favorito es JavaScript</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});