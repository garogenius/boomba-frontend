import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./components/button/Button";
import InputField from "./components/inputs/InputField";
import BusinessType from "./components/select/BusinessType";
import BusinessTarget from "./components/select/BusinessTarget";
import AccountType from "./components/select/AccountType";
import { auth } from "../../service/auth.service";
import { resourceService } from "../../service/resource.service";
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
    if (input.phoneNumber.length < 11) toast.error(messages.phoneLengthMessage);
    if (input.nin.length < 11) toast.error(messages.ninLengthMessage);
    if (input.password.length < 6) toast.error(messages.passwordLengthMessage);
    if (input.confirmPassword !== input.password)
      toast.error(messages.passwordMisMatch);
    if (
      input.phoneNumber.length >= 11 &&
      input.nin.length >= 11 &&
      input.password.length >= 6
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
              window.location = "/verify-account";
            }, 500);
          } else {
            toast.error(result.data.message);
          }
        })
        .catch((e) => {
          toast.error(messages.invalidDetails);
        });
    } else {
      toast.error(messages.invalidDetails);
    }
  };
  const [tab, setTab] = useState(1);
  const changeTab = (t) => {
    setTab(t);
    // alert(t);
  };
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
    resourceService.getAllBusinessType(15).then((result) => {
      // alert(JSON.stringify(result.data.data));
      setBusType(result.data.data);
    });
  };
  const createBusiness = () => {
    if (business.phoneNumber.length < 11)
      toast.error(messages.phoneLengthMessage);
    if (business.reqNumber.length < 11)
      toast.error(messages.reqNoLengthMessage);
    if (business.password.length < 6)
      toast.error(messages.passwordLengthMessage);
    if (business.confirmPassword !== business.password)
      toast.error(messages.passwordMisMatch);
    if (
      business.phoneNumber.length >= 11 &&
      business.reqNumber.length >= 11 &&
      business.password.length >= 6
    ) {
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
      setIsProcessing(true);
      auth
        .registerUser(request)
        .then((result) => {
          setIsProcessing(false);
          if (result.data.success) {
            toast.success(result.data.message);
            setTimeout(() => {
              window.location = "/verify-account";
            }, 500);
          } else {
            toast.error(result.data.message);
          }
        })
        .catch((e) => {
          toast.error(messages.invalidDetails);
        });
    } else {
      toast.error(messages.invalidDetails);
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
                  <div className="row">
                    <div className="d-flex flex-row">
                      <button
                        onClick={(e) => changeTab(1)}
                        value={"Individual Account"}
                        className="btn btn-primary w-100 px-2 py-2 mx-2 text-sm rounded"
                      >
                        Individual Account
                      </button>
                      <button
                        onClick={(e) => changeTab(2)}
                        value={"Business Account"}
                        className="btn btn-primary w-100 px-2 py-2 mx-2 text-sm rounded"
                      >
                        Business Account
                      </button>
                    </div>
                  </div>
                  {tab == 1 ? (
                    <div className="tab-first">
                      <h4 className="text-center text-dark">Create Account</h4>
                      <div className="row">
                        <div class="col-md-4">
                          <InputField
                            type="text"
                            value={input.name}
                            placeholder="Name"
                            label="Name"
                            option="**"
                            name="name"
                            onChange={(e) =>
                              setInput({
                                ...input,
                                name: e.target.value,
                              })
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
                            option="**"
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
                            option="**"
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
                            option="**"
                            name="nin-no"
                            onChange={(e) =>
                              setInput({
                                ...input,
                                nin: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                        <div class="col-md-4">
                          <AccountType
                            value={input.accountType}
                            label="Account Type"
                            option="**"
                            name="AccountType"
                            onChange={(e) =>
                              setInput({
                                ...input,
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
                          </AccountType>
                        </div>
                        <div class="col-md-4">
                          <InputField
                            type="text"
                            value={input.state}
                            placeholder="state"
                            label="state"
                            option="*Optional"
                            name="state"
                            onChange={(e) =>
                              setInput({
                                ...input,
                                state: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div class="col-md-4">
                          <InputField
                            type="text"
                            value={input.lga}
                            placeholder="Local Govt"
                            label="lga"
                            option="*Optional"
                            name="lga"
                            onChange={(e) =>
                              setInput({
                                ...input,
                                lga: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div class="col-md-4">
                          <InputField
                            type="text"
                            value={input.street}
                            placeholder="street"
                            label="street"
                            option="*Optional"
                            name="street"
                            onChange={(e) =>
                              setInput({
                                ...input,
                                street: e.target.value,
                              })
                            }
                          />
                        </div>

                        <div class="col-md-4">
                          <InputField
                            type="password"
                            value={input.password}
                            placeholder="password"
                            label="password"
                            option="*"
                            name="password"
                            onChange={(e) =>
                              setInput({
                                ...input,
                                password: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div class="col-md-4">
                          <InputField
                            type="password"
                            value={input.confirmPassword}
                            placeholder="password"
                            label="Confirm Password"
                            option="*"
                            name="password"
                            onChange={(e) =>
                              setInput({
                                ...input,
                                confirmPassword: e.target.value,
                              })
                            }
                          />
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
                            type="button"
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
                    </div>
                  ) : (
                    <div className="tab-first">
                      <h4 className="text-center text-dark">Create Business</h4>
                      <div className="row">
                        <div class="col-md-4">
                          <InputField
                            type="text"
                            value={business.name}
                            placeholder="Name"
                            label="Name"
                            option="*"
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
                            option="*"
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
                            option="*"
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
                            option="*"
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
                            option="*"
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
                            <option value="BUSINESS" selected>
                              BUSINESS
                            </option>
                          </AccountType>
                        </div>
                        <div className="col-md-4 form-group">
                          <BusinessType
                            value={business.businessType}
                            name="bisnessType"
                            option="*"
                            label="Business Type"
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
                            option="*"
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
                            option="*Optional"
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
                            option="*Optional"
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
                            option="*Optional"
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
                            option="*"
                            name="password"
                            onChange={(e) =>
                              setBusiness({
                                ...business,
                                password: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div class="col-md-4">
                          <InputField
                            type="password"
                            value={business.confirmPassword}
                            placeholder="password"
                            label="Confirm Password"
                            option="*"
                            name="password"
                            onChange={(e) =>
                              setBusiness({
                                ...business,
                                confirmPassword: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4"></div>

                        <div className="col-md-4">
                          <Button
                            type="button"
                            value={
                              isProcessing
                                ? messages.processingMessage
                                : "Create Account"
                            }
                            name="buton"
                            onClick={() =>
                              !isProcessing ? createBusiness() : null
                            }
                            contain={true}
                          />
                        </div>
                        <div className="col-md-4"></div>
                      </div>
                    </div>
                  )}
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
