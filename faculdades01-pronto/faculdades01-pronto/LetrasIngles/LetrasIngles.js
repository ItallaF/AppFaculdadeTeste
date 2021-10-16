import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, ImageBackground, ScrollView, Platform} from 'react-native';

export default class LetrasIngles extends Component{

  static navigationOptions = {
    header:null
  }
  constructor(){
    super();

    this.irTelaValorLetras = this.irTelaValorLetras.bind(this);

  }

  irTelaValorLetras(){
    this.props.navigation.navigate('ValorLetras');
  }

  render(){
    return(
      <ScrollView>
      <ImageBackground style = {styles.bg} source={require('./letrasIn.jpg')}>       
    <View style = {styles.cabecalho}>
            <Text style = {styles.titulo}>
            Letras Ingles
           </Text>
        </View>  
      <Text style = {styles.texto}>
            O curso de Letras com habilitação em inglês tem como objetivo máximo desenvolver ou adquirir as competências linguística e comunicativa no idioma. Em suas disciplinas, o curso busca mostrar a cultura e literatura de países de língua inglesa, formar um profissional crítico que possa usar práticas pedagógicas inovadoras e incentivar as pesquisas na área.

Além do foco evidente na língua inglesa, muitos cursos costumam aprimorar o conhecimento em língua portuguesa. Além de formar profissionais aptos a cargos de ensino da língua estrangeira, também consegue ampliar a atuação no idioma materno.

A graduação em bacharel tem foco em matérias ligadas à Literatura, revisão e produção de textos, Linguística, Tradução e o estudo da cultura de países anglófonos. Já a licenciatura prepara o acadêmico para a rotina de um professor em escolas regulares, com matérias como Linguística Aplicada, Didática e Psicologia da Educação. O estágio supervisionado é obrigatório.

A duração média do curso é de 4 anos.</Text>

        <View style={{marginTop:50}}>
          <View style={{flex:1, marginTop:Platform.OS =='ios'? 20 : 0, alignItems:'center'}}> 

          <TouchableOpacity onPress={this.irTelaValorLetras} style={[styles.btnContainer, {backgroundColor:'green'}]}>
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
    marginTop:5,
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
    marginTop: 10,
    color:'red',
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