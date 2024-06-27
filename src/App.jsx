import "./App.css";
import fetchCoursid from "./FetchCoursid/FetchCoursid";
import { useQuery } from "react-query"

function App() {
  fetchCoursid();
  // const { data, isLoading, error } = useQuery('coursid', fetchCoursid)

  // if (isLoading) {
  //   return <div>Loading...</div>
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>
  // }

  return (
    <>
      <h1>React Testing 01</h1>
    </>
  );
}

export default App;
