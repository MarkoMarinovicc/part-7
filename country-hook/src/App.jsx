import React, { useState, useEffect } from 'react'
import useCountry from './lib/useCountry' 
import { useField } from './hooks/useField' 

const useCountrys = (name) => {
  const [country, setCountry] = useState(null)

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await useCountry.getAllByName(name) 
        console.log(res)
        if (res.length > 0) {
          setCountry(res)
        } else {
          setCountry(null)
        }
      } catch (error) {
        setCountry({ found: false })
        console.error("Error fetching country:", error)
      }
    }

    if (name) {
      fetchCountry() 
    }
  }, [name])

  return country
}

const Country = ({ country }) => {

  if (!country) {
    return (
      <div>
        not found...
      </div>
    )
  }

  return (
    <div>
      <h3>{country.name.common}</h3>
      <div>capital {country.data.capital}</div>
      <div>population {country.data.population}</div>
      <img src={country.data.flag} height='100' alt={`flag of ${country.data.name}`} />
    </div>
  )
}

const App = () => {
  const nameInput = useField('text')
  const [name, setName] = useState('')
  const country = useCountrys(name)
console.log(country)
  const fetch = (e) => {
    e.preventDefault()
    setName(nameInput.value)
  }

  return (
    <div>
      <form onSubmit={fetch}>
        <input {...nameInput} />
        <button type="submit">find</button>
      </form>

      <Country country={country} />
    </div>
  )
}

export default App
