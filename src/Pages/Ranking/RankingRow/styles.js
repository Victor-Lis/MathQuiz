import styled from 'styled-components/native'

export const Container = styled.View`

    flex: 1;
    width: 80%;
    padding: 2% .5%;
    border-radius: 10px;
    /* justify-content: center; */
    /* align-items: center; */
    background: rgba(5,5,5,0.5);
    border: 1px solid rgba(55,55,55,0.5);
    margin: 5px auto;

`

export const UserDatas = styled.View`

    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* background: red; */

`

export const Icon = styled.Image`

    width: 35px;
    height: 35px;
    border-radius: 1000px;
    border: .5px solid #5E17EB;

`

export const Index = styled.Text`

    font-size: 22.5px;
    color: #fff;
    flex: 1;

`

export const UserName = styled.Text`

    font-size: 22.5px;
    color: #fff;

`

export const GameDatas = styled.View`

    flex: 1;
    flex-direction: row;
    margin-top: 5%;
    align-items: center;
    justify-content: space-between;
    /* background: blue; */

`

export const GameDatasRow = styled.View`

    flex: 1;
    justify-content: center;
    align-items: center;

`

export const Rights = styled.Text`

    font-size: 20px;
    color: rgb(0, 175, 15)

`