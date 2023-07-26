import axios from "axios";

export const newRequest = axios.create({
    baseURL:"https://jhireapi.onrender.com/api/",
    withCredentials: true
});


