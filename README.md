
# Math Quiz (Stop Matemático)

Esse foi um projeto que tive muita dedicação e carinho no processo de criação. 

A ideia começou de um professor meu, baseado como o próprio nome sugere, em uma espécie de parente do jogo "Stop", mas ao invés de coisas no geral, focado em matemática, no caso com operações e números sorteados.

Achei a ideia muito boa, mas acreditei que a proposta do professor era muito simples, então adicionei algumas coisas que acreditei que cabiam no projeto, como: 
- Login e definição de usuários;
- Foto de perfil dos usuários, para gerar identificação maior com o App e mais fácil;
- Alteração dos dados do usuário;
- Níveis de dificuldade (baseado na escolaridade);
- Timer dinâmico durante a partida, para gerar mais adrenalina;
- Resultado instantâneo logo após a resposta.
- Gravação no Firebase da melhor partida (separada por dificuldade);
- Para gerar mais motivação nos usuários adicionei sistema de ranking, com base nos acertos e no tempo.
## Desafios

Já havia usado muitos dos elementos desse projeto, como:
- useContext()
- FirebaseAuth
- Firebase RealtimeDB
- StackNavigation

Enfim, mas o grande detalhe é: Eu nunca havia usado todos esses e muito mais juntos, em um projeto grande, essa foi a primeira vez, então foi bem desafiador.
## Aprendizados

Por final aprendi algumas coisas interessantes como: 
- Renderização condicional das rotas, com base no login(ou não) do usuário;
- Criação de um useContext();
- Mais de um sistema de navegações no mesmo App.
### Renderização dinâmica das rotas, com base no login
```js
export default function Routes(){

    const { signed, loading } = useContext(AuthContext)
    
    if(loading){

        return(

            <View

                style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#202020"}}

            >

                <ActivityIndicator size={'large'} color={"#F0F4FF"}/>

            </View>

        )

    }

    return(

        signed? <AppRoutes/> : <AuthRoutes/>

    )

}
```

### useContext passando os valores de auth
Abaixo vou colocar uma versão resumida de como funciona o useContext...
```js
import React, { useContext } from 'react'

export const AuthContext = createContext({})

export default function AuthProvider({ children }) {

    return (

        <AuthContext.Provider value={{}}>

            {children}

        </AuthContext.Provider>

    )


}
```

## Navegações

#### 1- No signed
```js
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignIn from '../Pages/SignIn'
import SignUp from '../Pages/SignUp'

const AuthStack = createNativeStackNavigator()

export default function AuthRoutes(){

    return(

        <AuthStack.Navigator>

            <AuthStack.Screen
                name='SignIn'
                component={SignIn}
            />

            <AuthStack.Screen
                name='SignUp'
                component={SignUp}
            />          

        </AuthStack.Navigator>

    )

}
```

#### 2- App Navigation (signed)
```js
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../Pages/Home2'
import RankingRoutes from './ranking.routes';
import UserRoutes from './user.routes';

const AppTabs = createBottomTabNavigator()

export default function AuthRoutes() {

    return (

        <AppTabs.Navigator>

            <AppTabs.Screen
                name='Home'
                component={Home}
            />

            <AppTabs.Screen
                name='RankTab'
                component={RankingRoutes}
            />

            <AppTabs.Screen
                name='UserTab'
                component={UserRoutes}
            />

        </AppTabs.Navigator>

    )

}
```

#### 3- Ranking Navigation
```js
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Ranking from '../Pages/Ranking'
import RankingList from '../Pages/Ranking/RankingList'

const RankingStack = createNativeStackNavigator()

export default function RankingRoutes(){

    return(

        <RankingStack.Navigator>

            <RankingStack.Screen
                name='RankingHome'
                component={Ranking}
            />

            <RankingStack.Screen
                name='RankingList'
                component={RankingList}
            />          

        </RankingStack.Navigator>

    )

}
```

#### 4- User Navigation
```js
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import User from '../Pages/User'
import EditUser from '../Pages/EditUser'

const UserStack = createNativeStackNavigator()

export default function UserRoutes(){

    return(

        <UserStack.Navigator>

            <UserStack.Screen
                name='User'
                component={User}
            />

            <UserStack.Screen
                name='EditUser'
                component={EditUser}
            />          

        </UserStack.Navigator>

    )

}
```
# Resultado

<div align="center">
    <h3> Sign In </h3>
    <img width="15%" src="https://github.com/Victor-Lis/MathQuiz/blob/master/images/Sign%20In.jpg">
    <h2></h2>
</div>

[Ver vídeo do App funcionando!](https://youtube.com/shorts/dpOW0SbrpTA)
## Autores

- [@Victor-Lis](https://github.com/Victor-Lis)
