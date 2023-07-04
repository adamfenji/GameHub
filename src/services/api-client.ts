import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "2c8426e4247a471b86800971f3438601"
    }
})