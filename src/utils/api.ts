import axios from 'axios';

export function getBaseURL() {
  const apiEndpoint = process.env.REACT_APP_API_BASE;
  return apiEndpoint;
}

axios.defaults.withCredentials = false;
axios.defaults.baseURL = getBaseURL();
axios.defaults.timeout = 20000; // Max time limit: 20s
axios.defaults.method = 'GET';

function jsonConfig(config: any) {
  config.headers = {
    ...config.headers,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  return config;
}

function request(config: any) {
  if (config.data) {
    jsonConfig(config);
  }

  // const tokenKeyName = "brightbee-token";

  // if (typeof localStorage !== "undefined") {
  //   if (!config.headers) config.headers = {};
  //   if (localStorage.getItem(tokenKeyName)) {
  //     config.headers["csrf-token"] = localStorage.getItem(tokenKeyName);
  //   }
  // }
  return axios.request(config);
}

export default axios;
