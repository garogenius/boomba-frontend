import React, { useState, useEffect } from "react";
import InputField from "./components/inputs/InputField";
import Button from "./components/button/Button";
import Select from "./components/select/AccountType";
// import BusinessType from "./components/select/BusinessType";
import BusinessTarget from "./components/select/BusinessTarget";
import { auth } from "../../Service/authentication";
import { ToastContainer, toast } from "react-toastify";
import { userService } from "../../Service/user.Service";
import BusinessType from "./components/select/BusinessType";
const CreateBusiness = () => {
  const [busType, setBusType] = useState([]);

  const [business, setBusiness] = useState({
    name: "",
    phoneNumber: "",
    emailAddress: "",
    reqNumber: "",
    state: "",
    lga: "",
    street: "",
    password: "",
    accountType: "",
    businessType: "",
    businessTarget: "",
  });
  useEffect(() => {
    getAllBusinessType();
  }, []);
  let getAllBusinessType = () => {
    userService.getAllBusinessType(15).then((result) => {
      // alert(JSON.stringify(result.data.data));
      setBusType(result.data.data);
    });
  };
  const createBusiness = (e) => {
    e.preventDefault();
    auth
      .registerUser(business)
      .then((result) => {
        if (result.data.success) {
          toast.success(result.data.message);
          setTimeout(() => {
            // window.location = "/verify";
          }, 500);
        } else {
          alert(result.data.message);
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
            <div className="col-lg-12 my-5">
              <div className="card border-primary rounded">
                <div className="card-body">
                  <h4 className="text-center text-dark">Create Business</h4>
                  <form method="post" onClick={createBusiness} action="">
                    <div className="container-fluid">
                      <div className="row">
                        <div class="col-md-4">
                          <InputField
                            type="text"
                            value={business.name}
                            placeholder="Name"
                            label="Name"
                            name="name"
                            onChange={(e) =>
                              setBusiness({ ...business, name: e.target.value })
                            }
                            required
                          />
                        </div>
                        <div class="col-md-4">
                          <InputField
                            type="email"
                            value={business.emailAddress}
                            placeholder="email"
                            label="Email"
                            name="email"
                            onChange={(e) =>
                              setBusiness({
                                ...business,
                                emailAddress: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                        <div class="col-md-4">
                          <InputField
                            type="text"
                            value={business.phoneNumber}
                            placeholder="Phone"
                            label="Phone"
                            name="phone"
                            onChange={(e) =>
                              setBusiness({
                                ...business,
                                phoneNumber: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                        <div class="col-md-4">
                          <InputField
                            type="text"
                            value={business.reqNumber}
                            placeholder="Registration No"
                            label="reqNo"
                            name="reqNo"
                            onChange={(e) =>
                              setBusiness({
                                ...business,
                                reqNumber: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                        <div class="col-md-4">
                          <Select
                            value={business.accountType}
                            label="Account Type"
                            name="AccountType"
                            onChange={(e) =>
                              setBusiness({
                                ...business,
                                accountType: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="col-md-4 form-group">
                          <label htmlFor="input-field">Business Type</label>
                          <BusinessType
                            value={business.businessType}
                            name="bisnessType"
                            onChange={(e) =>
                              setBusiness({
                                ...business,
                                businessType: e.target.value,
                              })
                            }
                          >
                            <option value={""} selected>
                              -- Choose Type --
                            </option>
                            {busType.map((bus) => {
                              return (
                                <option value={bus._id}>{bus.title}</option>
                              );
                            })}
                          </BusinessType>
                        </div>
                        <div class="col-md-4">
                          <BusinessTarget
                            value={business.businessTarget}
                            label="Business Target"
                            name="businessTarget"
                            onChange={(e) =>
                              setBusiness({
                                ...business,
                                businessTarget: e.target.value,
                              })
                            }
                          />
                        </div>

                        <div class="col-md-4">
                          <InputField
                            type="text"
                            value={business.state}
                            placeholder="state"
                            label="state"
                            name="state"
                            onChange={(e) =>
                              setBusiness({
                                ...business,
                                state: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div class="col-md-4">
                          <InputField
                            type="text"
                            value={business.lga}
                            placeholder="Local Govt"
                            label="lga"
                            name="lga"
                            onChange={(e) =>
                              setBusiness({ ...business, lga: e.target.value })
                            }
                          />
                        </div>
                        <div class="col-md-4">
                          <InputField
                            type="text"
                            value={business.street}
                            placeholder="street"
                            label="street"
                            name="street"
                            onChange={(e) =>
                              setBusiness({
                                ...business,
                                street: e.target.value,
                              })
                            }
                          />
                        </div>

                        <div class="col-md-4">
                          <InputField
                            type="password"
                            value={business.password}
                            placeholder="password"
                            label="password"
                            name="password"
                            onChange={(e) =>
                              setBusiness({
                                ...business,
                                password: e.target.value,
                              })
                            }
                          />
                        </div>
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

export default CreateBusiness;
