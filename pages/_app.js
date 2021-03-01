import '../styles/globals.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { reactiveVar } from '../lib/cache'

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
					},
					reactiveVarField: () => {
						return reactiveVar()
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
