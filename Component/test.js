import firebase from '../Core/firebase'
import {View , Text , ActivityIndicator} from 'react-native' ; 
import React, { Component } from 'react'
import fetchdatabse from '../Core/fetchdatabase'
import { isObject } from 'util';
import Choice from '../Component/ChoiceQuestion' ;
import Home from '../Component/Home' ;  
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
          
            firebase.database().ref('users').on('value' , (data)=> {
                var datareturn = data.toJSON() ; 
                // console.log( ' the state is') ; 
                // console.log(this.state) ;
                this.setState({data : datareturn}) ; 
                //console.log(this.state) ;
        
            }); 
        
            
            
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
          )
      } else{
          return(
          <View style ={{ flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',}}>
              <Home listeQuestion = {this.state.data} />
          </View>
          )
      }
     
    }
} 
