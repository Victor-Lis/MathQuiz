import styled from 'styled-components/native'

export const Background = styled.View`

    flex: 1;
    background-color: #121212;

`

export const Container = styled.KeyboardAvoidingView`

    flex: 1;
    justify-content: center;
    align-items: center;

`

export const Title = styled.Text`

    color: #fff;
    font-weight: 900;
    font-size: 28.5px;
    text-align: center;
    margin: 0px 0px 0px 0px;

`

export const Logo = styled.Image`

    margin-bottom: 30px;
    max-width: 150px;
    max-height: 150px;
    /* background-color: #fff; */
    border-radius: 1000px;

`

export const AreaInput = styled.View`

    margin-top: -20px;
    flex-direction: row;

`


export const Input = styled.TextInput`

    margin-top: 20px;
    background-color: #FFF;
    width: 90%;
    font-size: 17px;
    padding: 10px;
    border-radius: 8px;
    color: #121212;
    margin-bottom: 10px;
    
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
    margin-top: 10px;
    align-items: center;
    justify-content: center;

`

export const SubmitText = styled.Text`

    font-size: 16px;
    color: #FFF;

`

export const Link = styled.TouchableOpacity`

    margin: 10px 0;

`

export const LinkText = styled.Text`

    color: #fefefe

`