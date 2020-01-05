import React, { useEffect, useState } from 'react';
import List from '../organisms/list-order';
import Title from '../atoms/title';
import { FoodList, DrinkList } from '../../api';

export default function Index ({ data, isDrinks }) {
  const [food, setFood] = useState([]);
  const [drink, setDrink] = useState([]);

  useEffect(() => {
    fetchData().then(res => {
      setFood(res.food);
      setDrink(res.drink);
    })
  }, []);
  
  const fetchData = async () => {
    try {
      const food = await FoodList();
      const drink = await DrinkList();
      
      return {
        food: food.data,
        drink: drink.data
      };
    } catch (err) {
      throw new Error(err);
    }
  }
  
  return (
    <>
      <Title>{`Lista de ${isDrinks ? 'Bebidas' : 'Pratos'}`}</Title>
      <List
        data={isDrinks ? drink : food}
        isDrinks={isDrinks}
      />
    </>
  );
}