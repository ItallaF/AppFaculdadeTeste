import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';

export default class ValorContabeis extends Component{

  static navigationOptions = {
    title: 'Valor'
  }
  render(){
    return(
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.texto}>
        1.500,00 reais

        </Text>
        </View>
      </ScrollView>
       );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    color:'green',
    justifyContent:'center',
    alignItems:'center',
    fontWeight: 'bold',
  },
  texto:{
    
    fontSize: 20,
    
   
    
  },
});

