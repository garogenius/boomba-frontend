import React, { useState } from "react";
import OtherPageBody from "./OtherPageBody";
import Button from "./components/button/Button";
import InputField from "./components/inputs/InputField";
import TextArea from "./components/inputs/TextArea";
const ChangeOwnership = () => {
  const [inputValue, setInputValue] = useState({
    currentOwner: "",
    newOwner: "",
    description: "",
  });

  const { currentOwner, newOwner, description } = inputValue;

  const handleChange = (e) => {
    const { name, value } = e.target;
    // alert(value);
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div>
      {" "}
      <OtherPageBody>
        <div className="page-inner">
          <div className="page-header">
            <h4 className="page-title">Change Ownership</h4>
            <ul className="breadcrumbs">
              <li className="nav-home">
                <a href="/">
                  <i className="flaticon-box-3"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col-xl-4"></div>
            <div className="col-xl-4">
              <div className="card rounded">
                <div className="card-header">
                  <h4 className="text-center">Change Ownership</h4>
                  <div className="card-body">
                    <form action="">
                      <div className="row">
                        <div className="">
                          <InputField
                            type="text"
                            value={currentOwner}
                            label="current Owner ID"
                            name="currentOwner"
                            onchange={handleChange}
                            required
                          />
                        </div>
                        <div className="">
                          <InputField
                            type="text"
                            value={newOwner}
                            label="new Owner ID"
                            name="newOwner"
                            onchange={handleChange}
                            required
                          />
                        </div>

                        <div className="">
                          <TextArea
                            value={description}
                            placeholder="description"
                            label="description"
                            name="description"
                            onchange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <Button
                        value="Save"
                        type="error"
                        // onClick={() => alert("Hello")}
                        contain={true}
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4"></div>
          </div>
        </div>
      </OtherPageBody>
    </div>
  );
};

export default ChangeOwnership;
