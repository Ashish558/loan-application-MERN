import { Box, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import InputField from './inputField'
import FormPagination from '../formPagination'
import { updateAddress, updateBusinessName, updateBusinessType, updateGstNumber } from '../../../app/slices/businessForm'

export default function BusinessForm({ value, setValue }) {

    const { businessName, address, gstNumber, businessType } = useSelector(state => state.businessForm)

    return (
        <Box>
            <Box mb='20px'>
                <Typography variant='h5' fontWeight='600' mb='20px' >
                    Business Details
                </Typography>
                <InputField type='text' label='Business Name' value={businessName} setValue={updateBusinessName} />
                <InputField type='text' label='Address' value={address} setValue={updateAddress} />
                <InputField type='number' label='Gst Number' value={gstNumber} setValue={updateGstNumber} />
                <InputField type='text' label='Type of business' value={businessType} setValue={updateBusinessType} />

            </Box>
            <FormPagination setValue={setValue} value={value} />

        </Box>
    )
} 
