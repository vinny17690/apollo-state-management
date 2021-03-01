import { useReactiveVar } from '@apollo/client'
import { reactiveVar } from '../lib/cache'
import Link from 'next/link'

export default function Header() {
	const values = useReactiveVar(reactiveVar)

	return (
		<>
			<div>
				{values.signedIn ? 'Siged In' : 'Please sign in'}
			</div>
			<Link href='/'><a>Home</a></Link>
			<Link href='/about'><a>About</a></Link>
		</>
	)
}