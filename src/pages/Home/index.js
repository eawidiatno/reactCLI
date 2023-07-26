// App.js
import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, Modal, TouchableOpacity, ScrollView, SafeAreaView, ActivityIndicator } from 'react-native';
import { color } from '../../utils';
import { useDispatch, useSelector } from 'react-redux'
import { getInformasi, getPrognosis, getSaldo } from '../../redux/action/home_action';
import { formatCurrency } from 'react-native-currency-formatter';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';



const Home = () => {



  // Nyoba Redux--------------------------------------------//
  const { dataInformasi, dataSaldo, dataPrognosis } = useSelector(state => state.homeReducer)
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const [prognosis, setPrognosis] = useState();
  const [loading, setLoading] = useState(true);

  //-----------------------------------------------------------//

  // FORMAT CURRENCY--------------------------------------------//
  // const formatCurrency = (amount) => {
  //   return `IDR.${amount.toLocaleString('id-ID', {
  //     minimumFractionDigits: 0,
  //     maximumFractionDigits: 0,
  //   })}`;
  // };
  //-----------------------------------------------------------//



  useEffect(() => {

    setTimeout(() => {
      getInformasi(dispatch);
      getSaldo(dispatch);
      getPrognosis(dispatch);
      setLoading(false);
    }, 3000);


  }, [dispatch]);

  useEffect(() => {
    // setTimeout(() => {
    console.log('dataInformasi:', dataInformasi);
    if (dataInformasi && dataInformasi.data_gambar && dataInformasi.data_gambar.length > 0) {
      setData(dataInformasi);
    }
    // setLoading(false);
    // }, 3000);
  }, [dataInformasi]);

  useEffect(() => {
    // setTimeout(() => {
    // console.log('dataSaldo:', dataSaldo);
    // setLoading(false);
    // }, 3000);
  }, [dataSaldo]);

  useEffect(() => {

    // console.log('dataPrognosis:', dataPrognosis);
    setPrognosis(dataPrognosis);
  }, [dataPrognosis]);


  if (loading) {
    return (
      <View>
        <SkeletonPlaceholder borderRadius={4}>
          <SkeletonPlaceholder.Item flexDirection="column" marginLeft={20}>
            <SkeletonPlaceholder.Item marginTop={10} width={320} height={200} borderRadius={10} />
            <SkeletonPlaceholder.Item marginTop={20} width={200} height={40} borderRadius={10} />
            <SkeletonPlaceholder.Item marginTop={20} width={320} height={120} borderRadius={10} />
            <SkeletonPlaceholder.Item marginTop={20} width={320} height={170} borderRadius={10} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <TouchableOpacity>
          <View style={styles.container} >
            {data ? <Image source={{ uri: data.data_gambar[0] }} style={styles.image} /> :
              <SkeletonPlaceholder borderRadius={4}>
                <SkeletonPlaceholder.Item>
                  <SkeletonPlaceholder.Item width={370} height={220} />
                </SkeletonPlaceholder.Item>
              </SkeletonPlaceholder>
            }


            <View style={styles.overlay}>
              <Text style={styles.overlayText}>*Ketuk untuk melihat detail.</Text>
            </View>
          </View>
        </TouchableOpacity>

        <View style={{ height: 15 }} />

        <View
          style={{
            height: 1,
            borderBottomWidth: 1,
            borderColor: color.greyColors,
            marginLeft: 10,
            marginRight: 10,
          }}
        />

        <View style={styles.containerSaldo}>
          <View style={styles.headingContainer}>
            <Text style={styles.headingText}>Pendapatan - Peluangnya</Text>
          </View>

          {/* DETAIL SALDO TISB */}
          <TouchableOpacity style={styles.detailSaldoTisbContainer}>
            {/* <Image source={require('./assets/icons/iconPendapatan.png')} style={styles.iconImage} /> */}
            <Text style={styles.saldoTisbText}>Saldo TISB</Text>
            <View style={styles.saldoTisbAmountContainer}>

              <Text style={styles.saldoTisbAmount}>
                IDR. {dataSaldo ? (dataSaldo.saldo_tisb) :
                  <ActivityIndicator></ActivityIndicator>}
              </Text>

            </View>
            <Text style={styles.saldoTisbDescription}>
              berasal dari transaksi yang sudah selesai.
            </Text>
            <Text style={styles.saldoTisbHint}>*Ketuk untuk melihat detail</Text>
          </TouchableOpacity>

        </View>

        {/* DETAIL PROGNOSIS */}
        <View style={styles.containerPendapatan}>
          <TouchableOpacity style={styles.detailPrognosisContainer} >
            {/* <Image source={require('./assets/icons/iconPendapatan.png')} style={styles.iconImage} /> */}
            <Text style={styles.prognosisText}>Peluang Pendapatan</Text>

            <View style={styles.prognosisAmountContainer}>

              <Text style={styles.prognosisAmount}>
                + IDR. {prognosis && prognosis.data_omset && prognosis.data_omset.total_pendapatan
                  ? (prognosis.data_omset.total_pendapatan) :
                  <ActivityIndicator></ActivityIndicator>}
              </Text>
            </View>

            <Text style={styles.prognosisDescription}>
              peluang pendapatan jika semua transaksimu selesai hari ini.
            </Text>

            <Text style={styles.peluangHint}>*Ketuk untuk melihat detail</Text>
          </TouchableOpacity>

        </View>

        <View
          style={{
            height: 1,
            borderBottomWidth: 1,
            borderColor: color.greyColors,
            marginLeft: 10,
            marginRight: 10,
          }}
        />
        <View style={styles.containerSaldo}>
          <View style={styles.headingContainer}>
            <Text style={styles.headingText}>Pengerjaan Desain</Text>
          </View>

          {/* DETAIL SALDO TISB */}
          <TouchableOpacity style={styles.detailSaldoTisbContainer}>
            {/* <Image source={require('./assets/icons/iconPendapatan.png')} style={styles.iconImage} /> */}
            <Text style={styles.saldoTisbText}>Selesai</Text>
            <View style={styles.saldoTisbAmountContainer}>
              <Text style={styles.saldoTisbAmount}>
              </Text>
            </View>
            <Text style={styles.saldoTisbDescription}>
              berasal dari transaksi yang sudah selesai.
            </Text>

          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView >


  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    overflow: 'hidden',
    aspectRatio: 78 / 50,
    marginHorizontal: 10
  },
  containerSaldo: {
    marginBottom: 15,
    borderRadius: 8,
    marginHorizontal: 10
  },
  containerPendapatan: {
    borderRadius: 8,
    marginHorizontal: 10
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(97, 97, 97, 0.6)',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomRightRadius: 8,
  },
  overlayText: {
    color: 'white',
    fontSize: 11,
  },
  headingContainer: {
    marginVertical: 20,
  },
  headingText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  loadingContainer: {
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    height: 160,
    // Implement loading indicator styles here
  },
  detailSaldoTisbContainer: {
    // marginBottom: 15,
    paddingVertical: 15,
    paddingHorizontal: 17,
    borderRadius: 10,
    backgroundColor: 'orange', // You can implement a gradient here using linearGradient or other libraries
    shadowColor: 'grey',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
  iconImage: {
    width: 32,
    height: 32,
    tintColor: 'white', // Apply the desired color
  },
  saldoTisbText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white', // Apply the desired color
    marginLeft: 12,
  },
  saldoTisbAmountContainer: {
    marginTop: 11,
  },
  saldoTisbAmount: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white', // Apply the desired color
  },
  saldoTisbDescription: {
    fontSize: 14,
    color: 'white', // Apply the desired color
  },
  saldoTisbHint: {
    fontSize: 11,
    color: 'white',
    textAlign: 'right',
    marginTop: 8,
  },
  peluangHint: {
    fontSize: 11,
    color: 'red',
    textAlign: 'right',
    marginTop: 8,
  },
  loadingContainer: {
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    height: 218,
    // Implement loading indicator styles here
  },
  detailPrognosisContainer: {
    marginBottom: 12,
    paddingVertical: 15,
    paddingHorizontal: 17,
    borderRadius: 10,
    backgroundColor: 'white', // You can apply different colors or gradients here
    shadowColor: 'grey',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
  iconImage: {
    width: 32,
    height: 32,
    tintColor: 'white', // Apply the desired color
  },
  prognosisText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'green', // Apply the desired color
    marginLeft: 12,
  },

  prognosisAmountContainer: {
    marginTop: 23,
  },
  prognosisAmount: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'green', // Apply the desired color
  },
  prognosisDescription: {
    fontSize: 14,
    color: 'green', // Apply the desired color
    marginTop: 3,
  },
});

export default Home;
