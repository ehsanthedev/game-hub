import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params : {
        key : ('95251acc7ba943fb93a126b564be29a3')
    }
})