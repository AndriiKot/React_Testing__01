const fetchCoursid = async () => {
  const data = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((response) => response.json());
  console.log(data)
  return data;
};

export default fetchCoursid;
