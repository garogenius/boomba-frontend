import { util } from "../utils/constants/constants";
import { http } from "../utils/constants/http";
let userService = {
  getAllBusinessType: async () => {
    return await http.get(`${util.endPoint}/business-type`, util.headers);
  },
  getAllResourceType: async () => {
    return await http.get(`${util.endPoint}/resource-type`, util.headers);
  },
  createResource: async (body) => {
    return await http.post(`${util.endPoint}/resource`, body, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        "Content-Type": "application/json",
        Accept: "application/json; charset=utf-8",
      },
    });
  },
};
export { userService };
