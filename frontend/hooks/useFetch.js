import { FormPage } from "../components/Form"
import {useEffect, useState} from 'react'

export const  useFetch = (url) => {
    const []

    useEffect(()=>{
        const f = async () => {
            const data = fetch(url)
            console.log(data)
        }
    }, [url])
}