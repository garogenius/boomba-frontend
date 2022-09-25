import React, { useState, useEffect } from "react";
import InputField from "./components/inputs/InputField";
import Button from "./components/button/Button";
import BusinessTarget from "./components/select/BusinessTarget";
import { auth } from "../../Service/auth.service";
import { ToastContainer, toast } from "react-toastify";
import { userService } from "../../Service/user.service";
import BusinessType from "./components/select/BusinessType";
import AccountType from "./components/select/AccountType";
import { messages } from "../../utils/constants/messages";
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
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    getAllBusinessType();
  }, []);
  let getAllBusinessType = () => {
    userService.getAllBusinessType(15).then((result) => {
      // alert(JSON.stringify(result.data.data));
      setBusType(result.data.data);
    });
  };
  const createBusiness = () => {
    const request = {
      name: business.name,
      phoneNumber: business.phoneNumber,
      emailAddress: business.emailAddress,
      reqNumber: business.reqNumber,
      state: business.state,
      lga: business.lga,
      street: business.street,
      password: business.password,
      accountType: business.accountType,
      businessType: business.businessType,
      businessTarget: business.businessTarget,
    };
    auth.registerUser(request).then((result) => {
      setIsProcessing(false);
      if (result.data.success) {
        toast.success(result.data.message);
        setTimeout(() => {
          // window.location = "/verify";
        }, 500);
      } else {
        alert(result.data.message);
        toast.error(result.data.message);
      }
    });
    // .catch((e) => {
    //   toast.error(e.message);
    // });
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
                  <form method="post">
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
                          <AccountType
                            value={business.accountType}
                            label="Account Type"
                            name="AccountType"
                            onChange={(e) =>
                              setBusiness({
                                ...business,
                                accountType: e.target.value,
                              })
                            }
                          >
                            <option value={""} selected>
                              -- Choose Type --
                            </option>
                            <option value="INDIVIDUAL" selected>
                              INDIVIDUAL
                            </option>
                            <option value="BUSINESS" selected>
                              BUSINESS
                            </option>
                          </AccountType>
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
                          >
                            <option value="" selected>
                              -- Choose Target --
                            </option>
                            <option value="" selected>
                              PRODUCT
                            </option>
                            <option value="" selected>
                              SERVICES
                            </option>
                          </BusinessTarget>
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
                          type="error"
                          value={
                            isProcessing
                              ? messages.processingMessage
                              : "Create Account"
                          }
                          name="button"
                          onClick={() =>
                            !isProcessing ? createBusiness() : null
                          }
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
