import React , {createElement} from 'react';
import { StyleSheet, Text, View, ListView, Picker, Button, ScrollView, AppRegistry  , PickerItem , PickerIOS} from 'react-native';
import { Card, Icon, SideMenu, List, ListItem } from 'react-native-elements'
import IOSIcon from "react-native-vector-icons/Ionicons"
import {StackNavigator} from 'react-navigation'
import Questionone from './questionone' ; 
import questiontwo  from './questiontwo' ;
import questionthree from './Questionthree';
import seeresult from './seeresult';



export  default class Home extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      selectedValue : '' ,
      test: [] ,
      count : 0  , 
      language : ''
     
    }
  }

  
  componentDidMount() {
    for (var test in (this.props.navigation.state.params.listeQuestion)) {
      this.setState({
        test: this.state.test.push(test)
      });
    }
    Object.keys(this.state.test).map( (item, key) => ( 
       this.setState.count  =  this.state.count++    
     )) ;
  
  }
  ewfegrhy = (tab , count) => {
    var bb =[]
    for (var test in (this.props.navigation.state.params.listeQuestion)) {
       bb.push(test)
      }
    var aaaa = [] ; 
    for(var i = 0 ; i <count ; i++) {
      aaaa.push(<Picker.item label = {bb[i]} value ={bb[i]} key = {i} />) ; 
      console.log((bb[i]));
    }
    return aaaa ; 
  } 
  render() {
    
    return (

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <View style={{ flex: 0.2 }} >
          <Text >Open up App.js to start working on your app!</Text>
          <Text >Changes you make will automatically reload.</Text>
          <Text >Shake your phone to open the developer menu.</Text>
          <Text></Text>
        </View>
        <View >
          
        <Picker
            selectedValue={this.state.language}
            style={{ flex: 0.5, height: 50, width: 100 }}
            onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
            {
              this.ewfegrhy(this.state.test , this.state.count).map((element , index) => {
                return element 
              })
            }
            
          </Picker>
          
            

        
        </View>
        <Button title='Press' color='#841584' style={{ flex: 3 }} onPress ={()=> this.props.navigation.navigate('Questionone')} />
        

      </View>
    );
  }
}

