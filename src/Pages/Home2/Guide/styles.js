import styled from 'styled-components/native'

export const GuideBox = styled.View`

    border: 2px solid #5E17EB;
    padding: 10px 5px;
    margin: 50px 0 0 0;
    border-radius: 5px;
    background: #5E17EB44;

`

export const GuideStrong = styled.Text`

    /* width: ${props => props.width? props.width : "0"}; */
    padding: ${props => props.padding? props.padding : "0"};
    margin: ${props => props.margin? props.margin : "0"};
    font-size: ${props => props.size? props.size+"px" : "15px"};
    color: ${props => props.color? props.color : "#fff"};
    font-weight: bold;
    text-transform: ${props => props.transform? props.transform : "uppercase"};

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
