import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Splash, Login, Home, Galeri, Pesanan, Notifikasi, Menu } from '../pages';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
    />
  );
}

const MainApp = () => {
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then(response => response.json())
  //     .then(json => console.log(json))
  // }, []);


  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: '#ef6C18',
      }}
    >
      <Tab.Screen name="Teman Itu Sukses Bareng" component={Home}
        options={{
          headerLeft: (props) => <LogoTitle {...props} style={{ marginTop: 100 }} />,
          headerLeftContainerStyle: {
            paddingLeft: 10, // Mengatur margin kiri pada tombol Info
          },

          headerRight: () =>
            <View style={{ flexDirection: 'row' }}><Button
              onPress={() =>
                alert('This is a button!')
              }
              title="Io"
              color="#00cc00"
            />
              <View style={{ width: 5 }} />
              <Button
                onPress={() =>
                  alert('This is a button!')
                }
                title="I2"
                color="#00cc00"
              />

            </View>,

          headerRightContainerStyle: {
            paddingRight: 10, // Mengatur margin kanan pada tombol Info
          },
          tabBarLabel: 'Coba Home',
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require('../assets/menu.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#ef6C18' : 'black',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen name="Galeri" component={Galeri}
        options={{
          headerLeft: (props) => <LogoTitle {...props} style={{ marginTop: 100 }} />,
          headerLeftContainerStyle: {
            paddingLeft: 10, // Mengatur margin kiri pada tombol Info
          },
          headerRight: () => <Button
            onPress={() =>
              // console.log('test, hello')
              alert('This is a button!')
            }
            title="Info"
            color="#00cc00"
          />,
          headerRightContainerStyle: {
            paddingRight: 10, // Mengatur margin kanan pada tombol Info
          },
          tabBarLabel: 'Galeri Desain',
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require('../assets/menu.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#ef6C18' : 'black',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen name="Pesanan" component={Pesanan} options={{
        // headerShown:false,

        tabBarLabel: 'Pesanan',
        tabBarIcon: ({ focused }) => (
          <View>
            <Image
              source={require('../assets/pesanan.png')}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#ef6C18' : 'black',
              }}
            />
          </View>
        ),
        tabBarBadge: 3,
      }} />
      <Tab.Screen name="Notifikasi" component={Notifikasi} options={{
        // headerShown:false,

        tabBarLabel: 'Notifikasi',
        tabBarIcon: ({ focused }) => (
          <View>
            <Image
              source={require('../assets/pesanan.png')}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#ef6C18' : 'black',
              }}
            />
          </View>
        ),
      }} />
      <Tab.Screen name="Menu" component={Menu} options={{
        // headerShown:false,
        tabBarLabel: 'Coba Menu',
        tabBarIcon: ({ focused }) => (
          <View>
            <Image
              source={require('../assets/menu.png')}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#ef6C18' : 'black',
              }}
            />
          </View>
        ),
      }} />
    </Tab.Navigator>
  )
}
const Router = () => {
  return (
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen name="Splash" component={Splash}
        // Buat menghapus Header (AppBar)
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})