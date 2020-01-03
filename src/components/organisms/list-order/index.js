import React from 'react';
import { Linke, List, Item } from './style';
import Thumbnail from '../../molecules/thumbnail';

export default function Index (props) {
  const setProduct = (item) => window.localStorage.setItem(props.isDrinks ? 'drink' : 'food', JSON.stringify(item));
  
  return (
    <>
      <List>
        {
          props.items.map((data, key) => {
            return (
              <Item key={key}>
                <Linke
                  onClick={() => setProduct(data)}
                  to={props.isDrinks ? '/checkout' : '/product/' + data.id}
                >
                  <Thumbnail
                    name={data.name}
                    price={data.price}
                    image={data.image}
                    id={data.id}
                  />
                </Linke>
              </Item>
            );
          })
        }
      </List>    
    </>
  );
}
