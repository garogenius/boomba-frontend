import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./components/button/Button";
import InputField from "./components/inputs/InputField";
import Select from "./components/select/AccountType";
import { auth } from "../../Service/auth.service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { messages } from "../../utils/constants/messages";
const CreateUser = () => {
  const [input, setInput] = useState({
    name: "",
    phoneNumber: "",
    emailAddress: "",
    nin: "",
    state: "",
    lga: "",
    street: "",
    password: "",
    accountType: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const create = () => {
    if (input.phoneNumber.length < 11) toast.error(messages.phoneLength);
    if (input.nin.length < 11) toast.error(messages.ninLength);
    if (input.password.length < 6) toast.error(messages.passwordLength);
    if (
      input.phoneNumber.length <= 11 &&
      input.nin.length < 11 &&
      input.password.length < 6
    ) {
      const request = {
        name: input.name,
        phoneNumber: input.phoneNumber,
        emailAddress: input.emailAddress,
        nin: input.nin,
        state: input.state,
        lga: input.lga,
        street: input.street,
        accountType: input.accountType,
        password: input.password,
      };
      auth
        .registerUser(request)
        .then((result) => {
          setIsProcessing(false);
          if (result.data.success) {
            toast.success(result.data.message);

            setTimeout(() => {
              // window.location = "/verify";
            }, 500);
          } else {
            toast.error(result.data.message);
          }
        })
        .catch((e) => {
          toast.error(e.message);
        });
    }
  };
  return (
    <div>
      <div className="bg-secondary">
        <ToastContainer />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 my-5" style={{ marginTop: "" }}>
              <div className="card border-primary rounded">
                <div className="card-body">
                  <h4 className="text-center text-dark">Create Account</h4>
                  <form method="post">
                    <div className="container-fluid">
                      <div className="row">
                        <div class="col-md-4">
                          <InputField
                            type="text"
                            value={input.name}
                            placeholder="Name"
                            label="Name"
                            name="name"
                            onChange={(e) =>
                              setInput({ ...input, name: e.target.value })
                            }
                            required
                          />
                        </div>
                        <div class="col-md-4">
                          <InputField
                            type="email"
                            value={input.emailAddress}
                            placeholder="email"
                            label="Email"
                            name="email"
                            onChange={(e) =>
                              setInput({
                                ...input,
                                emailAddress: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                        <div class="col-md-4">
                          <InputField
                            type="text"
                            value={input.phoneNumber}
                            placeholder="Phone"
                            label="Phone"
                            name="phone"
                            onChange={(e) =>
                              setInput({
                                ...input,
                                phoneNumber: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                        <div class="col-md-4">
                          <InputField
                            type="text"
                            value={input.nin}
                            placeholder="Nin No"
                            label="nin"
                            name="nin-no"
                            onChange={(e) =>
                              setInput({ ...input, nin: e.target.value })
                            }
                            required
                          />
                        </div>
                        <div class="col-md-4">
                          <Select
                            value={input.accountType}
                            label="Account Type"
                            name="AccountType"
                            onChange={(e) =>
                              setInput({
                                ...input,
                                accountType: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div class="col-md-4">
                          <InputField
                            type="text"
                            value={input.state}
                            placeholder="state"
                            label="state"
                            name="state"
                            onChange={(e) =>
                              setInput({ ...input, state: e.target.value })
                            }
                          />
                        </div>
                        <div class="col-md-4">
                          <InputField
                            type="text"
                            value={input.lga}
                            placeholder="Local Govt"
                            label="lga"
                            name="lga"
                            onChange={(e) =>
                              setInput({ ...input, lga: e.target.value })
                            }
                          />
                        </div>
                        <div class="col-md-4">
                          <InputField
                            type="text"
                            value={input.street}
                            placeholder="street"
                            label="street"
                            name="street"
                            onChange={(e) =>
                              setInput({ ...input, street: e.target.value })
                            }
                          />
                        </div>

                        <div class="col-md-4">
                          <InputField
                            type="password"
                            value={input.password}
                            placeholder="password"
                            label="password"
                            name="password"
                            onChange={(e) =>
                              setInput({ ...input, password: e.target.value })
                            }
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
                          type="error"
                          value={
                            isProcessing
                              ? messages.processingMessage
                              : "Create Account"
                          }
                          name="button"
                          onClick={() => (!isProcessing ? create() : null)}
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
