import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import styles from './ProvincePicker.module.css'
import { fetchCountries } from '../../api'

const ProvincePicker = ({  provinces, handleProvinceChange }) => {
    const [ fetchedCountries, setFetchedCountries ] = useState([])

    // useEffect(() => {
    //     const fetchAPI = async () => {
    //         setFetchedCountries(await fetchCountries())
    //     }
    //     fetchAPI()
    // },[setFetchedCountries])



    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue='' onChange={(e) => handleProvinceChange(e.target.value)}>
                <option value=''>Whole Country</option>
                {provinces.map((province,i) => <option key={i} value={province}>{province}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default ProvincePicker
