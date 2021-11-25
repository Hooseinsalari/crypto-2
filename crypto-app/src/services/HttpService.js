import axios from "axios";

axios.defaults.baseURL = "https://api.coingecko.com/api/v3/coins";



const http = {
    get: axios.get
}

export default http;