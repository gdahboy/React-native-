import React from 'react';
import { StyleSheet, Text, View, ListView, Picker, Button, ScrollView  , AppRegistry} from 'react-native';
import { Card, Icon, SideMenu, List, ListItem } from 'react-native-elements'
import IOSIcon from "react-native-vector-icons/Ionicons"
import { createStackNavigator, createMaterialTopTabNavigator  , DrawerNavigator  , StackNavigator} from 'react-navigation'




import Question from './Component/ChoiceQuestion'
import ChoiceQuestions from './Component/ChoiceQuestion';
import Questionone from './Component/questionone' ; 
import questiontwo  from './Component/questiontwo' ;
import Home from './Component/Home' ;
import firebase from 'firebase'
import questionthree from './Component/Questionthree';
import seeresult from './Component/seeresult';
import Settings from './Component/Settings' ; 
import Profile from './Component/Profile' ; 
import Result from './Component/Result' ; 
//import firebasescreen from './Core/firebase' ; 
import test from './Component/test' 
import testchoice from './Component/routeStack'


  export const  Stack = StackNavigator({
    TestChoice : {screen :  test} , 
    Somethingelse : {screen : Home} , 
    Questionone : {screen : Questionone} , 
    questiontwo : {screen : questiontwo} , 
    questionthree : {screen : questionthree } , 
    seeresult :  {screen : seeresult}
  }, {
    initialRouteName: 'TestChoice' , 
  } , {
})

  export default   Drawer = DrawerNavigator({
    Test : {screen : Stack} , 
    Community : {screen : Settings} , 
    Result : {screen : Result} , 
    Profile : {screen : Profile} , 
    firebasescreen : {screen : test}
  })
  