import React from 'react';
import getConfig from 'next/config'
import Button from '../component/Button';

function Index() {
  const { publicRuntimeConfig } = getConfig();
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <p>In Next page template value: {process.env.MY_ENV}</p>
      <p>publicRuntimeConfig.MY_ENV: {publicRuntimeConfig.MY_ENV}</p>
      <Button />
    </div>);
}

export default Index