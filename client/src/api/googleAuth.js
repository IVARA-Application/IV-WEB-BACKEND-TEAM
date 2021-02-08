import { baseUrl } from '../constants'
import axios from 'axios'
const login = async (code) => {
  const body = { "code": code };
  return axios
    .post(baseUrl + "api/auth/google", JSON.stringify(code))
    //  {headers:{"Access-Control-Allow-Origin":true}},
    //  {
    //     code: `${code}`,
    //   })
    .then((res) => {
      console.log(res);
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res);
      }
    });
};

export { login };