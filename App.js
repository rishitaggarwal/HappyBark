import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createBottomTabNavigator} from 'react-navigation-tabs'
import DonationScreen from './screens/donationScreen'
import ReportScreen from './screens/reportScreen'
import RecieverScreen from './screens/recieverScreen'

import {createAppContainer} from 'react-navigation'

export default class App extends React.Component {
  render(){
  return (
    <View style={{flex:1}}>
      <AppContainer />
    </View>
  );}
}

const styles = StyleSheet.create({
 
});

const AppTabNavigator = createBottomTabNavigator({
  ReportScreen:{
  screen:ReportScreen
  
  },
  DonationScreen:{
  screen:DonationScreen
  },
  Reciever:{
screen:RecieverScreen

  }
 
    
  
  
  })
const AppContainer = createAppContainer(AppTabNavigator)