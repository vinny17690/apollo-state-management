import styles from '../styles/Home.module.css'
import { gql, useQuery, useReactiveVar } from '@apollo/client'
import { reactiveVar } from '../lib/cache'

const LOCAL_ITEM = gql`
	query getLocalOnlyItem {
		localOnlyField @client
		# reactiveVarField @client
	}
`

export default function Home() {
	const { data } = useQuery(LOCAL_ITEM)
	const values = useReactiveVar(reactiveVar)

	const updateState = (state) => {
		reactiveVar({ ...state, signedIn: !state.signedIn })
	}
	console.log(data)
	console.log(values)
	return (
		<div className={styles.container}>
			{ JSON.stringify(values, null, 2) }
			<button onClick={() => updateState(values)}>SIGN IN</button>
		</div>
	)
}
