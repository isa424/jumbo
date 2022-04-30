import axios from "axios";

export const fetchData = function () {
  const url =
    "https://api.jsonstorage.net/v1/json/00000000-0000-0000-0000-000000000000/c4357a15-46e2-4542-8e93-6aa6a0c33c1e";

  return axios.get(url);
};

export default {
  fetchData
};
