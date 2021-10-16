import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';

export default class Valor extends Component{

  static navigationOptions = {
    title: 'Valor'
  }
  render(){
    return(
      <ScrollView>
        <Text style={styles.texto}>
        Acima de 1.500,01 reais
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

