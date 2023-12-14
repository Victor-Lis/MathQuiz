import styled from 'styled-components/native'

export const Background = styled.View`

    flex: 1;
    background-color: #202020;

`

export const Container = styled.View`

    flex: 1;
    justify-content: space-between;
    align-items: center;

`

export const Button = styled.TouchableOpacity`

    background-color: #3b3dbf;
    padding: 15px 25px;
    margin: auto 0;

`

export const ButtonText = styled.Text`

    color: #fff;
    font-size: 20px;
    font-weight: bold;

`

export const SelectedNumber = styled.Text`

    color: ${props => !props.selected?  "#fff": "#3b3dbf"};
    font-size: 50px;
    font-weight: bold;
    padding: 20px 40px;
    background-color: ${props => !props.selected? "transparent": "#fff"};
    border: 2px solid ${props => !props.selected? "#fff": "transparent"};
    border-radius: 20px;
    margin: auto 0;

`

export const FlatListBox = styled.FlatList`

    flex: 1;

`

export const ButtonRestart = styled.TouchableOpacity`

    background-color: #3b3dbf;
    padding: 15px 25px;
    margin: 10px 0;

`