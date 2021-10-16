import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';

export default class ValorLetras extends Component{

  static navigationOptions = {
    title: 'Valor Letras'
  }
  render(){
    return(
      <ScrollView>
        <Text style={styles.texto}>
        780,00 reais
        </Text>
      </ScrollView>
       );
  }
}
const styles = StyleSheet.create({
  texto:{
    color:'green',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 250,
    justifyContent:'center',
    alignItems:'center',
  },
});