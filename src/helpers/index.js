export const search = async (query = "developer") => {
  console.log(query);
  const url = `https://strive-jobs-api.herokuapp.com/jobs?search=${query}&limit=10&skip=2`;
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    console.log("all ok");
    // console.log(data);
    return data;
  } else {
    console.log(response);
    console.log("error");
  }
};
