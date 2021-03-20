const axios = window.axios;

const URL = "http://127.0.0.1:8000/api";

export default{
    postLogin : (post)=> {
        return axios.post(`${URL}/check`, post).then((response)=>{
            sessionStorage.setItem('user', response);
        });
    }
}