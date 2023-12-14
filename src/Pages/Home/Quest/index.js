import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { QuestContainer, QuestText, AnswerInput, SubmitButton, SubmitText } from './styles'

export default function Quest({ quest, answer, next, saveAnswer, setRunTimer }) {

  const input = useRef()
  const [resposta, setResposta] = useState()

  function handleResponse() {
    
    if (Number(resposta)) {
      saveAnswer(resposta)
      setResposta('')
      next(answer, resposta)
    }

  }

  return (
    <QuestContainer>
      <QuestText>{quest}</QuestText>
      <AnswerInput
        onChangeText={(text) => setResposta(text)}
        keyboardType='numeric'
        value={resposta}
      />
      <SubmitButton onPress={() => handleResponse()}>
        <SubmitText>Responder</SubmitText>
      </SubmitButton>
    </QuestContainer>
  );
}