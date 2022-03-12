import axios from 'axios'
import { domain } from './constants'


export const submitDetails = (data, cb) => {
    axios.post(`${domain}/loan`, data)
        .then(res => cb(null, res))
        .catch(err => cb(err, null))
}


