import React , {Component} from 'react' ; 
import {Text , View} from 'react-native'
import RadioForm , {RadioButton , RadioButtonLabel ,RadioButtonInput} from  'react-native-simple-radio-button'
var Question  = [
  {label : "happy" , value : 0 } ,
  {label : "sad" , value : 1} , 
  {label : "excited" , value : 2} 
];



export default class ChoiceQuestions extends Component {
    render(){
        return(
            <View style={{flex : 1 ,  alignItems: 'center',
            justifyContent: 'center', padding : 10 }}>
            <RadioForm
                radio_props = {Question}
                onPress = {(value) => {}}
                /> 


            </View>
        ) ; 
    }






}
