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
                options={{

                    headerShown: false,

                }}
            />

            <RankingStack.Screen
                name='RankingList'
                component={RankingList}
                options={{

                    headerStyle:{

                        backgroundColor: '#3b3dbf',
                        borderBottomWidth: 1,
                        // borderBottomColor: '#00b94a',
                        
                    },
                    headerTitleStyle:{
                        
                        fontWeight: "bold",
                        fontSize: 18.5,

                    },
                    headerTintColor: '#FFF',
                    headerTitle: "VOLTAR",
                    // headerBackTitleVisible: true,

                }}
            />          

        </RankingStack.Navigator>

    )

}