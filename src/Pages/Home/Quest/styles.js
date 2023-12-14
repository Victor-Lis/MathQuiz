import styled from 'styled-components/native'

export const QuestContainer = styled.View`
  flex: 1;
  /* background-color: #222222; */
  align-items: center;
  justify-content: center;
`;

export const QuestText = styled.Text`
  color: #fff;
  font-size: 40px;
  font-weight: bold;
  padding: 20px 0;
`;

export const AnswerInput = styled.TextInput`
  border-bottom-color: #3b3dbf;
  border-bottom-width: 2.5px;
  color: #fff;
  padding: 10px 20px; 
  padding-bottom: 5px;
  width: 150px;
  font-size: 25px;
  text-align: center;
`;

export const SubmitButton = styled.TouchableOpacity`
  background-color: #3b3dbf;
  padding: 10px 20px;
  border-radius: 10px;
  margin: 40px 0;
`;

export const SubmitText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;