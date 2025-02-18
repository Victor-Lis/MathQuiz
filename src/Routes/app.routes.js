import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../Pages/Home2'
import GameRoutes from './game.routes'
import RankingRoutes from './ranking.routes';
import UserRoutes from './user.routes';

const AppTabs = createBottomTabNavigator()

export default function AuthRoutes() {

    return (

        <AppTabs.Navigator>

            <AppTabs.Screen
                name='Home'
                component={GameRoutes}
                options={{

                    tabBarIcon: ({ color, size }) => {
                        return <Feather name="home" color={color} size={size + 2.5} style={{ marginVertical: 2.5 }} />
                    },
                    headerShown: false,
                    tabBarStyle: {

                        backgroundColor: "#282828",
                        borderColor: "#101010",

                    },
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "#5E17EB"

                }}
            />

            <AppTabs.Screen
                name='RankTab'
                component={RankingRoutes}
                options={{

                    tabBarIcon: ({ color, size }) => {
                        return <Feather name="award" color={color} size={size + 2.5} style={{ marginVertical: 2.5 }} />
                    },
                    headerShown: false,
                    tabBarStyle: {

                        backgroundColor: "#282828",
                        borderColor: "#101010",

                    },
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "#5E17EB",


                }}
            />

            <AppTabs.Screen
                name='UserTab'
                component={UserRoutes}
                options={{

                    tabBarIcon: ({ color, size }) => {
                        return <Feather name="user" color={color} size={size + 2.5} style={{ marginVertical: 2.5 }} />
                    },
                    headerShown: false,
                    tabBarStyle: {

                        backgroundColor: "#282828",
                        borderColor: "#101010",

                    },
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "#5E17EB",


                }}
            />

        </AppTabs.Navigator>

    )

}