import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, ImageBackground, ScrollView, Platform} from 'react-native';

export default class Sistemas_de_Informacao extends Component{

  static navigationOptions = {
    header:null
  }
  constructor(){
    super();

    this.irTelaValor = this.irTelaValor.bind(this);

  }

  irTelaValor(){
    this.props.navigation.navigate('Valor');
  }

  render(){
    return(
      <ScrollView>
      <ImageBackground style = {styles.bg} source={require('./SistemasdeInformacao.jpg')}>       
    <View style = {styles.cabecalho}>
            <Text style = {styles.titulo}>
            Sistemas de Informação
           </Text>
        </View>  
      <Text style = {styles.texto}>
            Este bacharel administra o fluxo de informações que circulam por redes de computadores, dentro e fora de uma organização. Ele desenvolve o processamento, os sistemas de armazenamento e de recuperação de dados e disponibiliza esse material para usuários de redes, criando, adaptando e instalando programas para facilitar e organizar a consulta. Monta e gerencia banco de dados e desenha páginas de sites, funcionais e elegantes – tarefa que exige versatilidade e criatividade. Pode atuar em qualquer tipo de empresa de quase todos os setores, de bancos e organizações de saúde a empresas públicas e de comércio eletrônico. Conhecer inglês é mais do que essencial.
Cálculos acompanham o estudante durante todo o curso. Entre outras disciplinas, ele estuda matemática, cálculo diferencial e algoritmos. Na parte específica, há linguagem de programação, bancos de dados, engenharia de software, arquitetura e redes de computadores, segurança da informação e inteligência artificial. Estágio e projeto de conclusão de curso são obrigatórios. Duração média: 4 anos. Outros nomes: Inform.; TI e Comun.</Text>

        <View style={{marginTop:50}}>
          <View style={{flex:1, marginTop:Platform.OS =='ios'? 20 : 0, alignItems:'center'}}> 

          <TouchableOpacity onPress={this.irTelaValor} style={[styles.btnContainer, {backgroundColor:'green'}]}>
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
    color:'#000000',
    fontSize: 15,
    fontWeight: 'bold' 
  },
  cabecalho:{
    marginTop: 20,
    height: 50,
    backgroundColor: 'white',
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
    color:'#000099',
    fontSize: 20,
    fontWeight: 'bold' 
  },
});