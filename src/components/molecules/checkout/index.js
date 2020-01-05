import React, { useState, useEffect } from 'react';
import { Row, Column, Break } from './style';
import Button from '../../atoms/button';
import { SetOrder } from '../../../api';

export default function Index (props) {
  const [drink, setDrink] = useState(0);
  const [food, setFood] = useState(0);
  
  const order = async () => {
    const { push } = props.props.data.history;
    const data = {
      tableNumber: 0,
      isDelivered: false,
      order: { food, drink }
    }
    
    try {
      const res = await SetOrder(data);
      return push('/success');
    } catch (err) {
      throw new Error(err);
    }
  }

  const cancel = () => {
    const { push } = props.props.data.history;
    return push('/self-service-restaurant');
  }

  useEffect(() => {
    if (!window.localStorage.length) return;
    const { drink: drinke, food: foodi } = window.localStorage, x = JSON.parse(drinke), y = JSON.parse(foodi);
    setDrink(x);
    setFood(y);
  }, [])

  const normilizeMoney = (cash) => {
    const result = String(cash).replace(/[.]/g, ',');
    const rgx = result.match(/,(.*)/g);
    if (!rgx) return `R$ ${result},00`;
    if (rgx[0].length <= 2) return `R$ ${result}0`;

    return `R$ ${result}`
  }

  return (
    <>
      {drink
        ? (
          <>
            <Row>
              <Column>{food.name}</Column>
              <Column>{normilizeMoney(food.price)}</Column>
            </Row>
            <Row>
              <Column>{drink.name}</Column>
              <Column>{normilizeMoney(drink.price)}</Column>
            </Row>
            <Break />
            <Row>
              <Column>Total</Column>
              <Column>
                {normilizeMoney(food.price + drink.price)}
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
