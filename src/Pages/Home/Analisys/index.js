import React, { useState, useRef, useEffect } from 'react';
import { AnalisysContainer, AnalisysBox, AnalisysText } from './styles'

import Feather from 'react-native-vector-icons/Feather';

export default function Analisys({ certos, errados }) {

  return (
    <AnalisysContainer>

      <AnalisysBox>

        <Feather name="check" color={'green'} size={25} />
        <AnalisysText> {certos} </AnalisysText>

      </AnalisysBox>

      <AnalisysBox>

        <Feather name="x" color={'red'} size={25} />
        <AnalisysText> {errados} </AnalisysText>

      </AnalisysBox>

    </AnalisysContainer>
  );
}