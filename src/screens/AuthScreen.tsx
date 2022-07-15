import React from 'react';
import { useLayoutEffect, useState } from "react"
import { Button, View } from "react-native"
import SignInScreen from "./SignInScreen"
import SignUpScreen from "./SignUpScreen"

const AuthScreen = (props: any) => {
    const [isSignIn, setIsSignIn] = useState(true)

    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerLeft: () => <Button title='Close' onPress={() => props.navigation.goBack() }></Button>
        })
    }, [props.navigation])

    return (
        <View>
        { isSignIn ? (
            <SignInScreen onSignUp={ () => setIsSignIn(false) } />
        ) : ( 
            <SignUpScreen onSignIn={ () => setIsSignIn(true) } /> 
        )}
        </View>
    )
}

export default AuthScreen