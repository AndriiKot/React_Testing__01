import { config } from "../Config/config.js";

const fetchPosts = async () => {
  const header = new Headers({ "Access-Control-Allow-Origin": "*" });
  const data = await fetch(`https://${config.host}${config.path}${config.key}`, {
    headers: header,
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
  console.log(data);
  return data;
};

export default fetchPosts;
