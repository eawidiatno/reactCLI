import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Menu = ({ navigation }) => {
  const logOutState = () => {
    AsyncStorage.removeItem('authToken')
    navigation.replace("Login")
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={logOutState}>
        <Text>LogOut</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Menu

const styles = StyleSheet.create({})