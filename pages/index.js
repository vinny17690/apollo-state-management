import styles from '../styles/Home.module.css'
import { gql, useQuery, useReactiveVar } from '@apollo/client'
import { reactiveVar } from '../lib/cache'
import Header from '../components/Header'

const LOCAL_ITEM = gql`
	query getLocalOnlyItem {
		localOnlyField @client
		reactiveVarField @client
	}
`

export default function Home() {
	const { data } = useQuery(LOCAL_ITEM, {
		notifyOnNetworkStatusChange: true
	})
	const values = useReactiveVar(reactiveVar)

	const updateState = (state) => {
		reactiveVar({ ...state, signedIn: !state.signedIn })
	}

	return (
		<div className={styles.container}>
			<Header></Header>
			{ JSON.stringify(values, null, 2) }
			<button onClick={() => updateState(values)}>SIGN IN</button>
		</div>
	)
}
