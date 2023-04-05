import { Typography, Button, Input, Box, Grid } from "@mui/material";
import { useState } from "react"
import axios from "axios";

function AddCountry(){

    //state to update input values
    const [ country, setCountry] = useState({
        name:"",
        capital:"",
    });
    
    let handleChange = (event) => {
        setCountry({ ...setCountry, name: event.target.value, capital: event.target.value});
      };

    let handleSubmit = (event) =>{
        event.preventDefault();

        try {
            axios.post("http://localhost:8000/api/countries/", country)
            
        } catch (error) {
            console.log(error)
            
        }
    }
    


    return(
        <Box>
          <Typography color="black" variant="h6" >Add a country</Typography>
          <Grid container >
        <form onSubmit={handleSubmit}>
          <Grid item>
            <Input  placeholder="Country Name" type="text" onChange={handleChange}></Input>
            <Input placeholder="Country Capital" type="text" onChange={handleChange}></Input>
          <div className="note-header">
          </div>
            <Button size="small" variant="contained" onClick={handleSubmit}>
              {/* <TfiBackLeft  /> */}
              <span style={{ fontSize: 15 }}>Add</span>
            </Button>
          </Grid>
        </form>
        </Grid>
      </Box>
    )
};
export default AddCountry;
