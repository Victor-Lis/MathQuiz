import React, {useContext, useEffect} from 'react'
import { View, ActivityIndicator, Text } from 'react-native'

import { AuthContext } from '../Contexts/auth'

import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

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