import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-dom";
import { Box, Button } from "@mui/material";

function GetCountries() {
  let navigate = useState();

  const [countries, setCountries] = useState("");

  useEffect(() => {
    try {
      async function getAllCountries() {
        let response = await axios.get("http://127.0.0.1:8000/api/countries/");
        console.log("RESPONSE:", response.data);
        setCountries(response.data);
      }
    } catch (error) {
      console.log(error.response);
    }
  });

  return (
    <Box>
      <h1>GetCountries</h1>
      <Box
        sx={{
          minHeight: 330,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Button variant="contained" sx={{ marginTop: 2 }}>
          GET
        </Button>
      </Box>
    </Box>
  );
}
export default GetCountries;
