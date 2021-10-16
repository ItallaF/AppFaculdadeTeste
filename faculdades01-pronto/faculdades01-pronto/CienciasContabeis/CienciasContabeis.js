import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, ImageBackground, ScrollView, Platform} from 'react-native';

export default class CienciasContabeis extends Component{

  static navigationOptions = {
    header:null
  }
  constructor(){
    super();

    this.irTelaValorContabeis = this.irTelaValorContabeis.bind(this);

  }

  irTelaValorContabeis(){
    this.props.navigation.navigate('ValorContabeis');
  }

  render(){
    return(
      <ScrollView>
      <ImageBackground style = {styles.bg} source={require('./CienciasContabeis.jpg')}>       
    <View style = {styles.cabecalho}>
            <Text style = {styles.titulo}>
            Ciêcias Contabeis
           </Text>
        </View>  
      <Text style = {styles.texto}>
             É a área que cuida das contas de uma empresa, por meio do registro e do controle das receitas, das despesas e dos lucros. O contador coordena e controla os registros de negócios (compras, vendas, investimentos e aplicações), de modo a dar uma visão precisa de seu patrimônio. Ele interpreta eventos econômicos e fornece informações aos dirigentes da companhia para a tomada de decisões.

Acompanha alterações na política tributária, registra os fatos e atos administrativos e responsabiliza-se pelo pagamento de tributos. Pode ajudar a traçar planos de investimento. Numa empresa, pode atuar na área tributária ou financeira, de recursos humanos ou na perícia contábil. Pode ainda trabalhar em escritórios de contabilidade, atendendo pequenas e médias empresas que terceirizam o setor contábil, ou abrir seu próprio negócio.O primeiro ano é ocupado principalmente com as disciplinas básicas, como sociologia, português, economia, direito e administração. Em seguida, é a vez das disciplinas voltadas para a formação técnica e gerencial, como teoria da contabilidade, planejamento e contabilidade financeira. Há também aulas de legislação comercial, direito, planejamento tributário, auditoria e perícia.

O estágio nem sempre é obrigatório. Algumas faculdades exigem uma monografa de conclusão do curso.


Duração média: 4 anos.

Outros nomes: Ciên. Contábeis e Atuariais; Contabilidade.</Text>

        <View style={{marginTop:50}}>
          <View style={{flex:1, marginTop:Platform.OS =='ios'? 20 : 0, alignItems:'center'}}> 

          <TouchableOpacity onPress={this.irTelaValorContabeis} style={[styles.btnContainer, {backgroundColor:'green'}]}>
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
    color:'#FF0000',
    fontSize: 20,
    fontWeight: 'bold' 
  },
});