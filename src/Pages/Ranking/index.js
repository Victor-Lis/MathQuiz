import React, { useState, useContext, useEffect } from 'react';
import { Background, Container, TitleBox, Title, TitleDescription, RankRow, RankBox, RankBoxText } from './styles';

import { AuthContext } from '../../Contexts/auth'
import Navbar from '../../Layout/Navbar';

import { useNavigation } from '@react-navigation/native';

export default function Ranking() {

    const navigation = useNavigation()
    const { allUsers, getAllUsers } = useContext(AuthContext)

    useEffect(() => { getAllUsers() }, [])

    return (
        <Background>
            <Navbar title="Ranking" />
            <Container>
                <TitleBox>

                    <Title> Rankings </Title>
                    <TitleDescription> Selecione o ranking que gostaria de ver! </TitleDescription>

                </TitleBox>
                <RankRow>

                    <RankBox onPress={() => navigation.navigate("RankingList", {nivel: 1})}>

                        <RankBoxText> Fundamental I </RankBoxText>

                    </RankBox>

                </RankRow>
                <RankRow>

                    <RankBox onPress={() => navigation.navigate("RankingList", {nivel: 2})}>

                        <RankBoxText> Fundamental II </RankBoxText>

                    </RankBox>

                </RankRow>
                <RankRow>

                    <RankBox onPress={() => navigation.navigate("RankingList", {nivel: 3})}>

                        <RankBoxText> Ensino Médio / Técnico </RankBoxText>

                    </RankBox>

                </RankRow>
                <RankRow>

                    <RankBox onPress={() => navigation.navigate("RankingList", {nivel: 4})}>

                        <RankBoxText> Ensino Superior </RankBoxText>

                    </RankBox>

                </RankRow>
            </Container>
        </Background>
    );
}