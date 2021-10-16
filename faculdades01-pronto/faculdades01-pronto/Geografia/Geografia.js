import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, ImageBackground, ScrollView, Platform} from 'react-native';

export default class Geografia extends Component{

  static navigationOptions = {
    header:null
  }
  constructor(){
    super();

    this.irTelaValorGeografia = this.irTelaValorGeografia.bind(this);

  }

  irTelaValorGeografia(){
    this.props.navigation.navigate('ValorGeografia');
  }

  render(){
    return(
      <ScrollView>
      <ImageBackground style = {styles.bg} source={require('./Geografia.jpg')}>       
    <View style = {styles.cabecalho}>
            <Text style = {styles.titulo}>
            Geografia
           </Text>
        </View>  
      <Text style = {styles.texto}>
            Em algumas escolas, o estudante opta, já no vestibular, entre o bacharelado e a licenciatura, enquanto outras permitem essa escolha após o aluno ter cursado as disciplinas comuns às duas titulações.

Nos primeiros anos, o aluno estuda disciplinas básicas de geografia física, humana, regional e instrumental. Nos cursos de licenciatura, ele precisa fazer também as disciplinas pedagógicas, como psicologia da educação e didática. O estágio é obrigatório, assim como a entrega de um trabalho de conclusão de curso.

Duração média: 4 anos.</Text>

        <View style={{marginTop:50}}>
          <View style={{flex:1, marginTop:Platform.OS =='ios'? 20 : 0, alignItems:'center'}}> 

          <TouchableOpacity onPress={this.irTelaValorGeografia} style={[styles.btnContainer, {backgroundColor:'green'}]}>
            <Text style={styles.btnText}>VALOR</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={[styles.btnContainer, {backgroundColor:'pink', marginTop:20}]}>
            <Text style={styles.btnText}>VOLTAR</Text>
          </TouchableOpacity>
          </View>
          </View>
          <Text></Text>
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
    width:200,
    height:80,
    borderRadius: 10   
  },
  btnText:{
    color:'white',
    fontWeight:'bold',
    fontSize: 20,
    alignItems: 'center'
  },
  bg: {
    flex: 1, 
  },
  texto:{
    marginTop: 25,
    color:'#00FFCC',
    fontSize: 15,
    fontWeight: 'bold' 
  },
  cabecalho:{
    marginTop: 20,
    height: 50,
    backgroundColor: '#0033FF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'white',
        shadowOffset: {
          width: 0,
          height: 15,
        },        
    shadowOpacity: 0.1,
    shadowRadius: 8.0,
  },
  titulo:{
    color:'#FF0000',
    fontSize: 20,
    fontWeight: 'bold' 
  },
});