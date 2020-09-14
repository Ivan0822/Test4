import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Select from './components/Select';
import { getAllCountries, getCountryByRegion } from './services';

const App = () => {
  const [countries, setCountries] = useState([])
  const [select, setSelect] = useState('')
  const [detail, setDetail] = useState(false)

  const handleSelect = (e) => {
    setSelect(e.target.value)
  }
  useEffect(() => {
    getAllCountries().then(res => {
      setCountries(res.data)
    })
  }, [])

  useEffect(() => {
    if (select !== '') {
      getCountryByRegion(select).then(res => {
        setCountries(res.data)
        setDetail(true)
      })
    }
  }, [select])

  const detailed = (country) => {
    return (
      <div key={country.alpha2Code}>
        <p>{country.name}</p>
        <img src={country.flag} alt="Country Flag" width="150" />
        <p>{country.population}</p>
      </div>
    )
  }

  return (
    <>
      <Select handleSelect={handleSelect} />
      <hr />
      {countries.map(country => detail ?
        detailed(country)
        :
        <img key={country.alpha2Code} src={country.flag} alt="Country Flag" width="200" />
      )}
    </>
  )
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
