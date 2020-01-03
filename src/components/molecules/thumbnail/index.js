import React from 'react';
import { Image, Container } from './style';
import Title from '../../atoms/title';
import Text from '../../atoms/text';

export default function Index ({ name, image, price, id }) {
  return (
    <Container>
      <Image src={image} alt={name} />
      <Title>{name}</Title>
      <Text>{price}</Text>
    </Container>
  );
}
