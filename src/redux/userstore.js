import { configureStore,combineReducers } from '@reduxjs/toolkit'
import userReducer from './userSlice.js'
// import cardReducer from './cardSlice.js'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import cartSlice from '../store/cartSlice.js'
// import cartSlice from '../store/cartSlice.js'



const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartSlice.reducer,
});


const persistedReducer = persistReducer(persistConfig, rootReducer)

export const userstore = configureStore({
  
  reducer: persistedReducer,
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})


export const persistor = persistStore(userstore)


// Storage
// --currentUser
// ---currentUser,loading,errr
