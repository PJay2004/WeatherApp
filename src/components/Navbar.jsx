import React, { useState } from "react";
import CloudQueueTwoToneIcon from "@mui/icons-material/CloudQueueTwoTone";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import PersonPinIcon from "@mui/icons-material/PersonPin";
// import SearchIcon from "@mui/icons-material/Search";

const Navbar = ({ onSearch }) => {
  const [searchCity, setsearchCity] = useState("");

  const handleSearchclick = () => {
    if (searchCity.trim()) {
      onSearch(searchCity);
    }
  };

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: "25px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <CloudQueueTwoToneIcon />
        <p style={{ fontWeight: "bold", fontSize: "20px" }}>
          Weather Application
        </p>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <TextField
          style={{
            width: "20rem",
            backgroundColor: "white",
            borderRadius: "8px",
          }}
          id="outlined-basic"
          placeholder="Colombo"
          variant="outlined"
          fontWeight="bold"
          color="#9A7575"
          label="Enter City Name"
          size="small"
          value={searchCity}
          onChange={(e) => setsearchCity(e.target.value)}
        />

        <Button
          variant="contained"
          style={{ borderRadius: "8px", backgroundColor: "#9A7575" }}
          onClick={handleSearchclick}
        >
          Search
        </Button>
      </div>

      <div
        style={{
          fontSize: "14px",
          fontWeight: "600",
          backgroundColor: "#9A7575",
          height: "35px",
          width: "140px",
          gap: "2px",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PersonPinIcon style={{ color: "white" }} />
        <p style={{ color: "white" }}>My Location</p>
      </div>
    </nav>
  );
};

export default Navbar;
