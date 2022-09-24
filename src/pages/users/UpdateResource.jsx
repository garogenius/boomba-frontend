import React, { useState, useEffect } from "react";
import OtherPageBody from "./OtherPageBody";
import Button from "./components/button/Button";
import FileInput from "./components/inputs/FileInput";
import InputField from "./components/inputs/InputField";
import Select from "./components/select/Select";
import TextArea from "./components/inputs/TextArea";
const UpdateResource = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    model: "",
    color: "",
    description: "",
  });

  const { name, model, color, description } = inputValue;

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
      <OtherPageBody>
        <div className="page-inner">
          <div className="page-header">
            <h4 className="page-title">Add Resource</h4>
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
                  <h4 className="text-center">Add Resource</h4>
                  <div className="card-body">
                    <form action="">
                      <div className="row">
                        <div className="">
                          <InputField
                            type="text"
                            value={name}
                            placeholder="name"
                            label="name"
                            name="name"
                            onchange={handleChange}
                            required
                          />
                        </div>
                        <div className="">
                          <InputField
                            type="text"
                            value={model}
                            placeholder="model"
                            label="model"
                            name="model"
                            onchange={handleChange}
                            required
                          />
                        </div>
                        <div className="">
                          <InputField
                            type="text"
                            value={color}
                            placeholder="color"
                            label="color"
                            name="color"
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
                          {/* <InputField
                            type="text"
                            value={description}
                            placeholder="description"
                            label="description"
                            name="description"
                            onchange={handleChange}
                            required
                          /> */}
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

export default UpdateResource;
