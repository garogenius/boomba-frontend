const util = {
  endPoint: "http://ec2-52-90-238-150.compute-1.amazonaws.com:8081/v1",
  headers: {
    authorization: localStorage.getItem("userToken"),
    "Content-Type": "application/json",
    Accept: "application/json; charset=utf-8",
  },
};

export { util };
