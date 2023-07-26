import { Animated, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { splashScreen } from '../../assets';
import { color } from '../../utils';
import AsyncStorage from '@react-native-async-storage/async-storage'

const Splash = ({ navigation }) => {
  useEffect(() => {
    const _validasiSession = async () => {
      const isLogin = await AsyncStorage.getItem('authToken')
      // console.warn(isLogin)
      navigation.replace(isLogin ? "MainApp" : "Login")

    }
    _validasiSession()
  }, [])
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.replace('Login')
  //   }, 3000);
  // })
  return (
    <View style={styles.background}>
      <Image source={splashScreen} style={styles.logo} />

    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  background: {
    flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: color.blackColors
  },
  logo: {
    width: 222, height: 105
  }
})