import axios from "axios";

axios.defaults.baseURL = "https://freedemy-service.azurewebsites.net/api/v1";

axios.interceptors.request.use( (req) => {
    const user = localStorage.getItem("user");

    if (user) {
        const { token } = JSON.parse(localStorage.getItem("user"));
        req.headers.authorization = `Bearer ${token}`;
    }
    return req;
});
