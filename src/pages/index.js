import React from 'react';
import Button from '../component/Button';

function Index() {
  return (
    <div>
      <h1>Welcome to Next.js! {process.env.NODE_ENV}</h1>
      <p>Button</p>
      <Button />
    </div>);
}

export default Index