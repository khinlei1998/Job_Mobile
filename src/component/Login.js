import { View, Text, TouchableOpacity, Image, ToastAndroid, Keyboard } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import InputField from './ui/InputField';
import { AuthContext } from './Context/context';
import { MMKV } from 'react-native-mmkv'
import { getlanguage } from './Language';
import styles from './Style/LoginStyle';

export default function Login(props) {
    const { showData, getAuth, getlang } = useContext(AuthContext)
    const [email, setemail] = useState()
    const [password, setPassword] = useState()
    const [login, setLogin] = useState(true)
    const storage = new MMKV()
    const lng = getlanguage()


    const submitform = () => {
        try {
            const userData = storage.getString('data');
            let data = JSON.parse(userData);
            senddata(data);
        } catch (error) {
            console.log('error :', error);
        }

    }
    const senddata = (value) => {
        if (value.email === email && value.password === password) {
            showData(value.name, email)
            getAuth(true);
        } else {
            ToastAndroid.show('Email or password wrong!', ToastAndroid.SHORT);
        }
    }
    const btnfooter = () => {
        if (login) {
            props.navigation.navigate('SignUp')

        } else {
            props.navigation.navigate('Login')
        }
    }

    const changeLanguage = value => {
        try {
            storage.set('lang', value);
            getlang(value);
        } catch (error) {
            console.log('error', error);
        }
    };


    return (
        <View style={styles.container}>
            <View style={styles.languagecontainer}>
                <TouchableOpacity onPress={() => changeLanguage('en')} >
                    <Text style={{ color: 'black' }}>English</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => changeLanguage('mm')}
                >
                    <Text style={{ color: 'black' }}>Myanmar</Text>

                </TouchableOpacity>
            </View>

            <Image
                resizeMode="cover"
                source={require('../component/assets/image/log.png')}
                style={{
                    width: 200, height: 200,

                }}
            />
            <InputField
                // title={'Login To Your Account'}
                changeemail={(val) => setemail(val)}
                onChangepass={(val) => setPassword(val)}
                email={email}
                password={password}
                btntitle={lng.login}
                btnpress={submitform}
                footerText={lng.NoAccount}
                actionfooter={btnfooter}
                footersubtext={"SignUp"}
                login={login}
            />

        </View>
    )
}