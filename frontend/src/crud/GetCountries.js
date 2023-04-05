import { React, useState, useEffect } from "react";
import axios from "axios";
import { Grid, Typography } from "@mui/material";

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
      <Typography color="black" variant="h6" >Countries List</Typography>
      {countries && countries.map((country)=>{
        return(
          <Grid container sx={{padding: 1}} justifyContent="center" key={country.id}>
            <Grid item alignItems="center">          
            {country.name} 
            </Grid>
          </Grid>
          
        )
      })}
    </div>
  )
};

export default GetCountries;