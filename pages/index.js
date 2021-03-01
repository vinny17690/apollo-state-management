import styles from '../styles/Home.module.css'
import { gql, useQuery } from '@apollo/client'

const LOCAL_ITEM = gql`
	query getLocalOnlyItem {
		localOnlyField @client
	}
`

export default function Home() {
	const { data } = useQuery(LOCAL_ITEM)
	console.log(data)
	return (
		<div className={styles.container}>
			{ JSON.stringify(data, null, 2) }
		</div>
	)
}
