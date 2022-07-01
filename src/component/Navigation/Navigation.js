import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Home';
export default function Navigation() {
    const Stack = createNativeStackNavigator();

    return (

        <Stack.Navigator>

            <Stack.Screen name="Home" component={Home} options={{
                headerShown: false,
            }}
            />

        </Stack.Navigator>


    )
}