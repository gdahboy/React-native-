import React from 'react';
import { StyleSheet, Text, View, ListView, Picker, Button, ScrollView  , AppRegistry} from 'react-native';
import { Card, Icon, SideMenu, List, ListItem } from 'react-native-elements'
import IOSIcon from "react-native-vector-icons/Ionicons"



export  default class Home extends React.Component {
    constructor() {
      super()
      const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
      this.state = {
  
        dataSource: ds.cloneWithRows(['row 1', 'row 2']),
      }
    }
    
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
          <View style={{ flex: 0.2 }} >
            <Text >Open up App.js to start working on your app!</Text>
            <Text >Changes you make will automatically reload.</Text>
            <Text >Shake your phone to open the developer menu.</Text>
          </View>
          <View >
            <Picker
              selectedValue={this.state.language}
              style={{ flex: 0.5, height: 50, width: 100 }}
              onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
              <Picker.Item label="Swift" value="sw" />
              <Picker.Item label="C++" value="c++" />
            </Picker>
          </View>
          <Button title='Press' color='#841584' style={{ flex: 3 }} />
  
        </View>
      );
    }
  }