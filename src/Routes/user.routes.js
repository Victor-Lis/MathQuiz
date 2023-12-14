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
                options={{

                    headerShown: false,

                }}
            />

            <UserStack.Screen
                name='EditUser'
                component={EditUser}
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

        </UserStack.Navigator>

    )

}