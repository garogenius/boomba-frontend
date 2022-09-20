import React, { useState } from "react";
import Button from "./components/button/Button";
import InputField from "./components/inputs/InputField";
const VerifyUser = () => {
  const [inputValue, setInputValue] = useState({
    phone: "",
    otp: "",
  });
  const { phone, otp } = inputValue;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(inputValue);
  };
  return (
    <div>
      <div className="wrapper bg-secondary">
        <div className="container">
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
              <div id="log" className="card border-primary rounded my-5">
                <div className="card-body">
                  <h4 className="text-center text-dark">Verify Account</h4>
                  <form method="" action="">
                    <div className="">
                      <InputField
                        type="text"
                        value={phone}
                        placeholder="phone"
                        label="phone"
                        name="phone"
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
                      <Button value="Verify Account" />
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
