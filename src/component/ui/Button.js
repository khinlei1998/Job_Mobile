import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function Button(props) {
    return (
        <TouchableOpacity style={{
            marginTop: 20, backgroundColor: '#00cc00', width: wp('50%'), height: hp('6%'),
            alignItems: 'center', justifyContent: 'center', borderRadius: 20, flexDirection: 'row'
        }}>

            <Text >{props.name}</Text>
        </TouchableOpacity>
    )
}