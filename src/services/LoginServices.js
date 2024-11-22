import axios from "axios";
const PREFIX_URL = 'http://localhost:8000/login/';
export const loginService = async (datos) => {
    const response = await axios.post(PREFIX_URL, datos);
    return response;
};
