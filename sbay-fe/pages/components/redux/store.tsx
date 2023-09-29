import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

// @ts-ignore
import reducer from './reducers'
// @ts-ignore
import mySaga from './sagas'

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// Mount it on the Store
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)

// Then run the saga
sagaMiddleware.run(mySaga)

// Render the application