import React from 'react';
import { Button } from './style.js';

export default function Index ({ children, onClick }) {
  return <Button onClick={() => onClick()}>{children}</Button>;
}