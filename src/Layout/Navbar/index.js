import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../Contexts/auth';
import { NavbarContainer, NavbarTitle, NavbarEdit } from './styles'
import Feather from 'react-native-vector-icons/Feather';

export default function Navbar({title, navigateTo}) {

    const { user } = useContext(AuthContext)
    const navigation = useNavigation()

 return (
    <NavbarContainer>

    <NavbarTitle> {title? title: ""} </NavbarTitle>

        {!!navigateTo &&
        
            <NavbarEdit onPress={() => navigation.navigate(navigateTo)}>

                <Feather name="chevrons-right" color={'#fff'} size={50} />

            </NavbarEdit>

        }

    </NavbarContainer>
  );
}