import firebase from '../Core/firebase'
import * as firebasee from 'firebase'
import {View , Text , ActivityIndicator, Button} from 'react-native' ; 
import React, { Component } from 'react'
import fetchdatabse from '../Core/fetchdatabase'
import { isObject } from 'util';
import Choice from '../Component/ChoiceQuestion' ;
import Home from '../Component/Home' ;  
//import { Button } from 'react-native-elements';
//import  jQuery from 'jquery' ; 
//var anything = fetchdatabse() ;
export default class test extends Component { 
    constructor(props){
        super(props) ; 
        var data = {} ; 
        var datacheck = {} ; 
        this.state = {data} ; 
    }
    //componentDidMount()
    componentDidMount() {
            firebase.database().ref('test').on('value' , (data)=> {
                var datareturn = data.toJSON() ; 
                        this.setState({data : datareturn}) ; 
            }); 
            if(Object.getOwnPropertyNames(this.state.data).length === 0){
                this.props.navigation.navigate('Home') ; 
            }
    }
    render(){
        if( Object.getOwnPropertyNames(this.state.data).length === 0 )  {
          return(
              <View style= {{ flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',}}>
              <ActivityIndicator />
              </View>
          )}else{
           // this.props.navigation.navigate('Home');
              return( 
            <View style= {{ flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',}}>
              <Text>Ready to Go ??</Text>
              <Button title='start' onPress ={()=> {this.props.navigation.navigate('Somethingelse' , {listeQuestion :  this.state.data} )  }}  />
              </View>
              )
              
            }
          }
     
    }


