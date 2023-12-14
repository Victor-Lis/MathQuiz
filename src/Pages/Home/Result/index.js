import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { QuestResultContainer, QuestResultTitle, QuestResultText, QuestResultCorrect, QuestResultIncorrect} from './styles'

const QuestResult = ({ quests, index, resposta }) => {

  return (
    <QuestResultContainer>
      <QuestResultTitle>{quests[index].problem}</QuestResultTitle>
      <QuestResultText>Resposta Certa: {quests[index].answer}</QuestResultText>
      <QuestResultText>Sua Resposta: {resposta}</QuestResultText>
      <QuestResultText>Correto: {resposta == quests[index].answer ? <QuestResultCorrect>Sim</QuestResultCorrect> : <QuestResultIncorrect>Não</QuestResultIncorrect>}</QuestResultText>
    </QuestResultContainer>
  );
};

export default QuestResult;