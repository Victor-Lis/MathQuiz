import React, { useContext, useEffect } from 'react';
import { Container, ContentContainer, ButtonIcon, ButtonImage, UserName, ContentText, SignOutBox, SignOutText } from './styles'

import Feather from 'react-native-vector-icons/Feather'

import Navbar from '../../Layout/Navbar'

import { AuthContext } from '../../Contexts/auth';

export default function User() {

    const { user, handleSignOut } = useContext(AuthContext)

    return (
        <Container>
            <Navbar title="Perfil" navigateTo="EditUser" />
            <ContentContainer>

                <ButtonIcon>

                    {!!user && !!user.url ? <ButtonImage source={{ uri: user.url }} /> : <Feather name="user" color={"#fff"} size={70} />}

                </ButtonIcon>
                
                <UserName> {!!user && user.nome.toUpperCase()} </UserName>

                <ContentText> {!!user && user.email} </ContentText>
                <ContentText> {!!user && user.escolaridade} </ContentText>
                <SignOutBox onPress={() => handleSignOut()}>

                    <SignOutText> Desconectar </SignOutText>

                </SignOutBox>

            </ContentContainer>
        </Container>
    );
}