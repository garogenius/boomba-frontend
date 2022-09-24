import axios from "axios";
import { endPoint } from "../utils/constants/constants";

let auth = {
  registerUser: async (body) => {
    let data = JSON.stringify(body);
    const result = await axios.post(endPoint + "user", data, {
      headers: {
        // authorization: "",
        "Content-Type": "application/json",
      },
    });
    console.log(result);

    return result;
  },
  verifyAccount: async (body) => {
    let data = JSON.parse(body);
    const result = await axios.post(endPoint + "user/verify", data, {
      headers: {
        // authorization: "",
        "Content-Type": "application/json",
      },
    });
    console.log(result);
    return result;
  },
  userLogin: async (body) => {
    const result = await axios.post(endPoint + "auth/login", body, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
      },
    });
    console.log(result);
    return result;
  },
};
export { auth };
