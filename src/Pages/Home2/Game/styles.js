import styled from 'styled-components/native'

export const PlayBoxScroll = styled.ScrollView`

    /* align-items: center; */
    /* justify-content: space-around; */
    /* background: blue; */

`

export const PlayBox = styled.View`

    align-items: center;
    justify-content: space-between;

`

export const ProgressBar = styled.View`

    background-color: #101010;
    min-height: 20px;
    min-width: 500px;
    max-width: 80%;
    align-items: flex-start;
    text-align: center;
    border-radius: 10px;
    margin: 20% 0;

`

export const Progress = styled.View`

    background-color: rgb(15, 215, 0);
    min-width: ${props => props.width ? (props.width * 22.5) + "px" : "0"};
    width: ${props => props.width ? (props.width * 10) + "%" : "0"};
    min-height: 20px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;

`

export const ResponseBox = styled.View`

    width: 100%;
    /* background: red; */
    justify-content: center;
    align-items: center;

`

export const Quest = styled.Text`

    font-size: 50px;
    color: #fff;
    margin: 30% 0 0 0;

`

export const QuestOperation = styled.Text`

    color: #5E17EB;
    font-size: 20px;

`

export const Answer = styled.TextInput`

    border-color: #5E17EB;
    border-bottom-width: 3px;
    font-size: 35px;
    text-align: center;
    color: ${props => props.color ? props.color : "#fff"};
    min-width: 50%;
    margin: 0% 0;

`

export const ButtonNext = styled.TouchableOpacity`

    background: #5E17EB;
    padding: 5px 10px;
    margin: 50% 0 0 0;

`

export const ButtonNextText = styled.Text`

    font-size: 20px;
    color: #fff;

`

export const ResumeBox = styled.View`

    max-height: 100%;
    justify-content: center;
    align-items: center;

`

export const ResumeBoxText = styled.Text`

    text-align: center;
    margin: 15% 0 2.5% 0;
    /* border-color: #5E17EB; */
    /* border-width: 3px; */
    /* background: #5E17EB77; */
    /* color: #5E17EB; */
    color: #fff;
    font-size: 35px;

`

export const ResumeBoxDescription = styled.Text`

    color: #fff;
    font-size: 17.5px;
    text-align: center;
    margin: 5% 0;

`

export const BestPlay = styled.Text`

    color: #fff;
    font-size: 20px;
    /* text-align: center; */
    margin: 20% 0 10% 0;
    border-color: #5E17EB;
    border-bottom-width: 3px;
    /* width: 100%; */

`

export const ResumeBoxStrong = styled.Text`

    color: ${props => props.color? props.color: ""};

`

export const RestartBox = styled.TouchableOpacity`

    margin: 15% 0;
    background: #5E17EB77;
    padding: 5% 2.5%;

`

export const RestartText = styled.Text`

    color: #fff;
    font-size: 20px;

`