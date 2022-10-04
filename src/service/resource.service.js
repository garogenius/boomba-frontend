import { util } from "../utils/constants/constants";
import { http } from "../utils/constants/http";
let resourceService = {
  getAllBusinessType: async () => {
    return await http.get(`${util.endPoint}/business-type`, util.getHeaders());
  },
  getAllResourceType: async () => {
    return await http.get(`${util.endPoint}/resource-type`, util.getHeaders());
  },
  getResourceById: async (id) => {
    return await http.get(
      `${util.endPoint}/resource-type/${id}`,
      util.getHeaders()
    );
  },
  findResourceByIdno: async (id) => {
    return await http.get(
      `${util.endPoint}/resource/search/byidentity/${id}`,
      util.getHeaders()
    );
  },
  findResourceBySerialNo: async (serialNo) => {
    return await http.get(
      `${util.endPoint}/resource/search/byserial/${serialNo}`,
      util.getHeaders()
    );
  },
  findResourceByCode: async (code) => {
    return await http.get(
      `${util.endPoint}/resource/search//bycode/${code}`,
      util.getHeaders()
    );
  },
  getAllMyResources: async () => {
    return await http.get(`${util.endPoint}/resource`, {
      headers: util.getAuthorizedHeaders(),
    });
  },
  createResource: async (body) => {
    return await http.post(`${util.endPoint}/resource`, body, {
      headers: util.getAuthorizedHeaders(),
    });
  },
  updateResource: async (body, id) => {
    return await http.put(`${util.endPoint}/resource/${id}`, body, {
      headers: util.getAuthorizedHeaders(),
    });
  },
  updateResourceStatus: async (body, id) => {
    return await http.put(
      `${util.endPoint}/resource/status/update/${id}`,
      body,
      {
        headers: util.getAuthorizedHeaders(),
      }
    );
  },
  ChangeOwnership: async (id) => {
    return await http.get(`${util.endPoint}/resource/ownership/change/${id}`, {
      headers: util.getAuthorizedHeaders(),
    });
  },
};
export { resourceService };
