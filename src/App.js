import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './redux/store'
import Login from './Login'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Login />
      </PersistGate>
    </Provider>
  )
}

export default App
