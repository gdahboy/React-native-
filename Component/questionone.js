import React, { Component } from 'react'
import {View , Text  , Button} from 'react-native'
import RadioForm , {RadioButton , RadioButtonLabel ,RadioButtonInput} from  'react-native-simple-radio-button'
import firebase from '../Core/firebase'

// import { } from 'react-native-elements';
var Question  = [
  {label : "jk"  , value : 0 } ,
  {label : "0hhjjh" , value : 1 }  
];
export default class Questionone extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Question : '' , 
      suggestion  : [] , 
      itemIndex : 0  , 
      data : []
    }
    
  }
  
  
  componentDidMount(){
    
    var str =  'test/test/' + this.props.navigation.state.params.listeQuestion ;
    console.log(str);
    var tabsugg = [];  
    firebase.database().ref(str).on('value' , (data)=> {
      var datareturn = data.toJSON() ;               
      this.setState({question : datareturn["Q1"]["question"]}) ;
      this.setState({data : datareturn }  ) ; 
      var i = 0 ;   
    for (var element in datareturn["Q1"]["suggestion"] ) {
      var sugg = {label : element , value : i}
       tabsugg.push(sugg);
       console.log(sugg);
        i++ ; 
    }             
      });
      this.setState({suggestion : tabsugg})
    }
  
  
  


  
  
  
  render() {
    return (
      <View style={{flex : 1  , flexDirection : 'column' ,}}>
        <Text  style = {{ flex :1 ,  marginBottom : 3  , marginLeft : 3 , marginRight : 3 , marginVertical : 3  }}>
            {this.state.question}
            </Text >
            <RadioForm
               style={{flex : 2.5 , marginBottom: 10,  marginTop: 10,}}
                radio_props = {this.state.suggestion}
                onPress = {(value , itemIndex) => {this.setState({value : value , itemIndex : itemIndex})}}
                />

            <Button style={{flex : 3 , marginBottom : 20}} title = "next" onPress ={()=> this.props.navigation.navigate('questiontwo' , {listeQuestion :  this.state.itemIndex})} />
          </View>
    )
  }
}
