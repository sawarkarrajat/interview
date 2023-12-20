export const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const resp = await response.json();
    return resp;
  } catch (error) {
    console.log(error);
  }
};
