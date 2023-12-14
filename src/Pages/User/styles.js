import Feather from 'react-native-vector-icons/Feather';
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #222222;
  flex: 1;
`;

export const ContentContainer = styled.View`

  /* background-color: rgba(255,255,255,0.65); */
  width: 90%;
  height: 85%;
  /* border: 5px solid #3b3dbf; */
  border-radius: 10px;
  margin: auto;
  align-items: center;

`

export const ButtonIcon = styled.TouchableOpacity`
    
  padding: ${props => props.selected? "0px": "30px"};
  border-radius: 1000px;
  margin-top: 70px;
  margin-bottom: 0px;
  border: 3px solid ${props => props.selected? "transparent": "#5E17EB"};
  align-items: center;
  max-width: 140px;
  max-height: 140px;
  align-items: center;
  justify-content: center;

`

export const ButtonImage = styled.Image`
  width: 150px;
  height: 150px; 
  border-radius: 1000px;
  border: 3px solid #5E17EB;
`

export const UserName = styled.Text`

  /* color: #3b3dbf; */
  color: #fff;
  font-size: 22px;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 50px;

`

export const ContentText = styled.Text`

  border: 2px solid #5E17EB;
  font-size: 16px;
  /* color: #525252; */
  color: #fff;
  border-radius: 10px;
  padding: 5px 10px;
  text-align: center;
  margin: 8px 0;

`

export const SignOutBox = styled.TouchableOpacity`

  background-color: rgba(255, 0, 0, 0.9);
  border-radius: 10px;
  padding: 10px 25px;
  text-align: center;
  margin-top: 90px;

`

export const SignOutText = styled.Text`

  color: #fff;
  font-weight: bold;

`