import axios from "axios";
export default class AxiosServices {
  PostData(url, data, Header)
   {
    console.log(url);
    console.log(data);
    console.log(Header);
      return axios.post(url, data,Header)
    }
}
  