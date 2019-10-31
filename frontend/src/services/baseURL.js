import axios from "axios";

let localBackendURL = "http://13.126.136.228:5000";

export default axios.create({
  baseURL: localBackendURL
});
