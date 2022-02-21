import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
const Error = () => {
  const navigate = useNavigate();
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>oops!This is Error..</h1>
        <Button variant="contained" onClick={() => navigate("/")}>Back To Homepage</Button>
      </div>
    </section>
  );
};

export default Error;
