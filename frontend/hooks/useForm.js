import { useState } from 'react'

export const useForm = initialValues => {
    const [values, setValues] = useState(initialValues)
    return [values, e => { setValues(e.target ? {...values, [e.target.name]: e.target.value} : {...values, [Object.keys(e)[0]]: e[Object.keys(e)[0]]}) }]
}