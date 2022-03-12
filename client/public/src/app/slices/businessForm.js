

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    businessName: '',
    address: '',
    gstNumber: '',
    businessType: ''
}

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        updateAddress: (state, { payload }) => {
            state.address = payload
        },
        updateBusinessName: (state, { payload }) => {
            state.businessName = payload
        },
        updateGstNumber: (state, { payload }) => {
            state.gstNumber = payload
        },
        updateBusinessType: (state, { payload }) => {
            state.businessType = payload
        },
    }
})

export const
    { updateAddress, updateBusinessName, updateGstNumber, updateBusinessType
    } = formSlice.actions
export default formSlice.reducer
