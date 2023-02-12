import React from 'react';
import { Button, Input} from '@rneui/themed';
import { View } from 'react-native'
import {FirebaseContext, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "../context/authentication"

const RegisterForm = () => {

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    const auth = React.useContext(FirebaseContext)
    return (
        <View>
            <Input placeholder='Email' onChangeText={setEmail}/>
            <Input placeholder='Password' secureTextEntry onChangeText={setPassword}/>
            <Button title="Register" onPress={()=>{
                createUserWithEmailAndPassword(auth, email, password)
            }}/>
        </View>
    )
}

const LoginForm = () => {

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    const auth = React.useContext(FirebaseContext)
    return (
        <View>
            <Input placeholder='Email' onChangeText={setEmail}/>
            <Input placeholder='Password' onChangeText={setPassword} secureTextEntry/>
            <Button size="lg" title="Login" onPress={()=>{
                signInWithEmailAndPassword(auth, email, password)
            }}/>
        </View>
    )
}

const Logout = () => {
    const auth = React.useContext(FirebaseContext)
    return <Button title="Logout" onPress={()=>{signOut(auth)}}/>
}

export { RegisterForm, LoginForm, Logout };