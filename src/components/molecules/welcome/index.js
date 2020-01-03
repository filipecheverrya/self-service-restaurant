import React, { useState } from 'react';
import Title from '../../atoms/title';
import Text from '../../atoms/text';
import Button from '../../atoms/button';

export default function Welcome ({ data }) {
  const [counter, setCounter] = useState(0);
  const [counterPres, setCounterPres] = useState(0);

  const increment = (val) => setCounter(!val ? counter + 1 : val);
  const incrementPresentation = () => setCounterPres(counterPres + 1);
  const decrementPresentation = () => setCounterPres(counterPres - 1);

  const Welcome = () => {
    return (
      <div>
        <Title>Bem vindo(a) ao Restaurant</Title>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
        <Button onClick={() => data.history.push('/product')}>Fazer pedido</Button>
        <Button onClick={() => increment()}>Como funciona?</Button>
      </div>
    );
  }
  
  const Presentation = () => {
    if (counterPres === 3) {
      increment(2);
      setCounterPres(0);
    }
    
    const Content = () => {
      if (counterPres === 0) {
        return (
          <div>
            <Title>Como fazer o pedido?</Title>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
          </div>
        );
      }
      if (counterPres === 1) {
        return (
          <div>
            <Title>Como ele é processado?</Title>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
          </div>
        );
      }
      return (
        <div>
          <Title>Vamos começar?</Title>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
        </div>
      );
    }
    
    return (
      <div>
        <Content />
        {
          counterPres > 1 
          ? <Button onClick={() => data.history.push('/product')}>Fazer pedido</Button>
          : <Button onClick={() => incrementPresentation()}>Próximo</Button>
        }
        {
          !counterPres
            ? ''
            : <Button onClick={() => decrementPresentation()}>Anterior</Button>
        }
      </div>
    );
  }

  const viewController = () => {
    switch(counter) {
      case 0:
        return <Welcome />;
      case 1:
        return <Presentation />;
      case 2:
        return ''
      default:
        return <Welcome />;
    }
  }

  return viewController();
}