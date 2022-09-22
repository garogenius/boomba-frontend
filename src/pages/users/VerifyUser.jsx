import React, { useState } from "react";
import Button from "./components/button/Button";
import InputField from "./components/inputs/InputField";
import { auth } from "../../Service/authentication";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const VerifyUser = () => {
  const [inputValue, setInputValue] = useState({
    phoneNumber: "",
    otp: "",
  });
  const { phoneNumber, otp } = inputValue;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const verify = (e) => {
    e.preventDefault();
    if (inputValue.phoneNumber != "" && inputValue.otp) {
      auth
        .verifyAccount(inputValue)
        .then((result) => {
          if (result.data.success) {
            toast.success(result.data.message);
            setTimeout(() => {
              window.location = "/login";
            }, 500);
          } else {
            toast.error(result.data.message);
          }
        })
        .catch((e) => {
          toast.error(e.message);
        });
    } else {
      toast.error("fields cannot be empty");
    }
  };
  return (
    <div>
      <div className="wrapper bg-secondary">
        <ToastContainer />
        <div className="container">
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
              <div id="log" className="card border-primary rounded my-5">
                <div className="card-body">
                  <h4 className="text-center text-dark">Verify Account</h4>
                  <form method="post" action="" onSubmit={verify}>
                    <div className="">
                      <InputField
                        type="text"
                        value={phoneNumber}
                        placeholder="phone"
                        label="phone"
                        name="phoneNumber"
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="">
                      <InputField
                        type="text"
                        value={otp}
                        placeholder="otp"
                        label="otp"
                        name="otp"
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="button">
                      <Button
                        value="Verify Account"
                        type="error"
                        name="submit"
                        // onClick={() => alert("Hello")}
                        contain={true}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyUser;
