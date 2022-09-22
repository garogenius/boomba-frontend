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
    let data = JSON.stringify(body);
    const result = await axios.post(endPoint + "user/verify", data, {
      headers: {
        // authorization: "",
        "Content-Type": "application/json",
      },
    });
    console.log(result);
    return result;
  },
};
export { auth };
