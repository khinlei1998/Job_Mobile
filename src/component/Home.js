import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AuthContext } from './Context/context';
import { storage } from './Storage/Appstorage';
import styles from './Style/HomeStyle';
export default function Home() {
    const { getAuth, userdata } = useContext(AuthContext);
    //string
    var userinfo = JSON.parse(userdata);
    console.log('userdata', typeof (userdata));


    const btnlogout = () => {
        storage.delete('data')

        getAuth(false)
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.title}>Welcome: {userinfo.name} </Text>
            <Text style={styles.subtitle}>Email: {userinfo.email} </Text>

            <TouchableOpacity
                onPress={() => btnlogout()}
                style={{
                    backgroundColor: '#1D3FB1', width: wp('80%'), height: hp('6%'),
                    alignItems: 'center', justifyContent: 'center', marginTop: 30, borderRadius: 20,
                }}>

                <Text >logout</Text>
            </TouchableOpacity>
        </View >
    )
}