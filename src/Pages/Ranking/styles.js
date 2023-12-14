import styled from 'styled-components/native'

export const Background = styled.View`

    flex: 1;
    background-color: #202020;

`

export const Container = styled.ScrollView`

    flex: 1;
    height: 100vh;
    /* justify-content: center; */
    /* align-items: center; */

`

export const TitleBox = styled.View`

  width: 100%;
  justify-content: center;
  align-items: center;

`

export const Title = styled.Text`

  margin: 10% 0 0 0;
  font-size: 30px;
  color: #fff;
  border-bottom-width: 3px;
  border-color: #5E17EB;

`

export const TitleDescription = styled.Text`

  width: 80%;
  text-align: center;
  margin: 5% 0;
  font-size: 17px;
  color: #fff;

`

export const RankRow = styled.View`

  margin: 20px 0;
  width: 100%;
  /* min-height: 300px; */
  /* background: #fff; */
  justify-content: center;
  align-items: center;

`

export const RankBox = styled.TouchableOpacity`

  background-color: #5E17EB22;
  width: 80%;
  /* background: blue; */
  border: 2px solid #5E17EB;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

`

export const RankBoxText = styled.Text`

  margin: 20% 0;
  font-size: 17px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;

`