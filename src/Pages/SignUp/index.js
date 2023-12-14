import React, { useState, useContext } from 'react';
import { View, Text, Platform, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText, Option, OptionText, SectionTitle, AreaInputPassword, ButtonPassword, InputPassword, ButtonIcon, ButtonImage } from './styles'

import Feather from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../Contexts/auth';

import * as ImagePicker from 'expo-image-picker';

export default function SigUp() {

    const { signUp, loadingAuth, setImage, url } = useContext(AuthContext)
    const navigation = useNavigation()

    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const [password, setPassword] = useState('')
    const [escolaridade, setEscolaridade] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    function handleSignUp() {

        if (email && nome && password && escolaridade) {

            let newEmail = "";

            for(let i = 0; i < email.length; i++){

                if(email[i] != " "){

                    newEmail+=email[i]

                }

            }

            signUp(newEmail.toLowerCase(), nome, password, escolaridade)

        }

    }

    const selectImage = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        
        if (permissionResult.granted === false) {
          alert('Você proibiu o acesso de mídia, não é possível seguir');
          return;
        }
        
        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: false,
          quality: 1,
          aspect: [3,3]
        });
        
        if (!result.canceled) {
        //   console.log(result.assets[0].uri)
          setImage(result.assets[0].uri)
        }
      };

    return (
        <Background>

            <Container
                behavior={Platform.OS == "ios" ? 'padding' : ''}
                enabled
            >

                {/* <Logo

                    source={require("../../../assets/icon.png")}

                /> */}

                <SectionTitle margin={"30px 0 10px 0"}> SUA FOTO </SectionTitle>  
                <ButtonIcon selected={!!url} onPress={() => selectImage()}>

                    {url? <ButtonImage source={{uri: url}}/>: <Feather name="user-plus" color={"#cfcfcf"} size={70} />}

                </ButtonIcon>

                <SectionTitle margin={"30px 0 10px 0"}> SEUS DADOS </SectionTitle>

                <AreaInput>

                    <Input

                        placeholder='Seu nome'
                        value={nome}
                        onChangeText={(txt) => setNome(txt)}

                    />

                </AreaInput>
                
                <AreaInput>

                    <Input

                        placeholder='Seu email'
                        value={email}
                        onChangeText={(txt) => setEmail(txt)}

                    />

                </AreaInput>


                <AreaInputPassword>

                    <InputPassword

                        placeholder={showPassword ? "Sua Senha" : "*********"}
                        value={password}
                        onChangeText={(txt) => setPassword(txt)}
                        secureTextEntry={!showPassword}

                    />

                    <ButtonPassword onPress={() => setShowPassword(!showPassword)}>

                        {showPassword ? <Feather name="eye-off" color={'#fff'} size={25} style={{ alignSelf: "center" }} /> : <Feather name="eye" color={'#fff'} size={25} style={{ alignSelf: "center" }} />}

                    </ButtonPassword>

                </AreaInputPassword>

                <SectionTitle margin={"25px 0 10px 0"}> SUA ESCOLARIDADE </SectionTitle>

                <Option selected={escolaridade == "Fundamental I"} onPress={() => setEscolaridade("Fundamental I")}>

                    <OptionText selected={escolaridade == "Fundamental I"}> Fundamental I </OptionText>

                </Option>

                <Option selected={escolaridade == "Fundamental II"} onPress={() => setEscolaridade("Fundamental II")}>

                    <OptionText selected={escolaridade == "Fundamental II"}> Fundamental II </OptionText>

                </Option>

                <Option selected={escolaridade == "Ensino Médio / Técnico"} onPress={() => setEscolaridade("Ensino Médio / Técnico")}>

                    <OptionText selected={escolaridade == "Ensino Médio / Técnico"}> Ensino Médio / Técnico </OptionText>

                </Option>

                <Option selected={escolaridade == "Ensino Superior"} onPress={() => setEscolaridade("Ensino Superior")}>

                    <OptionText selected={escolaridade == "Ensino Superior"}> Ensino Superior </OptionText>

                </Option>

                <SubmitButton margin={"30px 0 10px 0"} activeOpacity={0.8} onPress={() => handleSignUp()}>

                    {

                        loadingAuth ? (

                            <ActivityIndicator size={20} color="#FFF" />

                        ) : (

                            <SubmitText> Criar </SubmitText>

                        )
                    }

                </SubmitButton>

                <Link onPress={() => navigation.goBack()}>

                    <LinkText> Faça Login! </LinkText>

                </Link>

            </Container>

        </Background>
    );
}