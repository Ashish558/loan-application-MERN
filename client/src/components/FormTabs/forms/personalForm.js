import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { updateAge, updateEmail, updateFirstName, updateLastName, updatePhoneNumber } from '../../../app/slices/personalForm'
import InputField from './inputField'
import FormPagination from '../formPagination'

export default function PersonalForm({ value, setValue }) {

    const { firstName, lastName, email, phoneNumber, age } = useSelector(state => state.personalForm)

    return (
        <Box>
            <Box mb='20px' >
                <Typography variant='h5' fontWeight='600' mb='20px' >
                    Personal Details
                </Typography>
                <Stack sx={{ flexDirection: 'column' }} >
                    <InputField type='text' label='First name' value={firstName} setValue={updateFirstName} />
                    <InputField type='text' label='Last name' value={lastName} setValue={updateLastName} />
                </Stack>

                <InputField type='email' label='Email' value={email} setValue={updateEmail} />
                <InputField type='number' label='Age' value={age} setValue={updateAge} />
                <InputField type='number' label='Mobile Number' value={phoneNumber} setValue={updatePhoneNumber} />
            </Box>
            <FormPagination setValue={setValue} value={value} />

        </Box>
    )
} 
