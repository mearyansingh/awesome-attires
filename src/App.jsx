/**This is the router component which contains all the routing of the app */
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import Header from "./routes/Header";
import Home from "./routes/Home";
import Shop from "./routes/Shop";
import WishList from "./routes/WishList";
import Authentication from "./routes/Authentication";
import Checkout from "./routes/Checkout";
import Footer from "./routes/Footer";
import {
	onAuthStateChangedListner,
	createUserDocumentFromAuth,
} from "./routes/Utils/Firebase/FirebaseUtils";
import { setCurrentUser } from './Store/Actions/UserAction';

function App() {

	const dispatch = useDispatch()

	/**Lifecycle method */
	useEffect(() => {
		const unsubscribe = onAuthStateChangedListner((user) => {
			if (user) {
				createUserDocumentFromAuth(user);
			}
			dispatch(setCurrentUser(user));
		});
		return unsubscribe;
	}, [dispatch]);

	return (
		<div className="d-flex flex-column min-vh-100">
			<main className="flex-grow-1">
				<Routes>
					<Route path="/" element={<Header />}>
						<Route index element={<Home />} />
						<Route path="shop/*" element={<Shop />} />
						<Route path="wishlist" element={<WishList />} />
						<Route path="auth" element={<Authentication />} />
						<Route path="checkout" element={<Checkout />} />
					</Route>
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
