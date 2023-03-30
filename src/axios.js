import axios from "axios";

const instance = axios.create({
  baseURL: 'https://api.vtrusts.com/',
});

export default instance;
