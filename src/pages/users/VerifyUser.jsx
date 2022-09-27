import React, { useState } from "react";
import Button from "./components/button/Button";
import InputField from "./components/inputs/InputField";
import { auth } from "../../service/auth.service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { messages } from "../../utils/constants/messages";

const VerifyUser = () => {
  const [input, setInput] = useState({
    phoneNumber: "",
    otp: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const { phoneNumber, otp } = input;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const verify = () => {
    if (input.phoneNumber.length < 11) toast.error(messages.phoneLength);
    if (input.otp.length < 6) toast.error(messages.otpLength);

    if (input.phoneNumber.length >= 11 && input.otp.length >= 6) {
      const request = {
        phoneNumber: input.phoneNumber,
        otp: input.otp,
      };
      auth
        .verifyAccount(request)
        .then((result) => {
          setIsProcessing(false);
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
          toast.error(messages.invalidDetails);
        });
    } else {
      toast.error(messages.invalidDetails);
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
                      type="button"
                      value={
                        isProcessing
                          ? messages.processingMessage
                          : "Verify Account"
                      }
                      name="button"
                      onClick={() => (!isProcessing ? verify() : null)}
                      contain={true}
                    />
                  </div>
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
