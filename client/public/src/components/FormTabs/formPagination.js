import React from 'react'
import { Button, IconButton, Stack } from '@mui/material'
import KeyboardBackspace from '@mui/icons-material/KeyboardBackspace'
import { useDispatch, useSelector } from 'react-redux'
import { submitDetails } from '../../services/users'
import { updateErrorMsg, updateSuccessMsg } from '../../app/slices/messageSlice'

export default function FormPagination({ value, setValue, setErrMsg }) {

    const applicationDetails = useSelector(state => state.loanForm)
    const businessDetails = useSelector(state => state.businessForm)
    const personalDetails = useSelector(state => state.personalForm)
    const dispatch = useDispatch()

    const increment = () => {
        if (value === 2) return
        setValue(value + 1)
    }

    const decrement = () => {
        if (value === 0) return
        setValue(value - 1)
    }

    const handleSubmit = () => {
        const data = { ...personalDetails, ...businessDetails, ...applicationDetails }
        submitDetails(data, (err, res) => {
            // console.log(res)
            if (res.status === 202) {
                dispatch(updateErrorMsg(res.data))
                console.log('error')
                return
            }
            if (err) return console.log(err)
            console.log('success')
            dispatch(updateErrorMsg(''))
            dispatch(updateSuccessMsg('Application sent'))
            window.location.reload(); 
        })
    }

    return (
        <Stack direction='row' justifyContent='space-between' alignItems='center' >
            <IconButton disabled={value === 0 ? true : false} sx={{ color: 'color.blue', }} size='large' onClick={() => decrement()} >
                <KeyboardBackspace sx={{ fontSize: '30px' }} />
            </IconButton>

            {value === 2 ?
                <Button variant='contained' sx={styles.btn} onClick={() => handleSubmit()}>
                    Apply
                </Button>
                :
                <Button variant='contained' sx={styles.btn} onClick={() => increment()}>
                    Next
                </Button>
            }

        </Stack>
    )
}

const styles = {
    btn: {
        boxshadow: '0',
        backgroundColor: 'color.blue',
        textTransform: 'capitalize',
        '&:hover': {
            boxshadow: '0',
            backgroundColor: 'color.blue'
        },
        '&:active': {
            backgroundColor: 'color.blue'
        }
    }
}