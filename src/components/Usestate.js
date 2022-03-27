import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Usestate() {
    const [data, setData] = useState([])

    useEffect(() => {
        console.log('hi')
    }, [])

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(res => setData(prevData => res.data.results))
        .then(setData(prevData => (prevData[0] = 'hi')))
        .then(console.log(data))
    }, [])

    console.log(data)
  
    return (
        <div>
        
        </div>
  )
}
