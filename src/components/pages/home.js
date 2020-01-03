import React from 'react';
import Welcome from '../molecules/welcome';
// import OrderList from '../organisms/list-order';

export default function Index ({ data }) {
  return (
    <>
      {data ? <Welcome data={data} /> : ''}
    </>
  );
}