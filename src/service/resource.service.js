import { util } from "../utils/constants/constants";
import { http } from "../utils/constants/http";
let resourceService = {
  getAllBusinessType: async () => {
    return await http.get(`${util.endPoint}/business-type`, util.getHeaders());
  },
  getAllResourceType: async () => {
    return await http.get(`${util.endPoint}/resource-type`, util.getHeaders());
  },
  createResource: async (body) => {
    return await http.post(`${util.endPoint}/resource`, body, {
      headers: util.getAuthorizedHeaders(),
    });
  },
  updateResource: async (body, id) => {
    return await http.post(`${util.endPoint}/resource/${id}`, body, {
      headers: util.getAuthorizedHeaders(),
    });
  },
};
export { resourceService };
