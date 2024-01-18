import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../Pages/Home2'
import Rooms from '../Pages/Rooms'

const UserStack = createNativeStackNavigator()

export default function GameRoutes(){

    return(

        <UserStack.Navigator>

            <UserStack.Screen
                name='Início'
                component={Home}
                options={{

                    headerShown: false,

                }}
            />

            <UserStack.Screen
                name='Salas'
                component={Rooms}
                options={{

                    headerShown: false,

                }}
            />          

        </UserStack.Navigator>

    )

}