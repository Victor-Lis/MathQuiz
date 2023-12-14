import styled from "styled-components/native";

export const EditScrollView = styled.ScrollView`

  flex: 1;

`

export const EditUserContainer = styled.View`
  background-color: #222222;
  padding: 20px;
`;

export const ButtonIcon = styled.TouchableOpacity`
    
  padding: ${props => props.selected? "0px": "30px"};
  border-radius: 1000px;
  margin: 20px auto;
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

export const EditUserTitle = styled.Text`
  color: #fff;
  font-size: 25px;
  font-weight: bold;
`;

export const EditUserText = styled.Text`
  color: #fff;
  font-size: 20px;
  margin-top: 20px;
`;

export const AreaInputPassword = styled.View`
    
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    
`

export const InputPassword = styled.TextInput`

    background-color: #FFF;
    width: 85%;
    font-size: 17px;
    padding: 10px;
    border-radius: 8px;
    color: ${props => props.color? props.color: "#121212"};
    margin-right: 1%;

`

export const ButtonPassword = styled.TouchableOpacity`

    width: 13.5%;
    height: 50px;
    border-radius: 8px;
    background-color: #5E17EB;
    align-items: center;
    justify-content: center;

`

export const EditUserInput = styled.TextInput`
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  color: ${props => props.color? props.color: "#121212"};
`;

export const EditUserButton = styled.TouchableOpacity`
  background-color: #5E17EB;
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px;
`;

export const EditUserButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  text-align: center;
`;