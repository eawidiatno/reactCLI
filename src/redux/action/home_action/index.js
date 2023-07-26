import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios"


export const getInformasi = async (dispatch) => {
    try {
        const authToken = await AsyncStorage.getItem('authToken');
        const result = await axios.get(`https://reseller.regarsport.net/api/v2/minjoss/informasi`, {
            headers: {
                Authorization: `Bearer ${authToken}`,
                'Content-Type': 'application/json',
            },
        });

        dispatch({ type: 'GET_INFORMASI', payload: result.data });
        // console.log(result.data);
    } catch (error) {
        console.log('informasi', error);
    }
};
export const getSaldo = async (dispatch) => {
    try {
        const authToken = await AsyncStorage.getItem('authToken');
        const result = await axios.get(`https://reseller.regarsport.net/api/v2/saldo_tisb`, {
            headers: {
                Authorization: `Bearer ${authToken}`,
                'Content-Type': 'application/json',
            },
        });

        dispatch({ type: 'GET_SALDO', payload: result.data });
        // console.log(result.data);
    } catch (error) {
        console.log('saldo', error);
    }
};
export const getPrognosis = async (dispatch) => {
    try {
        const authToken = await AsyncStorage.getItem('authToken');
        const result = await axios.get(`https://reseller.regarsport.net/api/v2/beranda/data_prognosis`, {
            headers: {
                Authorization: `Bearer ${authToken}`,
                'Content-Type': 'application/json',
            },
        });

        dispatch({ type: 'GET_PROGNOSIS', payload: result.data });
        // console.log(result.data);
    } catch (error) {
        console.log('prognosis', error);
    }
};