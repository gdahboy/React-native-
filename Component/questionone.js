import React, { Component } from 'react'
import {View , Text  , Button} from 'react-native'
import RadioForm , {RadioButton , RadioButtonLabel ,RadioButtonInput} from  'react-native-simple-radio-button'
import firebase from '../Core/firebase'

// import { } from 'react-native-elements';
var Question  = [
  {label : "1"  , value : 0 } ,
  {label : "0 " , value : 1 }  
];
export default class Questionone extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Question : '' , 
      suggestion  : [] , 
      itemIndex : 0 
    }
    
  }
  aaa(){
    console.log(typeof(this.state.suggestion));
    return this.state.suggestion ; 
  }
  
  componentDidMount(){
    var str =  'test/' + this.props.navigation.state.params.listeQuestion ; 
    console.log(str) ; 

    firebase.database().ref(str).on('value' , (data)=> {
      var datareturn = data.toJSON() ;
      var i = 0 ; 
              this.setState({question : datareturn["Q1"]["question"]}) ;   
                for (var element in datareturn["Q1"]["suggestion"] ) {
                   var sugg = {label : element , value : i}
                  this.setState({
                    suggestion : this.state.suggestion.push(sugg)
                  }) ; 
                  i++ ; 
                }
              });   
              console.log(this.state.suggestion)    ;
              console.log(typeof(this.state.suggestion));
              console.log("********************") ; 
               
  } 

  
  
  
  render() {
    return (
      <View style={{flex : 1  , flexDirection : 'column' ,}}>
        <Text  style = {{ flex :1 ,  marginBottom : 3  , marginLeft : 3 , marginRight : 3 , marginVertical : 3  }}>
            {this.state.question}
            </Text >
            <RadioForm
               style={{flex : 2.5 , marginBottom: 10,  marginTop: 10,}}
                radio_props = {this.aaa()}
                onPress = {(value , itemIndex) => {this.setState({value : value , itemIndex : itemIndex})}}
                />

            <Button style={{flex : 3 , marginBottom : 20}} title = "next" onPress ={()=> this.props.navigation.navigate('questiontwo' , {listeQuestion :  this.state.itemIndex})} />
          </View>
    )
  }
}
