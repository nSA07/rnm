import { configureStore, getDefaultMiddleware  } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import characterSlice from '../features/character/characterSlice'
import historySlice from '../features/history/historySlice'

const persistConfig = {
    key: 'history',
    storage,
};

const persistedReducer = persistReducer(persistConfig, historySlice);

export const store = configureStore({
    reducer: {
        character: characterSlice,
        history: persistedReducer
    },
    middleware: [...getDefaultMiddleware({ serializableCheck: false })],
})
export const persistor = persistStore(store);