import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, Platform, ScrollView, ImageBackground} from 'react-native';

export default class App extends Component{
  
  static navigationOptions = {
    header:null
  }



  constructor(){
    super();

    this.irTelaCienciasContabeis = this.irTelaCienciasContabeis.bind(this);

  }

  irTelaCienciasContabeis(){
    this.props.navigation.navigate('CienciasContabeis');
  }
  
  
  
  
  render(){
    return(
      <ScrollView>
      <ImageBackground style = {styles.bg} source = {require('./chapeu-de-formatura.jpg')}>
          <View style = {styles.cabecalho}>
            <Text style = {styles.titulo}>
            Faculdade
           </Text>
        </View>
      <View style={{flex:1, marginTop:Platform.OS =='ios'? 20 : 0, alignItems:'center'}}>
        <Text style={{fontSize:20, marginTop:50}}>Escolha o curso desejado e aproveite</Text>

        <View style={{marginTop:50}}>

          <TouchableOpacity onPress={this.irTelaCienciasContabeis} style={[styles.btnContainer, {backgroundColor:'pink'}]}>
            <Text style={styles.btnText}>Ciencias Contabeis</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Sistemas_de_Informacao')}style={[styles.btnContainer, {backgroundColor:'blue'}]}>
            <Text style={styles.btnText}>Sistemas de Informacao</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>this.props.navigation.navigate('LetrasIngles')}style={[styles.btnContainer, {backgroundColor:'red'}]}>
            <Text style={styles.btnText}>Letras Ingles</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Geografia')}style={[styles.btnContainer, {backgroundColor:'green'}]}>
            <Text style={styles.btnText}>Geografia</Text>
          </TouchableOpacity>

          <Text>
          </Text>

        </View>
      </View>
      </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  btnContainer:{
    marginTop:20,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 10,
    width:200,
    height:80   
  },
  btnText:{
    color:'white',
    fontWeight:'bold',
    fontSize: 20
  },
  cabecalho:{
    marginTop: 20,
    height: 50,
    backgroundColor: '#33CCFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 15,
        },        
    shadowOpacity: 0.1,
    shadowRadius: 8.0,
  },
  titulo:{
    color:'white',
    fontSize: 20,
    fontWeight: 'bold' 
  },
  bg: {
    flex: 1, 
  },
});
