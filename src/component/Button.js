import React from 'react';

import { helpPlease } from '../util/help';

function Button() {
  const getHelp = helpPlease();
  return (
    <>
      <label>{getHelp}</label><br />  
      <button>I Click {process.env.MY_ENV}</button>
    </>
  );
}

export default Button