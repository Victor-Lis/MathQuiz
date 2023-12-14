import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { TimerContainer, TimerText } from './styles'

import Feather from 'react-native-vector-icons/Feather';

export default function Timer({ min, sec }) {

  return (
    <TimerContainer>

        <Feather name="clock" color={'#fff'} size={25} style={{alignSelf: "center"}} />
        <TimerText> {Number(min) < 10? "0"+min: min}:{Number(sec) < 10? "0"+sec: sec} </TimerText>

    </TimerContainer>
  );
}