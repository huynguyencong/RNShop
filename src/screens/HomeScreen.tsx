import React from 'react';
import { Button, Text, View } from "react-native"

const HomeScreen = ({ navigation } : { navigation: any }) => {
    return (
        <View>
            <Text>Home screen</Text>
            <Button title='Authen' onPress={() => navigation.navigate('Auth') } />
        </View>
    )
}

export default HomeScreen