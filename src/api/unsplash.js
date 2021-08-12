import axios from "axios";

export default axios.create({
    baseUrl: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID e3MPz_hxhidsNIlpfqVPCdrzWfvNZXI5s_gWfqWknk4"
    }
});