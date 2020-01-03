import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { IconWrapper } from '../../../style-base.js';
import Button from '../../atoms/button';

export default function Index ({ props }) {
  const [time, setTime] = useState([]);

  useEffect(() => {
    const { food } = window.localStorage;
    const time = JSON.parse(food);
    setTime(time);
  }, [])
  
  const calcTime = () => {
    return `${time.estimatedTime} horas`;
  }

  return (
    <>
      <h1>Pedido realizado com sucesso!</h1>
      <p>{`Seu prato chegará em `}<strong>{time.length ? time : calcTime()}</strong></p>
      <Button onClick={() => props.push('/')}>
        <IconWrapper>
          <FontAwesomeIcon icon={faArrowLeft} />
        </IconWrapper>
        Voltar
      </Button>
    </>
  );
}