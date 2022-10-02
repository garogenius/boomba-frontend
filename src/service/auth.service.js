import { util } from "../utils/constants/constants";
import { http } from "../utils/constants/http";


console.log(http);

let auth = {
  registerUser: async (body) => {
    return await http.post(`${util.endPoint}/user`, body, util.getHeaders());
  },
  verifyAccount: async (body) => {
    return await http.post(`${util.endPoint}/user/verify`, body, util.getHeaders());
  },
  userLogin: async (body) => {
    return await http.post(`${util.endPoint}/auth/login`, body, util.getHeaders());
  },
};
export { auth };
