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

export const Guide = styled.View`

    border: 2px solid #5E17EB;
    padding: 10px 5px;
    margin: 50px 0 0 0;
    border-radius: 5px;
    background: #5E17EB44;

`

export const GuideStrong = styled.Text`

    /* width: ${props => props.width ? props.width : "0"}; */
    padding: ${props => props.padding ? props.padding : "0"};
    margin: ${props => props.margin ? props.margin : "0"};
    font-size: ${props => props.size ? props.size + "px" : "15px"};
    color: ${props => props.color ? props.color : "#fff"};
    font-weight: bold;
    text-transform: ${props => props.transform ? props.transform : "uppercase"};

`

export const GuideTitle = styled.Text`

    font-size: 20px;
    color: #fff;

    margin: 5px 10px;

`

export const GuideDescription = styled.Text`

    font-size: 15px;
    color: #fff;

    margin: 5px 10px;

`

export const PlayBox = styled.View`

    flex: 1;
    padding: 50px 0;
    align-items: center;
    justify-content: center;

`

export const ButtonPlay = styled.TouchableOpacity`

    width: 150px;
    height: 75px;
    border-radius: 5px;
    /* border: 2px solid #5E17EB; */
    background-color: rgb(0,200,0);
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;

`

export const ButtonPlayWithFriends = styled.TouchableOpacity`

    border-radius: 5px;
    
    /* background-color: rgb(0,200,0); */
    justify-content: center;
    align-items: center;

`

export const ButtonPlayText = styled.Text`

    font-size: 22.5px;
    font-weight: bold;
    text-transform: uppercase;
    color: #fff;

`

export const ButtonPlayWithFriendsText = styled.Text`

    font-size: 17.5px;
    font-weight: bold;
    text-transform: uppercase;
    color: #fff;

`