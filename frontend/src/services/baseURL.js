import axios from "axios";

let localBackendURL = "http://localhost:5000";

export default axios.create({
  baseURL: localBackendURL
});
