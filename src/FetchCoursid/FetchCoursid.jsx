const fetchCoursid = async () => {
  const data = await fetch("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11").then(
    (response) => response.json()
  );
  console.log(data);
  return data;
};

export default fetchCoursid;
