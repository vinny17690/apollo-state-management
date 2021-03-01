import { makeVar } from '@apollo/client'

const defaultState = {
	signedIn: false,
	cartItems: ['apples', 'oranges', 'mangos']
}

export const reactiveVar = makeVar(defaultState);