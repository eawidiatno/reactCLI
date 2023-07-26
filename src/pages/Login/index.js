import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { color } from '../../utils'
import { Input } from '../../components'
import { useNavigation } from '@react-navigation/native'
// import axios, { Axios } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getLogin } from '../../redux/action/auth_action'

const Login = () => {

    const dispatch = useDispatch();
    const loginState = async () => {
        try {
            const response = await axios.post(`https:/reseller.regarsport.net//api/login`, {
                username: form.userName,
                password: form.password
            })
            // Handle the response as needed
            console.log('Response:', response.data);
            // response.data;
            const Token = response.data.token;
            if (Token) {
                AsyncStorage.setItem('authToken', Token);
                navigation.navigate('MainApp')
            }
        } catch (error) {
            // Handle the error as needed
            console.warn('Error:', error.response.data.message);
            // throw error;
        }
    };
    // () => {
    //     fetch("https:/reseller.regarsport.net//api/login", {
    //         method: "POST",
    //         headers: {
    //             "Content-type": "application/json; charset=UTF-8"
    //         },

    //         body: JSON.stringify({
    //             username: form.userName,
    //             password: form.password
    //         })
    //     }).then(response => {
    //         // if (response.ok) {
    //         return response.json();
    //         // } else {
    //         //     throw new Error('username & password tidak valid');
    //         // }

    //     })
    //         .then(response => {
    //             // console.log('success', response);
    //             console.warn(response.message)
    //             const Token = response.token;
    //             if (Token) {
    //                 AsyncStorage.setItem('authToken', Token);
    //                 navigation.navigate('MainApp')
    //             }
    //         })
    //         .catch(err => {
    //             console.warn(err)
    //         });
    // }
    const navigation = useNavigation()

    const [form, setForm] = useState({
        userName: '',
        password: ''
    })

    const onInputChange = (value, input) => {
        setForm({
            ...form,
            [input]: value
        })
    }

    // Nyoba Redux
    const { dataLogin } = useSelector(state => state.authReducer)

    const loginData = () => {
        const user = form.userName;
        const pass = form.password;
        // loginState();
        dispatch(getLogin({ user, pass }));
        // console.log(dataLogin);
        const Token = dataLogin.token;
        if (Token) {
            AsyncStorage.setItem('authToken', Token);
            navigation.navigate('MainApp')
        }
        // console.log('Klik Login', form)
        // console.warn('Hasil Form ', form)
        // navigation.navigate('MainApp')

    };
    return (
        <View style={{ flex: 1, justifyContent: 'center', padding: 24 }}>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ marginBottom: 8, fontWeight: '700', fontFamily: 'Poppins-Bold', fontSize: 22 }}>Selamat Datang</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ textAlign: 'center', marginBottom: 48, fontSize: 18 }}>Silakan masuk dan menjadi sukses   bersama kami.</Text>
            </View>


            <Input placeholder='Nama Pengguna'
                value={form.userName}
                onChangeText={(value) => onInputChange(value, 'userName')}
            />
            <View style={{ height: 21 }} />

            <Input placeholder='Kata Sandi'
                value={form.password}
                onChangeText={(value) => onInputChange(value, 'password')}
                secureTextEntry={true}
            />
            <View style={{ height: 21 }} />

            <TouchableOpacity onPress={loginData} style={{ backgroundColor: color.greyColors, borderRadius: 10, paddingVertical: 10, paddingHorizontal: 150 }}>
                <Text style={{ fontFamily: 'Poppins-Bold', fontWeight: 'bold', color: color.whiteColors }}>Masuk</Text>
            </TouchableOpacity>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ marginTop: 30, fontWeight: 'bold', fontFamily: 'Poppins-Bold', fontSize: 26 }}>Teman itu Sukses Bareng</Text>
            </View>


        </View>
    )
}

export default Login

const styles = StyleSheet.create({})