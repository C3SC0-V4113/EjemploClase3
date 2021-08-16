import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

const estilos=StyleSheet.create({
  grandeAzul:{
    color:'blue',
    fontWeight:'bold',
    fontSize:'60',
  },
  rojo:{
    color:'red',
  },
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
      <Text style={estilos.rojo}>Solo rojo</Text>
      <Text style={estilos.grandeAzul}>Solo Azul grande</Text>
      <Text style={[estilos.grandeAzul,estilos.rojo]}>Azul grande, entonces rojo</Text>
      <Text style={[estilos.rojo,estilos.grandeAzul]}>rojo, entoces Azul grande</Text>
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