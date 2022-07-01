import { View, Text, TextInput, TouchableOpacity, } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { getlanguage } from '../Language';
import CheckBox from '@react-native-community/checkbox';
export default function InputField(props) {
    const lng = getlanguage()
    const [isSelected, setSelection] = useState()

    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <>

            <Text style={{ color: "black", fontSize: 20, marginBottom: 20 }}>{props.title}</Text>
            {!props.login &&
                <TextInput
                    placeholder={lng.Name}
                    placeholderTextColor="#8D8B8B"
                    onChangeText={props.changename}
                    value={props.name}
                    style={{
                        backgroundColor: 'white', borderRadius: 15, width: wp('80%'), margin: 10, height: hp('6%'), shadowOffset: { width: 0, height: 15 },
                        shadowOpacity: 0.25,
                        elevation: 3, color: '#8D8B8B'

                    }}
                />
            }
            <TextInput
                placeholder={lng.Email}
                placeholderTextColor="#8D8B8B"
                onChangeText={props.changeemail}
                value={props.email}
                style={{
                    backgroundColor: 'white', borderRadius: 15, margin: 10, width: wp('80%'), height: hp('7%'), shadowOffset: { width: 0, height: 15 },
                    shadowOpacity: 0.25,
                    elevation: 3, color: '#8D8B8B'

                }}
            />

            <TextInput
                secureTextEntry={true}
                placeholder={lng.Password}
                onChangeText={props.onChangepass}
                placeholderTextColor="#8D8B8B"
                value={props.password}
                style={{
                    margin: 10, backgroundColor: 'white', borderRadius: 15, width: wp('80%'), height: hp('7%'), shadowColor: '#000000',
                    shadowOffset: { width: 0, height: 15 },
                    shadowOpacity: 4,
                    elevation: 3, color: '#8D8B8B'

                }} />

            {/* {this.state.passwordErrorMessage.length > 0 && <Text style={styles.textDanger}>{this.state.passwordErrorMessage}</Text>} */}


            {!props.login &&
                <TextInput
                    secureTextEntry={true}
                    placeholder={lng.Confirm}
                    placeholderTextColor="#8D8B8B"
                    onChangeText={props.changcpassword}
                    value={props.cpassword}
                    style={{
                        backgroundColor: 'white', borderRadius: 15, width: wp('80%'), margin: 10, height: hp('6%'), shadowOffset: { width: 0, height: 15 },
                        shadowOpacity: 0.25,
                        elevation: 3, color: '#8D8B8B'

                    }}
                />
            }
            <Text style={{ color: 'red' }}>{props.passworderror && props.passworderror}</Text>

            {props.login &&
                <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        style={{ width: 50, height: 50 }}
                        tintColors={{ true: 'black', false: '#1D3FB1' }}
                    />
                    <Text style={{ marginTop: 15, color: '#8D8B8B' }}>Remember Password</Text>
                </View>
            }

            <TouchableOpacity
                onPress={props.btnpress}
                style={{
                    backgroundColor: '#1D3FB1', width: wp('80%'), height: hp('6%'),
                    alignItems: 'center', justifyContent: 'center', marginTop: 30, borderRadius: 20, flexDirection: 'row'
                }}>

                <Text >{props.btntitle}</Text>
            </TouchableOpacity>


            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Text style={{ color: 'black', marginTop: 10 }} >{props.footerText}</Text>
                <TouchableOpacity onPress={props.actionfooter}>
                    <Text style={{ marginLeft: 10, color: "red", marginTop: 10 }} >{props.footersubtext}</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}