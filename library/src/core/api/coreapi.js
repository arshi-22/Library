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

const responseData = { status: "", data: [], message: "" };

export const get = async (url) => {
  // let axiosInstance = await getAxiosInstance("http://localhost:8080/");
  await axios
    .get(url)
    .then((response) => {
      responseData.status = response.status;
      responseData.data = response.data;
      return responseData;
    })
    .catch((error) => {
      responseData.status = error?.request.status;
      responseData.message =
        error?.request?.response && JSON.parse(error.request.response).message;
      console.error(error);
      return responseData;
    });
};
