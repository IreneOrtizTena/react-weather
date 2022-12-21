
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';

function App() {
  
  const [city, setCity] = useState(null);
  const [temp, setTemp] = useState (null);
  const [desc, setDesc] = useState (null);
 
  function submitHandler(e) {
    e.preventDefault()
    setCity((i) => e.target.cityValue.value);
    e.target.cityValue.value = "";
    }

  function fetchData(e) {
    axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=847413116871c2f993cf0d4b5cc0f3ac&units=metric`
      ).then((i) => {

      let data = i.data;
      setTemp(data.main.temp);
      setDesc(data.weather[0].description);
      // setIcon(data.weather[0].icon);
  });
}

  useEffect (() => {
    if (city == null) {
      return
    }else{
      fetchData(city)
    }
    console.log("inside effect");
    return fetchData(city);
    
  }, [city]);
   
  return (
    <div className="App">
      <form onSubmit={submitHandler} action = ''>
        <input name="cityValue" type='text'/>
        <button className='go' type='submit'>GO</button>
      </form>

        {temp != null && <h1>{temp}</h1>}
        {desc != null && <h1>{desc}</h1>}
        {/* {icon != null && <img src={`http://openweathermap.org/img/w/${icon}.png`}></img>} */}
        

    </div>
  );
}

export default App;
