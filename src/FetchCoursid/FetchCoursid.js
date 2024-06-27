import { config } from "../Config/config.js";

// const fetchPosts = async () => {
//   const header = new Headers({ "Access-Control-Allow-Origin": "*" });
//   const data = await fetch(`https://${config.host}${config.path}${config.key}`, {
//     headers: header,
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));
//   console.log(data);
//   return data;
// };

// export default fetchPosts;

const fetchPosts = async () => {
  const { host, path, key } = config;
//  const url = `https://${host}/${path}${key}`;
//  const url = "https://www.cbr-xml-daily.ru/daily_json.js";
//    const url = "https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11";
//	const url = "https://api.coingate.com/v2/rates/merchant/EUR/SDH/";
	const url = "https://api.coingate.com/v2/rates/merchant/EUR/UAH/";

  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
};

fetchPosts();
export default fetchPosts;
