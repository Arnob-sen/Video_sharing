import { useState } from "react";
import { Paper } from "@mui/material";
import {TextField} from "@mui/material";

const SearchBar =  ({ onSubmit }) => {
    const [search, setSearch] = useState("");
  
    const handleChange = (event) => setSearch(event.target.value);
  
    const onKeyPress = (event) => {
      if (event.key === "Enter") {
        onSubmit(search);
      }
    }
  
    return (
      <Paper elevation={6} style={{ padding: "25px" }}>
        <TextField
          fullWidth
          label="Search..."
          value={search}
          onChange={handleChange}
          onKeyPress={onKeyPress}
        />
      </Paper>
    );
  }
  
  export default SearchBar;