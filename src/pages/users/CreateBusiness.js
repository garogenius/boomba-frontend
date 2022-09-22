import React, { useState } from "react";
import InputField from "./components/inputs/InputField";
import Button from "./components/button/Button";
import Select from "./components/select/AccountType";
import BusinessType from "./components/select/BusinessType";
import BusinessTarget from "./components/select/BusinessTarget";
const CreateBusiness = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    phone: "",
    email: "",
    reqNo: "",
    state: "",
    lga: "",
    street: "",
    password: "",
    AccountType: "",
    businessType: "",
    businessTarget: "",
  });
  const {
    name,
    phone,
    email,
    reqNo,
    state,
    lga,
    street,
    AccountType,
    businessType,
    businessTarget,
    password,
  } = inputValue;

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
      <div className="bg-secondary">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 my-5">
              <div className="card border-primary rounded">
                <div className="card-body">
                  <h4 className="text-center text-dark">Create Business</h4>
                  <form method="" action="">
                    <div className="container-fluid">
                      <div className="row">
                        <div class="col-md-4">
                          <InputField
                            type="text"
                            value={name}
                            placeholder="Name"
                            label="Name"
                            name="name"
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div class="col-md-4">
                          <InputField
                            type="email"
                            value={email}
                            placeholder="email"
                            label="Email"
                            name="email"
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div class="col-md-4">
                          <InputField
                            type="text"
                            value={phone}
                            placeholder="Phone"
                            label="Phone"
                            name="phone"
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div class="col-md-4">
                          <InputField
                            type="text"
                            value={reqNo}
                            placeholder="Registration No"
                            label="reqNo"
                            name="reqNo"
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div class="col-md-4">
                          <Select
                            value={AccountType}
                            label="Account Type"
                            name="AccountType"
                            onChange={handleChange}
                          />
                        </div>
                        <div class="col-md-4">
                          <BusinessType
                            value={businessType}
                            label="Business Type"
                            name="businessType"
                            onChange={handleChange}
                          />
                        </div>
                        <div class="col-md-4">
                          <BusinessTarget
                            value={businessTarget}
                            label="Business Target"
                            name="businessTarget"
                            onChange={handleChange}
                          />
                        </div>

                        <div class="col-md-4">
                          <InputField
                            type="text"
                            value={state}
                            placeholder="state"
                            label="state"
                            name="state"
                            onChange={handleChange}
                          />
                        </div>
                        <div class="col-md-4">
                          <InputField
                            type="text"
                            value={lga}
                            placeholder="Local Govt"
                            label="lga"
                            name="lga"
                            onChange={handleChange}
                          />
                        </div>
                        <div class="col-md-4">
                          <InputField
                            type="text"
                            value={street}
                            placeholder="street"
                            label="street"
                            name="street"
                            onChange={handleChange}
                          />
                        </div>

                        <div class="col-md-4">
                          <InputField
                            type="password"
                            value={password}
                            placeholder="password"
                            label="password"
                            name="password"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    {/* <div className="my-2">
                      <div className="text-center">
                        <p>
                          Already Registered{" "}
                          <Link className="" to="/login">
                            Login
                          </Link>
                        </p>
                      </div>
                    </div> */}
                    <div className="row">
                      <div className="col-md-4"></div>

                      <div className="col-md-4 button">
                        <Button value="Create Business" />
                      </div>
                      <div className="col-md-4"></div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBusiness;
