import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Usestate() {
    const [data, setData] = useState([])

    useEffect(() => {
        console.log('hi')
    }, [])

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
        // .then(res => console.log(res))
        .then(res => setData(prevData => res.data.results))
        .then(setData(prevData => (prevData[0] = 'hi')))
    }, [])

    console.log(data)
  
    return (
        <div>
        
        </div>
  )
}
