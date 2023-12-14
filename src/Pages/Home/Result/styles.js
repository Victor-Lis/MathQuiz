import styled from 'styled-components/native';

export const QuestResultContainer = styled.View`
  background-color: #121212;
  padding: 20px;
  margin: 15px 0;
  border-radius: 15px;
`;

export const QuestResultTitle = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export const QuestResultText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const QuestResultCorrect = styled.Text`
  color: green;
  font-weight: bold;
`;

export const QuestResultIncorrect = styled.Text`
  color: red;
  font-weight: bold;
`;