import { Button, ScreenHeight, Text } from "@rneui/base";
import React from "react";
import { View, Image } from "react-native";
import { LoginForm, RegisterForm } from "../components/Authentication";
import { NavigationProp } from "@react-navigation/native";

export const Authentication = ({navigation} : any) => {
    return (
        <View
            style={{
                justifyContent:"center",
                padding:"10%"
            }}
        >
            <View
                style={{
                    // width:"50%",
                    alignContent:"center",
                    alignSelf:"center",
                    paddingBottom:"10%"
                }}
            >
            <Image 
            style={{
                height:undefined,
                width:"100%",
                aspectRatio: 1
            }}
            source={require('../images/bonFire.jpg')} />
            </View>
            <LoginForm/>
            <Button style={{paddingTop:"4%"}} title="Forgot Password?" type="clear" onPress={()=>{navigation.navigate("Forgot_Password")}}/>
            <Button title="Register" type="clear" onPress={()=>{navigation.navigate("Register")}}/>
            {/* <RegisterForm/> */}
        </View>
    )
}

export const ForgotPassword = ({navigation} : any) => {
    return (
        <View
            style={{
                justifyContent:"center",
                padding:"10%"
            }}
        >
            <Text>Forgot Password Page</Text>
            <Button title="Never mind" type="clear" onPress={()=>{navigation.navigate("Login")}}/>
        </View>
    )
}

export const Register = ({navigation} : any) => {
    return (
        <View
            style={{
                justifyContent:"center",
                padding:"10%"
            }}
        >
            <Text>Register Page</Text>
            <Button title="Never mind" type="clear" onPress={()=>{navigation.navigate("Login")}}/>
        </View>
    )
}