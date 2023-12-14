import { View, Text } from 'react-native';
import { Container, UserDatas, Icon, Index, GameDatas, UserName, Rights, GameDatasRow } from './styles';
import Feather from 'react-native-vector-icons/Feather';

export default function RankingRow({ user, index, level, key }) {

  function formatTime(min, sec) {

    return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`

  }

  return (
    <Container key={key}>

      <UserDatas>

        <Index style={index == 1? [{color: "#efc900"}]: index == 2? [{color: "#c6c6c6"}]: index == 3? [{color: "#c45500"}]: [{}]}> {index}° -</Index>
        {!!user && !!user.url ? <Icon source={{ uri: user.url }} /> : <Feather name="user" color={"#fff"} size={27.5} />}
        <UserName> {user.nome} </UserName>

      </UserDatas>

      <GameDatas>

        <GameDatasRow>

          <Feather name="check" color={"rgb(0, 175, 15)"} size={20} />
          {level == 1 && <Rights>{user.melhorPartida1.certos}</Rights>}
          {level == 2 && <Rights>{user.melhorPartida2.certos}</Rights>}
          {level == 3 && <Rights>{user.melhorPartida3.certos}</Rights>}
          {level == 4 && <Rights>{user.melhorPartida4.certos}</Rights>}

        </GameDatasRow>
        <GameDatasRow>

          <Feather name="clock" color={"rgb(55, 55, 255)"} size={20} />
          {level == 1 && <Rights style={{ color: "rgb(55, 55, 255)" }}>{formatTime(Math.floor(user.melhorPartida1.tempo / 60), `${user.melhorPartida1.tempo % 60}`.slice(0, 2))}</Rights>}
          {level == 2 && <Rights style={{ color: "rgb(55, 55, 255)" }}>{formatTime(Math.floor(user.melhorPartida2.tempo / 60), `${user.melhorPartida2.tempo % 60}`.slice(0, 2))}</Rights>}
          {level == 3 && <Rights style={{ color: "rgb(55, 55, 255)" }}>{formatTime(Math.floor(user.melhorPartida3.tempo / 60), `${user.melhorPartida3.tempo % 60}`.slice(0, 2))}</Rights>}
          {level == 4 && <Rights style={{ color: "rgb(55, 55, 255)" }}>{formatTime(Math.floor(user.melhorPartida4.tempo / 60), `${user.melhorPartida4.tempo % 60}`.slice(0, 2))}</Rights>}

        </GameDatasRow>

      </GameDatas>

    </Container>
  );
}