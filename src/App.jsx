import "./App.css";
import React from "react";
import fetchCoursid from "./FetchCoursid/FetchCoursid";
import cors from "cors";
// app.use(cors());


function App() {
  fetchCoursid();
  return (
    <>
      <h1>React Testing 01</h1>
    </>
  );
}

export default App;
