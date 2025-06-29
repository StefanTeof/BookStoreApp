import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || "/api",
    headers: {
        "Access-Control-Allow-Origin": "*",
    }
});
export default instance;