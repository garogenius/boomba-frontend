import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./components/button/Button";
import InputField from "./components/inputs/InputField";
import Select from "./components/select/AccountType";
const CreateUser = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    phone: "",
    email: "",
    nin: "",
    state: "",
    lga: "",
    street: "",
    password: "",
    AccountType: "",
  });
  const { name, phone, email, nin, state, lga, street, AccountType, password } =
    inputValue;

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
            <div className="col-lg-12 my-5" style={{ marginTop: "" }}>
              <div className="card border-primary rounded">
                <div className="card-body">
                  <h4 className="text-center text-dark">Create Account</h4>
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
                            value={nin}
                            placeholder="Nin No"
                            label="nin"
                            name="nin-no"
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

                    <div className="my-2">
                      <div className="text-center">
                        <p>
                          Already Registered{" "}
                          <Link className="" to="/login">
                            Login
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4"></div>

                      <div className="col-md-4">
                        <Button
                          value="Create Account"
                          type="error"
                          // onClick={() => alert("Hello")}
                          contain={true}
                        />
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

export default CreateUser;
