import styled from 'styled-components/native'

export const Background = styled.ScrollView`

    flex: 1;
    background-color: #121212;

`

export const Container = styled.KeyboardAvoidingView`

    flex: 1;
    margin: 0% 0;
    justify-content: center;
    align-items: center;

`

export const Logo = styled.Image`

    margin-bottom: 30px;
    max-width: 175px;
    max-height: 175px;
    background-color: #fff;
    border-radius: 10px;

`

export const AreaInput = styled.View`

    flex-direction: row;

`

export const Input = styled.TextInput`

    background-color: #FFF;
    width: 90%;
    font-size: 17px;
    padding: 10px;
    border-radius: 8px;
    color: #121212;
    margin-bottom: 15px;

`

export const SectionTitle = styled.Text`

    color: ${props => props.color? props.color: "#fff"};
    font-size: 21.5px;
    text-align: left;
    width: 95%;
    margin: 0 auto;
    font-weight: bold;
    margin: ${props => props.margin? props.margin: "40px 0 15px 0"};

`

export const ButtonIcon = styled.TouchableOpacity`
    
    padding: ${props => props.selected? "0px": "30px"};
    border-radius: 1000px;
    margin-bottom: 15px;
    border: 3px solid ${props => props.selected? "transparent": "#5E17EB"};
    align-items: center;
    max-width: 200px;
    max-height: 200px;
    align-items: center;
    justify-content: center;

`

export const ButtonImage = styled.Image`
    width: 150px;
    height: 150px; 
    border-radius: 1000px;
    border: 3px solid #5E17EB;
`

export const Option = styled.TouchableOpacity`

    background-color: ${props => props.selected? "#fff": "transparent"};
    width: 90%;
    font-size: 17px;
    padding: 12px;
    border-radius: 8px;
    color: #121212;
    margin-bottom: 15px;
    border: 2px solid ${props => props.selected? "": "#5E17EB"};

`

export const OptionText = styled.Text`

    color: ${props => props.selected? "#5E17EB": "#fff"};

`

export const AreaInputPassword = styled.View`
    
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    
`

export const InputPassword = styled.TextInput`

    background-color: #FFF;
    width: 76.5%;
    font-size: 17px;
    padding: 10px;
    border-radius: 8px;
    color: #121212;
    margin-right: 1%;

`

export const ButtonPassword = styled.TouchableOpacity`

    width: 12.5%;
    height: 50px;
    border-radius: 8px;
    background-color: #5E17EB;
    align-items: center;
    justify-content: center;

`

export const SubmitButton = styled.TouchableOpacity`

    width: 90%;
    height: 45px;
    border-radius: 8px;
    background-color: #5E17EB;
    align-items: center;
    justify-content: center;
    margin: ${props => props.margin? props.margin: "40px 0 0 0"};

`

export const SubmitText = styled.Text`

    font-size: 16px;
    color: #FFF;

`

export const Link = styled.TouchableOpacity`

    margin: 0 0 30px 0;

`

export const LinkText = styled.Text`

    color: #fefefe

`