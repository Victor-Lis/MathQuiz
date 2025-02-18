import { useEffect, useState } from 'react';
import {
    PlayBoxScroll,
} from './styles';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Room() {

    const navigation = useNavigation()

    return (
        <PlayBoxScroll>
            <Text onPress={() => {navigation.goBack()}} style={{color: "#fff"}}>A</Text>
        </PlayBoxScroll>
    );
}