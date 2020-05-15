import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import thunk from 'redux-thunk'
import authReducers from '../redux/reducers/auth'

const rootReducers = combineReducers({ authReducers })

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducers = persistReducer(persistConfig, rootReducers)

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const store = createStore(
  persistedReducers,
  {},
  composeEnhancers(applyMiddleware(thunk))
)

const persistor = persistStore(store)

export { store, persistor }
