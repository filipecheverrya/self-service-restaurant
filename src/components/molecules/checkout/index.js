import React, { useState, useEffect } from 'react';
import { Row, Column, Break } from './style';
import Button from '../../atoms/button';

export default function Index (props) {
  const [drink, setDrink] = useState(0);
  const [food, setFood] = useState(0);
  
  const order = () => {
    // TODO: post dos dados pedidos.
    const { push } = props.props.data.history;
    return push('/success');
  }

  const cancel = () => {
    const { push } = props.props.data.history;
    return push('/');
  }

  useEffect(() => {
    if (!window.localStorage.length) return;
    const { drink: drinke, food: foodi } = window.localStorage, x = JSON.parse(drinke), y = JSON.parse(foodi);
    setDrink(x);
    setFood(y);
  }, [])

  return (
    <>
      {drink
        ? (
          <>
            <Row>
              <Column>{food.name}</Column>
              <Column>{food.price}</Column>
            </Row>
            <Row>
              <Column>{drink.name}</Column>
              <Column>{drink.price}</Column>
            </Row>
            <Break />
            <Row>
              <Column>Total</Column>
              <Column>
                {`R$ ${
                  Number(drink.price.replace(/[ R$]/g, '').replace(/[,]/g, '.'))
                  + Number(food.price.replace(/[ R$]/g, '').replace(/[,]/g, '.'))
                  }`
                }
              </Column>
            </Row>
            <Button onClick={() => order()}>Fazer o pedido</Button>
            <Button onClick={() => cancel()}>Cancelar</Button>
          </>
        )
        : <h1>Carregando...</h1>
      }
    </>
  );
}
