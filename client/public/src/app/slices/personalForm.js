

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    age: '',
}

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        updateFirstName: (state, { payload }) => {
            state.firstName = payload
        },
        updateLastName: (state, { payload }) => {
            state.lastName = payload
        },
        updateEmail: (state, { payload }) => {
            state.email = payload
        },
        updatePhoneNumber: (state, { payload }) => {
            state.phoneNumber = payload
        },
        updateAge: (state, { payload }) => {
            state.age = payload
        },
        clearForm: (state, { payload }) => {
            state.hobbies = []
            state.phoneNumber = ''
            state.email = ''
            state.name = ''
        },
        updateFormFields: (state, { payload }) => {
            state.hobbies = payload.hobbies
            state.phoneNumber = payload.phoneNumber
            state.email = payload.email
            state.name = payload.name
        },
    }
})

export const
    { updateFirstName, updateLastName, updateEmail, updateAge, updatePhoneNumber,
        clearForm,
        updateFormFields
    } = formSlice.actions
export default formSlice.reducer
