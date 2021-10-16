# AppFaculdadeTeste
import {createAppContainer, createStackNavigator} from 'react-navigation';

import Principal from './principal/Principal';
import Sistemas_de_Informacao from './Sistemas_de_Informacao/Sistemas_de_Informacao';
import CienciasContabeis from './CienciasContabeis/CienciasContabeis';
import LetrasIngles from './LetrasIngles/LetrasIngles';
import Geografia from './Geografia/Geografia';
import Valor from './Sistemas_de_Informacao/Valor';
import ValorContabeis from './CienciasContabeis/ValorContabeis';
import ValorLetras from './LetrasIngles/ValorLetras';
import ValorGeografia from './Geografia/ValorGeografia';
const telas = createStackNavigator({
  
  Principal:{
    screen:Principal
  },

  Sistemas_de_Informacao:{
    screen:Sistemas_de_Informacao
  },

Valor:{
    screen:Valor
  },

  CienciasContabeis:{
    screen: CienciasContabeis
  },

 ValorContabeis:{
    screen:ValorContabeis
  }, 
  
  LetrasIngles:{
    screen: LetrasIngles
  },

  ValorLetras:{
    screen:ValorLetras
  }, 

  Geografia:{
    screen: Geografia
  },
  ValorGeografia:{
    screen:ValorGeografia
  }

});

export default createAppContainer(telas);
