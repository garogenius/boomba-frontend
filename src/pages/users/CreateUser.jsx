import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./components/button/Button";
import InputField from "./components/inputs/InputField";
import Select from "./components/select/AccountType";
import { auth } from "../../Service/authentication";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CreateUser = () => {
  const [user, setUser] = useState({
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

  const create = (e) => {
    e.preventDefault();
    auth
      .registerUser(user)
      .then((result) => {
        if (result.data.success) {
          toast.success(result.data.message);
          localStorage.setItem("userToken", result.data.token);
          setTimeout(() => {
            window.location = "/verify";
          }, 500);
        } else {
          toast.error(result.data.message);
        }
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };
  return (
    <div>
      <div className="bg-secondary">
        <div className="container">
          <ToastContainer />
          <div className="row">
            <div className="col-lg-12 my-5" style={{ marginTop: "" }}>
              <div className="card border-primary rounded">
                <div className="card-body">
                  <h4 className="text-center text-dark">Create Account</h4>
                  <form method="post" action="" onSubmit={create}>
                    <div className="container-fluid">
                      <div className="row">
                        <div class="col-md-4">
                          <InputField
                            type="text"
                            value={user.name}
                            placeholder="Name"
                            label="Name"
                            name="name"
                            onChange={(e) =>
                              setUser({ ...user, name: e.target.value })
                            }
                            required
                          />
                        </div>
                        <div class="col-md-4">
                          <InputField
                            type="email"
                            value={user.emailAddress}
                            placeholder="email"
                            label="Email"
                            name="email"
                            onChange={(e) =>
                              setUser({ ...user, emailAddress: e.target.value })
                            }
                            required
                          />
                        </div>
                        <div class="col-md-4">
                          <InputField
                            type="text"
                            value={user.phoneNumber}
                            placeholder="Phone"
                            label="Phone"
                            name="phone"
                            onChange={(e) =>
                              setUser({ ...user, phoneNumber: e.target.value })
                            }
                            required
                          />
                        </div>
                        <div class="col-md-4">
                          <InputField
                            type="text"
                            value={user.nin}
                            placeholder="Nin No"
                            label="nin"
                            name="nin-no"
                            onChange={(e) =>
                              setUser({ ...user, nin: e.target.value })
                            }
                            required
                          />
                        </div>
                        <div class="col-md-4">
                          <Select
                            value={user.accountType}
                            label="Account Type"
                            name="AccountType"
                            onChange={(e) =>
                              setUser({ ...user, accountType: e.target.value })
                            }
                          />
                        </div>
                        <div class="col-md-4">
                          <InputField
                            type="text"
                            value={user.state}
                            placeholder="state"
                            label="state"
                            name="state"
                            onChange={(e) =>
                              setUser({ ...user, state: e.target.value })
                            }
                          />
                        </div>
                        <div class="col-md-4">
                          <InputField
                            type="text"
                            value={user.lga}
                            placeholder="Local Govt"
                            label="lga"
                            name="lga"
                            onChange={(e) =>
                              setUser({ ...user, lga: e.target.value })
                            }
                          />
                        </div>
                        <div class="col-md-4">
                          <InputField
                            type="text"
                            value={user.street}
                            placeholder="street"
                            label="street"
                            name="street"
                            onChange={(e) =>
                              setUser({ ...user, street: e.target.value })
                            }
                          />
                        </div>

                        <div class="col-md-4">
                          <InputField
                            type="password"
                            value={user.password}
                            placeholder="password"
                            label="password"
                            name="password"
                            onChange={(e) =>
                              setUser({ ...user, password: e.target.value })
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
                          value="Create Account"
                          type="error"
                          name="submit"
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
