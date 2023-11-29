import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import CategoriesPreview from '../../routes/CategoriesPreview'
import Category from '../../routes/Category'
import { getCollectionAndDocuments } from "../Utils/Firebase/FirebaseUtils"
import { setCategories } from '../../Store/Actions/UserAction';

function Shop() {
	const dispatch = useDispatch()

	/**lifecycle hook */
	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoriesArray = await getCollectionAndDocuments();
			dispatch(setCategories(categoriesArray));
		};
		getCategoriesMap();
	}, [dispatch]);

	return (
		<Routes>
			<Route index element={<CategoriesPreview />}></Route>
			<Route path=':category' element={<Category />}></Route>
		</Routes>
	);
}

export default Shop;
