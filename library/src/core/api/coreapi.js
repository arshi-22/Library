import axios from "axios";

// const getAxiosInstance = (baseUrl) => {
//   let axiosInstance = axios.create({
//     baseURL: baseUrl,
//     timeout: window.appSettings.API_CONFIG.TIMEOUT,
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       // "Access-Control-Allow-Headers": "*",
//       // "Access-Control-Allow-Credentials": "true",
//     },
//   });
//   return axiosInstance;
// };

// const headers = {
//   "Content-Type": "application/json",
// };

const response = { status: "", data: [], message: "" };


export const get = async (url) => {
  try {
    // let axiosInstance = await getAxiosInstance("http://localhost:8080/");
    let responseData = await axios.get(url);
    
    response.status = responseData.status;
    response.data = responseData.data;
    return response.data;
  } catch (error) {
    response.status = error?.request.status;
    response.message =
      error?.request?.response && JSON.parse(error.request.response).message;
    console.error(error);
  }
  return response.data;

  //  axios
  // .get(url, function (req, res) {
  //   res.headers("Access-Control-Allow-Origin", "*");
  // })
  // .then((res) => {
  //   console.log("----------------", res);
  //   return res;
  // });
};
