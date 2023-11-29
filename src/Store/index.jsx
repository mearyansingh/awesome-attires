import { applyMiddleware, compose, legacy_createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { rootReducer } from './Reducers'

const persistConfig = {
	key: 'root',
	storage,
	// blacklist: ['user'] user reducer will not persist
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
// const middleWares = [process.env.NODE_ENV === 'development'].filter(Boolean)
// const composedEnhancers = compose(applyMiddleware(...middleWares))

// Example of using compose
// const composedEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose);

export const store = legacy_createStore(persistedReducer)
export const persistor = persistStore(store)