import "./App.css";
import fetchCoursid from "./FetchCoursid/FetchCoursid";
import { useQuery } from "@tanstack/react-query";

function App() {
  const { isLoading, isError, data } = useQuery({
    queryKey: "coursid",
    queryFn: fetchCoursid
  });
  return (
    <>
      <h1>React Testing 01</h1>
    </>
  );
}

export default App;
