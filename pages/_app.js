import '../styles/globals.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
	uri: 'https://api.spacex.land/graphql',
	cache: new InMemoryCache({
		typePolicies: {
			Query: {
				fields: {
					localOnlyField: {
						read() {
							return 'local only field value'
						}
					}
				}
			}
		}
	})
});

function MyApp({ Component, pageProps }) {
	return (
		<ApolloProvider client={client}>
			<Component {...pageProps} />
		</ApolloProvider>
	)
}

export default MyApp
