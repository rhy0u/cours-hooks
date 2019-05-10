import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Fetch = () => {
  const [infos, setInfos] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('https://swapi.co/api/people/')
      setInfos(data.results)
    }
    fetchData()
  }, [])

  return <div>{infos.map(({ name }) => `${name} `)}</div>
}

export default Fetch
