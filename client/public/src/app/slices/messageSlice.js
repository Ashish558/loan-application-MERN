

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    errorMsg: '',
    successMsg: ''
}

const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        updateErrorMsg: (state, { payload }) => {
            state.errorMsg = payload
        },
        updateSuccessMsg: (state, { payload }) => {
            state.successMsg = payload
        },

    }
})

export const { updateErrorMsg, updateSuccessMsg } = messageSlice.actions
export default messageSlice.reducer
