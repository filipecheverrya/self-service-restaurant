import React from 'react';
import Success from '../organisms/success';

export default function Index ({ data }) {
  return <Success props={data.history} />;
}