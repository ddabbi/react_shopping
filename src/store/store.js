import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cart-slice'

const store = configureStore({
    reducer:{
        cart: cartReducer,
    }
})

export default store;

// 리덕스를 사용하기 위해선
// index.js 에 App 컴포넌트를 Provider로 감싸야함