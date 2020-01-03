import React from 'react';

export default function Index ({ data }) {
  return (
    <>
      { !data.match.params.id ? 'loading...' : 'loaded' }
    </>
  );
}