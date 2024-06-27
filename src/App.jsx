import "./App.css";
import fetchCoursid from "./FetchCoursid/FetchCoursid";

function App() {
  console.log("Hi!");
  console.log(fetchCoursid());
  return (
    <>
      <h1>React Testing 01</h1>
    </>
  );
}

export default App;
