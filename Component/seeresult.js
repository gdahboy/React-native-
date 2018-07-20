import React, { Component } from 'react'
import {View , Text  , Button} from 'react-native'
// import { } from 'react-native-elements';

export default class seeresult extends Component {

  render() {
    return (
      <View style={{flex : 1 }}>
        <Text>
            result 
            </Text>
            <Button title = "go back to initial view" onPress ={()=> this.props.navigation.navigate('Community')} />
          </View>
    )
  }
}
