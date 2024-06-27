import { config } from "../Config/config.js";

const fetchCoursid = async () => {
  const { host, path, key } = config;
  //  const url = `https://${host}/${path}${key}`;
  //  const url = "https://www.cbr-xml-daily.ru/daily_json.js";
  //  const url = "https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11";
  //  const url = "https://api.coingate.com/v2/rates/merchant/EUR/SDH/";
  // const url = "https://api.coingate.com/v2/rates/merchant/EUR/UAH/";
  const url = "https://api.privatbank.ua/p24api/exchange_rates?date=01.12.2014";

  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
};
fetchCoursid();

export default fetchCoursid;
