import { storage } from "./storage";

function Util() {
  this.endPoint = "http://ec2-52-90-238-150.compute-1.amazonaws.com:8081/v1";
  

  this.getHeaders = () => {
    return {
      "Content-Type": "application/json",
      Accept: "application/json; charset=utf-8",
    }
  };
  this.getAuthorizedHeaders = () => {
    return {
      "Content-Type": "application/json",
      Accept: "application/json; charset=utf-8",
      Authorization: `Bearer ${storage.get("userToken")}`
    }
  };
}
const util = new Util();
export { util };

