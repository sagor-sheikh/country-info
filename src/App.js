import React, { useEffect, useState } from 'react';
import Country from './Components/Country';
import "./App.css";
import Search from './Components/Search';

const url = "https://restcountries.com/v3.1/all"
function App() {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [country, setCountry] = useState([]);
  const [filterCountry, setFilterCountry] = useState(country);

  const fetchData = async (url) => {
    setLoading(true);
    try{
    const response = await fetch(url);
    const data = await response.json();
    setCountry(data);
    setFilterCountry(data);
    setLoading(false);
    setError(null);
    }catch(error){
      setLoading(false);
      setError(error);
    }
  }

  useEffect(() => {
    fetchData(url)
  }, [])

  const handeRemoveCountry = (name) => {
    const filter = filterCountry.filter((country) => country.name.common !== name.common);
    setFilterCountry(filter);
  };
  const handleSerach = (searchValue) =>{
    let value = searchValue.toLowerCase();
    const newCountry = country.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value)
    });
    setFilterCountry(newCountry);
  };
  return (
    <>
      <h1>Country</h1>
      <Search onSearch={handleSerach}/>
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error.message}</h2>}
      {
        country && <Country country={filterCountry} onRemoveCountry={handeRemoveCountry}/>
      }
    </>
  );
}

export default App;
