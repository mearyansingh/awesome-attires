import { USER_ACTION_TYPE } from '../Actions/Types'

//initialState declared
const initialState = {
	currentUser: null,
	categories: [],
	isCartOpen: false,
	cartItems: [],
}

//Reducer declared
export const userReducer = (state = initialState, action) => {
	const { type, payload } = action

	switch (type) {
		case USER_ACTION_TYPE.SET_CURRENT_USER:
			return { ...state, currentUser: payload }
		case USER_ACTION_TYPE.SET_CATEGORIES:
			return { ...state, categories: payload }
		case USER_ACTION_TYPE.SET_IS_CART_OPEN:
			return { ...state, isCartOpen: payload }
		case USER_ACTION_TYPE.SET_CART_ITEMS:
			return { ...state, cartItems: payload }
		default:
			return state
	}
}

