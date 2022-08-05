import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import TeamProvider from './context/TeamProvider';



ReactDOM.render(
  <React.StrictMode>
    <TeamProvider>
      <ChakraProvider>

        <App />
      </ChakraProvider>
    </TeamProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

