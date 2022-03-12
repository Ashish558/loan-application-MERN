import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import personalFormSlice from './slices/personalForm'
import businessFormSlice from './slices/businessForm'
import loanFormSlice from './slices/loanForm'
import messageSlice from './slices/messageSlice'

export const store = configureStore({
    reducer: {
        personalForm: personalFormSlice,
        businessForm: businessFormSlice,
        loanForm: loanFormSlice,
        message: messageSlice,
    },
    //    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware),
    devTools: true
})

setupListeners(store.dispatch)