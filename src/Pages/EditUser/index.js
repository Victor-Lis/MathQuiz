import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TextInput, Touchable, TouchableOpacity } from 'react-native';
import { Option, OptionText, SectionTitle } from '../SignUp/styles'
import { EditScrollView, EditUserContainer, EditUserTitle, EditUserText, EditUserButton, EditUserInput, EditUserButtonText, AreaInputPassword, ButtonPassword, InputPassword, ButtonIcon, ButtonImage } from './styles';
import { AuthContext } from '../../Contexts/auth';

import Feather from 'react-native-vector-icons/Feather';

import * as ImagePicker from 'expo-image-picker';

export default function EditUser() {

    const { user, updateDatas, setImage, url } = useContext(AuthContext)
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [escolaridade, setEscolaridade] = useState('')
    const [senha, setSenha] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    useEffect(() => {

        setNome(user.nome)
        setEmail(user.email)
        setEscolaridade(user.escolaridade)
        setSenha(user.senha)

    }, [])

    function handleEdit() {

        if (email && senha && escolaridade && nome) {

            updateDatas(user.email, user.senha, email, senha, escolaridade, nome)

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
            aspect: [3, 3]
        });

        if (!result.canceled) {
            //   console.log(result.assets[0].uri)
            setImage(result.assets[0].uri)
        }
    };

    return (
        <EditScrollView>
            <EditUserContainer>
                <EditUserTitle> Editar Perfil </EditUserTitle>
                <ButtonIcon selected={!!url} onPress={() => selectImage()}>

                    {url ? <ButtonImage source={{ uri: url }} /> : <Feather name="user-plus" color={"#cfcfcf"} size={70} />}

                </ButtonIcon>
                <EditUserText> Nome </EditUserText>
                <EditUserInput
                    placeholder='Seu nome'
                    onChangeText={setNome}
                    value={nome}
                />
                <EditUserText> Email </EditUserText>
                <EditUserInput
                    placeholder='Email'
                    onChangeText={setEmail}
                    value={email}
                    editable={false}
                    color="#bfbfbf"
                />
                <EditUserText> Senha </EditUserText>
                <AreaInputPassword>

                    <InputPassword

                        placeholder={showPassword ? "Sua Senha" : "*********"}
                        value={senha}
                        onChangeText={(txt) => setSenha(txt)}
                        secureTextEntry={!showPassword}
                        editable={false}
                        color="#bfbfbf"

                    />

                    <ButtonPassword onPress={() => setShowPassword(!showPassword)}>

                        {showPassword ? <Feather name="eye-off" color={'#fff'} size={25} style={{ alignSelf: "center" }} /> : <Feather name="eye" color={'#fff'} size={25} style={{ alignSelf: "center" }} />}

                    </ButtonPassword>

                </AreaInputPassword>
                <EditUserText> Escolaridade </EditUserText>

                <Option selected={escolaridade == "Fundamental I"} style={{ borderColor: "#3b3dbf", width: "100%" }} onPress={() => setEscolaridade("Fundamental I")}>

                    <OptionText selected={escolaridade == "Fundamental I"}> Fundamental I </OptionText>

                </Option>

                <Option selected={escolaridade == "Fundamental II"} style={{ borderColor: "#3b3dbf", width: "100%" }} onPress={() => setEscolaridade("Fundamental II")}>

                    <OptionText selected={escolaridade == "Fundamental II"}> Fundamental II </OptionText>

                </Option>

                <Option selected={escolaridade == "Ensino Médio / Técnico"} style={{ borderColor: "#3b3dbf", width: "100%" }} onPress={() => setEscolaridade("Ensino Médio / Técnico")}>

                    <OptionText selected={escolaridade == "Ensino Médio / Técnico"}> Ensino Médio / Técnico </OptionText>

                </Option>

                <Option selected={escolaridade == "Ensino Superior"} style={{ borderColor: "#3b3dbf", width: "100%" }} onPress={() => setEscolaridade("Ensino Superior")}>

                    <OptionText selected={escolaridade == "Ensino Superior"}> Ensino Superior </OptionText>

                </Option>
                <EditUserButton onPress={() => handleEdit()}>
                    <EditUserButtonText> Salvar Alterações </EditUserButtonText>
                </EditUserButton>
            </EditUserContainer>
        </EditScrollView>
    );
}
