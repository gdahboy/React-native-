import React from 'react';
import { StyleSheet, Text, View, ListView, Picker, Button, ScrollView  , AppRegistry} from 'react-native';
import { Card, Icon, SideMenu, List, ListItem } from 'react-native-elements'
import IOSIcon from "react-native-vector-icons/Ionicons"
import firebase from 'firebase'

 export default class Q  extends React.Component {
     constructor(props){
         super(props)
         var config = {
            apiKey: "AIzaSyDzUgGTytKthUjTALVaSuw8z5r2z3aV5nU",
            authDomain: "mybot-90487.firebaseapp.com",
            databaseURL: "https://mybot-90487.firebaseio.com",
            projectId: "mybot-90487",
            storageBucket: "mybot-90487.appspot.com",
            messagingSenderId: "1067276994508"
          };
          firebase.initializeApp(config); 
          var abderaahim = 4 ; 
     }
     render() {
        if (this.abderaahim > 5) {
            return(<Text>Yesss</Text>) ; 
            console.log("yesss") ; 
        }else{
            return(<Text>noooo</Text>) ; 
            console.log('nooo') ;
        }
     }
    
    

  }