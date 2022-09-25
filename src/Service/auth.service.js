import { util } from "../utils/constants/constants";
import { http } from "../utils/constants/http";

let auth = {
  registerUser: async (body) => {
    return await http.post(`${util.endPoint}/user`, body, util.headers);
  },
  verifyAccount: async (body) => {
    return await http.post(`${util.endPoint}/user/verify`, body, util.headers);
  },
  userLogin: async (body) => {
    return await http.post(`${util.endPoint}/auth/login`, body, util.headers);
  },
};
export { auth };
