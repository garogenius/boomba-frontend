import axios from "axios";

const http = () => {
  this.post = async (url, data, headers) => {
    return await axios.post(url, data, headers);
  };
  this.get = async (url, data, headers) => {
    return await axios.get(url, data, headers);
  };
};

export { http };
