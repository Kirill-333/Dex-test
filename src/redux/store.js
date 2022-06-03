import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authReducer'
import playerReducer from './playerReducer'
import playersReducer from './playersReducer'


const store = configureStore({
    reducer: {
        auth:authReducer,    
        player:playerReducer,
        players:playersReducer
    }
})

export default store