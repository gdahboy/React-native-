import React, { Component } from 'react'
import {View , Text , Button } from 'react-native'


export default class questionthree extends Component {
  render() {
    return (
      <View style={{flex : 1 }}>
        <Text>
            question3
            </Text>
            <Button title = "next" onPress ={()=> this.props.navigation.navigate('seeresult')} />

          </View>
    )
  }
}