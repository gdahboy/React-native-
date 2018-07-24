import {StackNavigator} from 'react-navigation'
import Questionone from './questionone' ; 
import questiontwo  from './questiontwo' ;
import questionthree from './Questionthree';
import seeresult from './seeresult';
import Home from './Home'

export default  Stack = StackNavigator({
    Questionone : {screen : Questionone} , 
    questiontwo : {screen : questiontwo} , 
    questionthree : {screen : questionthree } , 
    seeresult :  {screen : seeresult} , 
    Home : {screen : Home}
    
  }, {
    initialRouteName: 'Home' , 
  } , {
  })