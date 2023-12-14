import React, { useState, useContext, useEffect } from 'react';
import { Background, Container, Title } from './styles';

import { AuthContext } from '../../../Contexts/auth';
import RankingRow from '../RankingRow';
import { ActivityIndicator } from 'react-native';

export default function RankingList({ route }) {

  const { nivel } = route.params
  const { allUsers, getAllUsers } = useContext(AuthContext)
  const [ranking, setRanking] = useState([])

  function rankCreate() {
    // await getAllUsers()
    // Formato do Objeto "melhorPartida1": {"certos": 10, "errados": 0, "tempo": 27}
    let arrayUsers = Object.values(allUsers);
    let newRanking = [];
    newRanking = arrayUsers

    if (nivel == 1) {

      newRanking.sort((a, b) => {
        if (a.melhorPartida1.certos === b.melhorPartida1.certos) {
          return b.melhorPartida1.tempo - a.melhorPartida1.tempo
        } else {
          return a.melhorPartida1.certos - b.melhorPartida1.certos
        }
      })

    } else if (nivel == 2) {

      newRanking.sort((a, b) => {
        if (a.melhorPartida2.certos === b.melhorPartida2.certos) {
          return b.melhorPartida2.tempo - a.melhorPartida2.tempo
        } else {
          return a.melhorPartida2.certos - b.melhorPartida2.certos
        }
      })

    } else if (nivel == 3) {

      newRanking.sort((a, b) => {
        if (a.melhorPartida3.certos === b.melhorPartida3.certos) {
          return b.melhorPartida3.tempo - a.melhorPartida3.tempo
        } else {
          return a.melhorPartida3.certos - b.melhorPartida3.certos
        }
      })

    } else if (nivel == 4) {

      newRanking.sort((a, b) => {
        if (a.melhorPartida4.certos === b.melhorPartida4.certos) {
          return b.melhorPartida4.tempo - a.melhorPartida4.tempo
        } else {
          return a.melhorPartida4.certos - b.melhorPartida4.certos
        }
      })

    }

    newRanking = newRanking.slice(newRanking.length - 10, newRanking.length)
    setRanking(newRanking.reverse());
  }

  useEffect(() => {

    getAllUsers()
    rankCreate()

  }, [])

  return (
    <Background>

      {!!ranking.length &&
        <Container>

          <Title> {nivel && nivel == 1 ? "Fundamental I" : nivel == 2 ? "Fundamental II" : nivel == 3 ? "Ensino Médio / Técnico" : "Ensino Superior"} </Title>
          {ranking && ranking.map((position, index) => {

            return <RankingRow key={position.id+index} user={position} index={index + 1} level={nivel && nivel} />

          })}

        </Container>
      }
      {!ranking.length && <ActivityIndicator style={{marginTop: "50%"}} size="50%" color="#5E17EB" />}

    </Background>
  );
}