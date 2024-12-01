import axios from "axios";

const api = axios.create({
    baseURL: "https://backend-elfahd.web-allsafeeg.com/api",
});

api.interceptors.request.use(
    (config)=>{
        let lang = localStorage.getItem('language')
        if(lang){
            config.headers['lang'] = lang
        }

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default api