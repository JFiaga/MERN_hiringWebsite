import axios from "axios";

// export const newRequest = axios.create({
//     baseURL:"http://localhost:8800/api/",
//     withCredentials: true
// });


export const newRequest = axios.create({
    baseURL:"https://jhire-api.vercel.app/api",
    withCredentials: true
});

