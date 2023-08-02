import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = {
	styles: {
		global: {
			'html, body': {
				bg: '#B3CAFF',
			}
		}
	}
}

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
			<HashRouter basename={"/"}>
				<App />
			</HashRouter>
		</ChakraProvider>
  </React.StrictMode>
);