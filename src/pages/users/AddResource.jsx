import React, { useState, useEffect } from "react";
import { userService } from "../../Service/user.service";
import OtherPageBody from "../users/OtherPageBody";
import Button from "./components/button/Button";
import FileInput from "./components/inputs/FileInput";
import InputField from "./components/inputs/InputField";
import TextArea from "./components/inputs/TextArea";
import Select from "./components/select/Select";
import { messages } from "../../utils/constants/messages";
const AddResource = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const [input, setInput] = useState({
    name: "",
    model: "",
    color: "",
    description: "",
    identityNumber: "",
    catton: "",
    serialNumber: "",
    catPicture: "",
    type: "",
    picture: "",
  });
  const [resType, setResType] = useState([]);
  const {
    name,
    model,
    color,
    description,
    identityNumber,
    catton,
    serialNumber,
    catPicture,
    type,
    picture,
  } = input;

  const handleChange = (e) => {
    const { name, value } = e.target;
    // alert(value);
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  useEffect(() => {
    getAllResourceType();
  }, []);
  let getAllResourceType = () => {
    userService.getAllResourceType(15).then((result) => {
      // alert(JSON.stringify(result.data.data));
      setResType(result.data.data);
    });
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
                          value={identityNumber}
                          placeholder="identityNumber"
                          label="identityNumber"
                          name="identityNumber"
                          onchange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-xl-4">
                        <Select
                          value={type}
                          label="Resource Type"
                          name="type"
                          onchange={handleChange}
                        >
                          <option value="" selected>
                            -- Type --
                          </option>
                          {resType.map((res) => {
                            return <option value={res._id}>{res.title}</option>;
                          })}
                        </Select>
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
                      <div className="col-xl-4 ">
                        <Select
                          value={catton}
                          label="Account Type"
                          name="AccountType"
                          onchange={handleChange}
                        >
                          <option value="" selected>
                            -- Catton --
                          </option>
                          <option value="Yes" selected>
                            Yes
                          </option>
                          <option value="NO" selected>
                            NO
                          </option>
                        </Select>
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
                      <div className="col-xl-6">
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
                    <div className="row">
                      <div className="col-md-4"></div>

                      <div className="col-md-4">
                        <Button
                          type="error"
                          value={
                            isProcessing ? messages.processingMessage : "Save"
                          }
                          name="button"
                          // onClick={() => (!isProcessing ? add() : null)}
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