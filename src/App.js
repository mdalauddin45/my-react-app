import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <LoadCountries></LoadCountries>
      <country></country>
    </div>
  );
}

function LoadCountries() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])
  console.log(countries)
  return (
    <div>
      <h1>Visiting Every country of the world!!!</h1>
      <h3>Available Countries: {countries.length}</h3>

      {
        countries.map(country => <Country name={country.name.common} population={country.population} image={country.flags.png} coatOfArms={country.coatOfArms.png}></Country>
        )
      }
    </div>
  );
}

function Country(props) {
  return (
    <div style={{ border: '2px solid green', padding: '20px', margin: '20px', borderRadius: '20px', backgroundColor: 'lightblue' }}>
      <img src={props.image} alt="" /> <br />
      <h5>Logo:  <img style={{ width: '30px' }} src={props.coatOfArms} alt="" /></h5>

      <h1>Country Name:{props.name} </h1>
      <h4>Population: {props.population}</h4>

    </div>
  )
}

export default App;
