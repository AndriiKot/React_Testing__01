const fetchCoursid = async () => {
  const data = await fetch("https://api.coingate.com/v2/rates/merchant").then(
    (response) => response.json()
  );
  console.log("hi!")
  return data;
};

export default fetchCoursid;
