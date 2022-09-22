import React, { useState } from "react";
import OtherPageBody from "../users/OtherPageBody";
import Button from "./components/button/Button";
import FileInput from "./components/inputs/FileInput";
import InputField from "./components/inputs/InputField";
const AddResource = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    model: "",
    color: "",
    description: "",
    identityNumber: "",
    serialNumber: "",
    catPicture: "",
    type: "",
    picture: "",
  });
  const {
    name,
    model,
    color,
    description,
    identityNumber,
    serialNumber,
    catPicture,
    type,
    picture,
  } = inputValue;

  const handleChange = (e) => {
    const { name, value } = e.target;
    // alert(value);
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(inputValue);
  };
  return (
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
          <div className="col-xl-12">
            <div className="card rounded">
              <div className="card-header">
                <h4 className="text-center">Add Resource</h4>
                <div className="card-body">
                  <form action="">
                    <div className="row">
                      <div className="col-xl-4">
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
                      <div className="col-xl-4">
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
                      <div className="col-xl-4">
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
                      <div className="col-xl-4">
                        <InputField
                          type="text"
                          value={description}
                          placeholder="description"
                          label="description"
                          name="description"
                          onchange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-xl-4">
                        <InputField
                          type="text"
                          value={identityNumber}
                          placeholder="identityNumber"
                          label="identityNumber"
                          name="identityNumber"
                          onchange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-xl-4">
                        <InputField
                          type="text"
                          value={type}
                          placeholder="type"
                          label="type"
                          name="type"
                          onchange={handleChange}
                          required
                        />
                      </div>

                      <div className="col-xl-4">
                        <FileInput
                          type="file"
                          value={picture}
                          placeholder="picture"
                          label="picture"
                          name="picture"
                          onchange={handleChange}
                        />
                      </div>

                      <div className="col-xl-4">
                        <InputField
                          type="text"
                          value={serialNumber}
                          placeholder="Catton serial number"
                          label="Catton serial number"
                          name="serialNumber"
                          onchange={handleChange}
                        />
                      </div>
                      <div className="col-xl-4">
                        <FileInput
                          type="file"
                          value={catPicture}
                          label="catton Picture"
                          name="catPicture"
                          onchange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4"></div>

                      <div className="col-md-4">
                        <Button
                          value="Save"
                          type="error"
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
    </OtherPageBody>
  );
};

export default AddResource;
