
import './App.css';
import { Box, Grid, Paper, styled } from "@mui/material";
import { useState } from "react";
import GetCountries from './crud/GetCountries';
import AddCountry from './crud/AddCountry';
// import './App.css'

export default function App() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: 10,
    minHeight: 400,
  }));

  return (
    <Box sx={{ textAlign: "center" }}>
      <h1>CRUD with axios</h1>

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          rowSpacing={5}
          columns={{ xs: 3, sm: 6, md: 12 }}
          sx={{ padding: 5 }}
        >
          <Grid xs={3}>
            <Item>
              <GetCountries />
            </Item>
          </Grid>
          <Grid xs={3}>
            <Item>
              <AddCountry />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
