const axios = window.axios;

const URL = "http://127.0.0.1:8000/api";

export default{
    getAll : ()=> {
        return axios.get(`${URL}/vehicles`);
    }
}