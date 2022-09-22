import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./components/button/Button";
import InputField from "./components/inputs/InputField";
import { auth } from "../../Service/authentication";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
  });
  const { username, password } = inputValue;

  const handleChange = (e) => {
    const { name, value } = e.target;
    // alert(value);
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const login = (e) => {
    e.preventDefault();
    // alert(JSON.stringify(inputValue));
    if (inputValue.username != "" && inputValue.password) {
      auth
        .userLogin(inputValue)
        .then((result) => {
          if (result.data.success) {
            localStorage.setItem("token", result.data.access_token);
            toast.success(result.data.message);
            setTimeout(() => {
              window.location = "/dashboard";
            }, 500);
          } else {
            toast.error(result.data.message);
          }
        })
        .catch((e) => {
          // alert(JSON.stringify(e))
          toast.error(e.message);
        });
    } else {
      toast.error("Field cannot be empty..!");
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
                  <h4 className="text-center text-dark">Login</h4>
                  <form method="post" action="" onSubmit={login}>
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
                      <Button
                        value="Login"
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
export default Login;
