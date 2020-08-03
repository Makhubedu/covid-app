import React, {useState, useEffect} from 'react'
import { fetchCountry} from '../../api'
import {FormControl, NativeSelect} from '@material-ui/core'

import styles from './CountrySelector.module.css'



function CountrySelector( {handleCountryChange}) {

    const [ countries, setCountries] = useState([])

    useEffect( () => {
        const fetchAPICountry = async () => {
            setCountries(await fetchCountry())
        } 
        fetchAPICountry()
    }, [])
    return (
        <div className={styles.selectForm}>
            <FormControl className={styles.selectSize}>
                <NativeSelect defaultChecked="" onChange={(e) =>  handleCountryChange(e.target.value)} >
                    <option value="">Global</option>
                    {countries.map( (country,i) => (
                        <option key={i} value={country}>{country}</option>
                    ))}                   
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountrySelector
