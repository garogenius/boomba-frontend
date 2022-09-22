import axios from "axios";
import { endPoint } from "../utils/constants/constants";

let userService = {
  getAllBusinessType: async () => {
    const result = await axios.get(endPoint + "business-type", {
      headers: {
        authorization: "",
        "Content-Type": "application/json",
      },
    });
    return result;
  },
};
export { userService };
