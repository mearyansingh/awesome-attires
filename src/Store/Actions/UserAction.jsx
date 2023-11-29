import { USER_ACTION_TYPE } from './Types'

//Set the currentUser
export const setCurrentUser = (user) => ({ type: USER_ACTION_TYPE.SET_CURRENT_USER, payload: user })

//Set the categories
export const setCategories = (categoriesArray) => ({ type: USER_ACTION_TYPE.SET_CATEGORIES, payload: categoriesArray })

//Set cart dropdown state
export const setIsCartOpen = (boolean) => ({ type: USER_ACTION_TYPE.SET_IS_CART_OPEN, payload: boolean })

// export const cartCount = (cartItems) => cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
// export const cartTotal = (cartItems) => cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);

/**Helper function to add the single item to the cart (increase the item) */
const addCartItem = (cartItems, productToAdd) => {
	//find if cartItems contains productToAdd
	const existingCartItem = cartItems.find((cartItem) => cartItem?.id === productToAdd?.id);
	//If found, increase quantity
	if (existingCartItem) {
		return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
	}
	//return new array with modification cartItems/new cart item
	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

/**Helper function to remove the single cart item (decrease the item) */
const removeCartItem = (cartItems, cartItemToRemove) => {
	//find the cart item to remove
	const existingCartItem = cartItems.find((cartItem) => cartItem?.id === cartItemToRemove?.id);
	//check if quantity is equal to 1, if it is remove that item from the cart
	if (existingCartItem.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
	}
	//return back cartItems with matching cart item with reduced quantity
	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};

/**Helper function to remove the particular cart item entirely */
const clearCartItem = (cartItems, cartItemToClear) => cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

/**function to handle add to cart functionality*/
export const addItemToCart = (cartItems, productToAdd) => {
	const newCartItems = addCartItem(cartItems, productToAdd);
	return ({ type: USER_ACTION_TYPE.SET_CART_ITEMS, payload: newCartItems })
};

/**function to remove the single item from the cart */
export const removeItemToCart = (cartItems, cartItemToRemove) => {
	const newCartItems = removeCartItem(cartItems, cartItemToRemove);
	return ({ type: USER_ACTION_TYPE.SET_CART_ITEMS, payload: newCartItems })
};

/**Function to remove the item from the cart */
export const clearItemFromCart = (cartItems, cartItemToClear) => {
	const newCartItems = clearCartItem(cartItems, cartItemToClear);
	return ({ type: USER_ACTION_TYPE.SET_CART_ITEMS, payload: newCartItems })
};
