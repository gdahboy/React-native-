import React, { Component } from 'react'
import {View , Text  , Button} from 'react-native'
import seeresult from "./seeresult"

export default class Questiotwo extends Component {
  render() {
    return (
      <View style={{flex : 1 }}>
        <Text>
            question2
            </Text>
            <Button title = "next" onPress ={()=> this.props.navigation.navigate('questionthree')} />
          </View>
    )
  }
}