import React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import store from 'utils/redux/store';
import client from 'utils/apollo-client';
import theme from 'utils/theme';

import '../utils/styles/globals.css';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
	return (
		<Provider store={store}>
			<ApolloProvider client={client}>
				<ChakraProvider resetCSS theme={theme}>
					<Component {...pageProps} />
				</ChakraProvider>
			</ApolloProvider>
		</Provider>
	);
};

export default App;
