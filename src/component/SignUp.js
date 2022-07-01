import { View, Image, ToastAndroid } from 'react-native'
import React, { useContext, useState } from 'react'
import InputField from './ui/InputField'
import { AuthContext } from './Context/context'
import { storage } from './Storage/Appstorage'
import { getlanguage } from './Language'
import styles from './Style/SignUpStyle'
export default function SignUp(props) {
    const lng = getlanguage()
    const [email, setemail] = useState()
    const [password, setPassword] = useState()
    const [name, setName] = useState()
    const [signup, setSignup] = useState(true)
    // const storage = new MMKV()
    const [login, setLogin] = useState(false)
    const { getAuth, setData, showData } = useContext(AuthContext)
    const [cpassword, setcPassword] = useState()
    const [passworderror, setPasswordError] = useState()
    const [nameerror, setNameError] = useState()


    const submitform = () => {
        let data = {
            email,
            password,
            name,
            cpassword,

        }
        console.log('signupdata', data);
        if (!name) {
            ToastAndroid.show('Name Field is Require', ToastAndroid.SHORT);
        }
        else if (!email) {
            ToastAndroid.show('Email Field is Require', ToastAndroid.SHORT);
        }
        else if (!password) {
            ToastAndroid.show('Password Field is Require', ToastAndroid.SHORT);
        }
        else if (!cpassword) {
            ToastAndroid.show('Confirm Password Field is Require', ToastAndroid.SHORT);

        } else if (password !== cpassword) {
            ToastAndroid.show('Passwoad and confirm password should be same', ToastAndroid.SHORT);
        }
        else {
            try {
                storage.set('data', JSON.stringify(data))
                getAuth(true);
                showData(data.name, data.email)
            } catch (error) {
                console.log(error);
            }
        }


    }

    const btnfooter = () => {
        if (login) {
            props.navigation.navigate('SignUp')

        } else {
            props.navigation.navigate('Login')
        }
    }


    return (
        <View style={styles.container}>

            <Image
                resizeMode="cover"
                source={require('../component/assets/image/log.png')}
                style={{
                    width: 200, height: 200,

                }}
            />

            <InputField
                // title={'Sign Up To Your Account'}
                changename={val => setName(val)}
                changeemail={val => setemail(val)}
                onChangepass={val => setPassword(val)}
                changcpassword={val => setcPassword(val)}
                name={name}
                email={email}
                cpassword={cpassword}
                password={password}
                footerText={"Already Account?"}
                btntitle={lng.Signup}
                footersubtext={"Login"}
                actionfooter={btnfooter}
                btnpress={submitform}
                login={login}
                passworderror={passworderror}

            />
        </View>
    )
}