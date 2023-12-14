import React, { useState, useContext } from 'react';
import { View, Text, Platform, ActivityIndicator } from 'react-native';
import { Background, Container, Title, Logo, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText, AreaInputPassword, ButtonPassword, InputPassword } from './styles'

import Feather from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../Contexts/auth';

export default function SignIn() {

    const { signIn, loadingAuth } = useContext(AuthContext)
    const navigation = useNavigation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    function handleSignIn() {

        if (email && password) {

            let newEmail = "";

            for(let i = 0; i < email.length; i++){

                if(email[i] != " "){

                    newEmail+=email[i]

                }

            }

            signIn(newEmail.toLowerCase(), password)

        }

    }

    return (
        <Background>

            <Container
                behavior={Platform.OS == "ios" ? 'padding' : ''}
                enabled
            >

                <Title>MATH QUIZ</Title>

                <Logo

                    source={require("../../../assets/favicon.png")}

                />

                <AreaInput>

                    <Input

                        placeholder='Seu email'
                        value={email}
                        onChangeText={(txt) => setEmail(txt)}

                    />

                </AreaInput>

                <AreaInputPassword>

                    <InputPassword

                        placeholder={showPassword? "Sua Senha": "*********"}
                        value={password}
                        onChangeText={(txt) => setPassword(txt)}
                        secureTextEntry={!showPassword}

                    />

                    <ButtonPassword onPress={() => setShowPassword(!showPassword)}>

                        {showPassword? <Feather name="eye-off" color={'#fff'} size={25} style={{alignSelf: "center"}} />: <Feather name="eye" color={'#fff'} size={25} style={{alignSelf: "center"}}/>}

                    </ButtonPassword>

                </AreaInputPassword>

                <SubmitButton activeOpacity={0.8} onPress={() => handleSignIn()}>

                    {

                        loadingAuth ? (

                            <ActivityIndicator size={20} color="#FFF" />

                        ) : (

                            <SubmitText> Acessar </SubmitText>

                        )
                    }

                </SubmitButton>

                <Link onPress={() => navigation.navigate('SignUp')}>

                    <LinkText> Crie sua conta! </LinkText>

                </Link>

            </Container>

        </Background>
    );
}