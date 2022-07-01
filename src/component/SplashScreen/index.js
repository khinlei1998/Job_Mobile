import { View, Text, Image } from 'react-native'
import React, { useEffect, useRef } from 'react'
import Lottie from 'lottie-react-native';

const userimg = require('../assets/image/books.png')
export default function Splashscreen() {
    // const animationRef = useRef < Lottie > (null)

    // useEffect(() => {
    //     animationRef.current?.play()

    //     // Or set a specific startFrame and endFrame with:
    //     animationRef.current?.play(30, 120);
    // }, [])
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
            {/* <Image style={{ width: 80, height: 80 }} source={userimg} /> */}
            {/* <LottieView source={"MyAnimation"} /> */}
            <Lottie
                source={require('../assets/image/welcome1.json')} style={{ width: 180, height: 280 }}
                autoPlay />

            {/* <Text style={{ fontSize: 20, marginTop: 20, color: "black" }}>Welcome Yati </Text> */}
        </View>
    )
}