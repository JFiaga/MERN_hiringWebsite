import axios from "axios";

const newRequest = axios.create({
    baseURL:"http://localhost:8801/api",
    withCredentials:true
});

export {newRequest}