import React, { Component } from 'react'
import {View , Text  , Button} from 'react-native'
// import { } from 'react-native-elements';

export default class Questionone extends Component {
  constructor(props) {
    super(props)
    
  }
  render() {
    return (
      <View style={{flex : 1 }}>
        <Text>
            question1
            </Text>
            <Button title = "next" onPress ={()=> this.props.navigation.navigate('questiontwo')} />
          </View>
    )
  }
}
