import React from 'react';
import { StyleSheet, Text, View, ListView, Picker, Button, ScrollView  , AppRegistry} from 'react-native';
import { Card, Icon, SideMenu, List, ListItem } from 'react-native-elements'
import IOSIcon from "react-native-vector-icons/Ionicons"
export  default class Settings extends React.Component {
    render() {
      return (
        <ScrollView>
          <View >
  
            <Card
              title='HELLO WORLD'
            >
              <Text style={{ marginBottom: 10 }}>
                The idea with React Native Elements is more about component structure than actual design.
           </Text>
              <Button
                icon={<Icon name='code' color='#ffffff' />}
                backgroundColor='#03A9F4'
                fontFamily='Lato'
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title='VIEW NOW' />
  
            </Card>
            <Card
              title='HELLO WORLD'
            >
              <Text style={{ marginBottom: 10 }}>
                The idea with React Native Elements is more about component structure than actual design.
           </Text>
              <Button
                icon={<Icon name='code' color='#ffffff' />}
                backgroundColor='#03A9F4'
                fontFamily='Lato'
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title='VIEW NOW' />
            </Card>
            <Card
              title='HELLO WORLD'
            >
              <Text style={{ marginBottom: 10 }}>
                The idea with React Native Elements is more about component structure than actual design.
           </Text>
              <Button
                icon={<Icon name='code' color='#ffffff' />}
                backgroundColor='#03A9F4'
                fontFamily='Lato'
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title='VIEW NOW' />
            </Card>
  
          </View>
        </ScrollView>
      );
    }
  }