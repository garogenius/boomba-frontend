import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./components/button/Button";
import InputField from "./components/inputs/InputField";
import { auth } from "../../service/auth.service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { messages } from "../../utils/constants/messages";

const Login = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const { username, password } = input;

  const login = () => {
    if (input.username === "") toast.error(messages.usernameMessage);
    if (input.username.length < 3) toast.error(messages.usernameLengthMessage);

    // if (input.password === "" || input.password.length < 6)
    //   toast.error(messages.passwordLengthMessage);

    if (
      input.username &&
      input.password &&
      input.username.length >= 3
      // &&
      // input.password.length >= 6
    ) {
      const request = {
        username: input.username,
        password: input.password,
      };

      setIsProcessing(true);
      auth
        .userLogin(request)
        .then((result) => {
          setIsProcessing(false);
          if (result.data.success) {
            localStorage.setItem("userToken", result.data.data.access_token);
            localStorage.setItem("user", JSON.stringify(result.data.data.info));
            toast.success(result.data.message);
            setTimeout(() => {
              window.location = "/dashboard";
            }, 500);
          } else {
            // setIsProcessing(false);
            toast.error(messages.invalidCredentials);
          }
        })
        .catch((e) => {
          console.log(messages.invalidCredentials);
          setIsProcessing(false);
        });
    } else {
      toast.error(messages.invalidCredentials);
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
                  <div className="">
                    <InputField
                      type="text"
                      value={username}
                      placeholder="Username"
                      label="Username"
                      name="username"
                      onChange={(e) =>
                        setInput({
                          ...input,
                          username: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="">
                    <InputField
                      type="password"
                      value={password}
                      placeholder="Password"
                      label="Password"
                      name="password"
                      onChange={(e) =>
                        setInput({
                          ...input,
                          password: e.target.value,
                        })
                      }
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
                      value={
                        isProcessing ? messages.processingMessage : "Login"
                      }
                      type="button"
                      name="button"
                      onClick={() => (!isProcessing ? login() : null)}
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
export default Login;
