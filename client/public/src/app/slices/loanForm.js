

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    amount: '',
    interest: '',
    tenure: '',
}

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        updateAmount: (state, { payload }) => {
            state.amount = payload
        },
        updateInterest: (state, { payload }) => {
            state.interest = payload
        },
        updateTenure: (state, { payload }) => {
            state.tenure = payload
        },
      
    }
})

export const
    { updateAmount, updateInterest, updateTenure
    } = formSlice.actions
export default formSlice.reducer
