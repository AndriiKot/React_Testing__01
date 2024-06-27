import { config } from '../Config/config.js';

const fetchPosts = async () => {
  const data = await fetch(`https://${config.host}${config.path}${config.key}`)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

  return data;
};

export default fetchPosts;
