import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import capsuleReducer from '../reducers/capsuleReducer'

const sagaMiddleware = createSagaMiddleware()
// use configureStore from @reduxjs/toolkit 
const store = configureStore({
    reducer: { show: capsuleReducer },
    middleware: [sagaMiddleware]
});
// add a watchSage
// sagaMiddleware.run(cardsSaga)

export default store;