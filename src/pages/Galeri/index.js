import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Galeri = () => {
    const [list, setList] = useState([])
    useEffect(() => {
        getGenre();
    }, []);


    const getGenre = async (data) => {
        try {
            // Ambil token otentikasi dari Async Storage
            const authToken = await AsyncStorage.getItem('authToken');

            const response = await axios({
                url: `https://reseller.regarsport.net/api/home_input_genre`,
                method: "GET",
                data: data,
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    'Content-Type': 'application/json',
                },
            });

            return setList(response.data)
        } catch (error) {
            throw error.response.data;
        }
    };


    // const getGenre = () => {
    //   fetch("https://reseller.regarsport.net/api/kalkulator_harga/home_input_genre", {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json"
    //     }
    //   }).then(response => {
    //     return response.json()
    //   }).then(response => {
    //     var data = response
    //     console.log(data)
    //     setList(data)
    //   }).catch(err => {
    //     console.log(err)
    //   })
    // }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={{
                    padding: 20,
                    backgroundColor: "silver"
                }}>
                <View>
                    {list.map((item, index) => {
                        return (
                            <TouchableOpacity style={styles.button} onPress={onPress = () =>
                                // console.log('test, hello')
                                alert(item.genre)
                            } key={index}>
                                <View style={{ paddingVertical: 15, flexDirection: 'row' }} >
                                    <Image
                                        style={{ width: 100, height: 100, borderRadius: 100, }}
                                        source={{ uri: item.gambar_genre }}
                                    />
                                    <View style={{ paddingLeft: 20 }}>
                                        <Text>{item.genre}</Text>
                                        <Text>{item.deskripsi_term}</Text>
                                    </View>
                                </View>

                            </TouchableOpacity>
                        )
                    })}
                </View>
            </ScrollView>

        </SafeAreaView>

    )
}

export default Galeri

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: StatusBar.currentHeight,
    },
    // scrollView: {
    //   backgroundColor: 'pink',
    //   marginHorizontal: 20,
    // },
    text: {
        fontSize: 42,
    },
})