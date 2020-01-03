import React from 'react';
import List from '../organisms/list-order';
import Title from '../atoms/title';
import foodList from '../../tmp/products';
import drinkList from '../../tmp/drinks';

export default function Index ({ data, withDrinks }) {
  return (
    <>
      <Title>{`Lista de ${withDrinks ? 'Bebidas' : 'Pratos'}`}</Title>
      <List
        data={data}
        items={withDrinks ? drinkList : foodList}
        isDrinks={withDrinks}
      />
    </>
  );
}