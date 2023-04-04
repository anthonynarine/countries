import { React, useState, useEffect } from "react";
import axios from "axios";

function GetCountries(){ 

  let [countries, setCountries] = useState([]);

  useEffect(()=> {
    let fetchCountries = async ()=> {
      try {
        let {data} = await axios.get("http://localhost:8000/api/countries/");
        console.log("DATA:", data);
        setCountries(data)
      } catch (error) {
        console.log(error)     
      }
    }
    fetchCountries();
  },[]);


  return (
    <div>
      {countries && countries.map((country)=>{
        return(
          <>
          {country.name}
          </>
          
        )
      })}
    </div>
  )
};

export default GetCountries;