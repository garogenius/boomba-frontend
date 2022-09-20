import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./components/button/Button";
import InputField from "./components/inputs/InputField";

const Login = () => {
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
  });
  const { username, password } = inputValue;

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
                  <h4 className="text-center text-dark">Login</h4>
                  <form method="" action="">
                    <div className="">
                      <InputField
                        type="text"
                        value={username}
                        placeholder="Username"
                        label="Username"
                        name="username"
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="">
                      <InputField
                        type="password"
                        value={password}
                        placeholder="Password"
                        label="Password"
                        name="password"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="my-2">
                      <div className="float-right text-sm">
                        <Link to="/">Forget Password ?</Link>
                      </div>
                      <div className="">
                        <Link className="" to="/register">
                          Create Account
                        </Link>
                      </div>
                    </div>

                    <div className="button">
                      <Button value="Login" />
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

export default Login;
