import axios from "axios";

// Create an instance of axios
const instance = axios.create({
  baseURL: "https://api.jsonstorage.net/v1/json",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
});

// Maps urls for ease of use
const urls = {
  "/stores": {
    get:
      "/00000000-0000-0000-0000-000000000000/c4357a15-46e2-4542-8e93-6aa6a0c33c1e"
  }
};

// Abstract away a concrete implementation of a fetch/request library
export const request = (options) => {
  if (!options) {
    return Promise.reject("options is required");
  }

  if (!urls[options.url]) {
    return Promise.reject("invalid url");
  }

  if (!urls[options.url][options.method]) {
    return Promise.reject("method not allowed");
  }

  options.url = urls[options.url][options.method];

  return instance(options);
};

export default request;
