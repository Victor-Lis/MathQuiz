import React, { useState, useContext, useEffect } from 'react';
import { Background, Container, PlayBox, ButtonPlay, ButtonPlayWithFriends, ButtonPlayText, ButtonPlayWithFriendsText } from './styles';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../Contexts/auth'
import Navbar from '../../Layout/Navbar';
import Guide from './Guide';
import Game from './Game';

export default function Home() {

    const { user, updateRecord } = useContext(AuthContext)
    const [playing, setPlaying] = useState(false)
    const navigation = useNavigation()

    return (
        <Background>
            <Navbar title="Início" />
            <Container
            // behavior={Platform.OS == "ios" ? 'padding' : ''}
            // enabled
            >
                {!playing? (
                    <>

                        <Guide nivel={(user && user.escolaridade) && user.escolaridade} />
                        <PlayBox>

                            <ButtonPlay onPress={() => setPlaying(true)}>

                                <ButtonPlayText> Jogar </ButtonPlayText>

                            </ButtonPlay>

                            <ButtonPlayWithFriends>

                                <ButtonPlayWithFriendsText onPress={() => navigation.navigate("Salas")}> Jogar com amigos </ButtonPlayWithFriendsText>

                            </ButtonPlayWithFriends>

                        </PlayBox>

                    </>
                ): 
                    <Game user={user && user} nivel={(user && user.escolaridade) && user.escolaridade} updateRecord={updateRecord} setPlaying={setPlaying}/>
                }
            </Container>
        </Background>
    );
}