import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Fonts } from './Fonts';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = {
	styles: {
		global: {
			'html, body': {
				bg: '#B3CAFF',
				fontFamily: 'Poppins',
			}
		}
	}
}

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
		<Fonts />
			<HashRouter basename={"/"}>
				<App />
			</HashRouter>
		</ChakraProvider>
  </React.StrictMode>
);