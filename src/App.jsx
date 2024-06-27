import "./App.css";
import fetchCoursid from "./FetchCoursid/FetchCoursid";
import { useQuery } from "react-query"

function App() {

  const { data, isLoading, error } = useQuery('coursid', fetchCoursid)

  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <>
      <h1>React Testing 01</h1>
    </>
  );
}

export default App;
