import React, { useState, useEffect } from "react";
import { userService } from "../../service/user.service";
import OtherPageBody from "../users/OtherPageBody";
import Button from "./components/button/Button";
import FileInput from "./components/inputs/FileInput";
import InputField from "./components/inputs/InputField";
import TextArea from "./components/inputs/TextArea";
import Select from "./components/select/Select";
import { messages } from "../../utils/constants/messages";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddResource = () => {
  const [userInfo, setUserInfo] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [resType, setResType] = useState([]);
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

  useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem("user")));
    getAllResourceType();
  }, []);
  let getAllResourceType = () => {
    userService.getAllResourceType(15).then((result) => {
      // alert(JSON.stringify(result.data.data));
      setResType(result.data.data);
    });
  };
  const addRes = () => {
    // if (
    //   input.identityNumber !== "" &&
    //   input.model !== "" &&
    //   input.type !== ""
    // ) {
    const request = {
      name: input.name,
      model: input.model,
      color: input.color,
      description: input.description,
      identityNumber: input.identityNumber,
      catton: input.catton,
      serialNumber: input.serialNumber,
      picture: input.picture,
      type: input.type,
      catPicture: input.catPicture,
    };
    setIsProcessing(true);
    userService
      .createResource(request)
      .then((result) => {
        setIsProcessing(false);
        if (result.data.success) {
          toast.success(result.data.message);
          setTimeout(() => {
            window.location = "/all-resource";
          }, 500);
        } else {
          toast.error(result.data.message);
        }
      })
      .catch((e) => {
        setIsProcessing(false);
        toast.error(e.message);
      });
    // } else {
    //   toast.error(messages.invalidDetails);
    // }
  };
  return (
    <>
      <ToastContainer />
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
                  <p>{userInfo.name}</p>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-xl-4">
                        <InputField
                          type="text"
                          value={input.name}
                          placeholder="name"
                          label="name"
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
                      <div className="col-xl-4">
                        <InputField
                          type="text"
                          value={input.model}
                          placeholder="model"
                          label="model"
                          name="model"
                          onChange={(e) =>
                            setInput({
                              ...input,
                              model: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <div className="col-xl-4">
                        <InputField
                          type="text"
                          value={input.color}
                          placeholder="color"
                          label="color"
                          name="color"
                          onChange={(e) =>
                            setInput({
                              ...input,
                              color: e.target.value,
                            })
                          }
                          required
                        />
                      </div>

                      <div className="col-xl-4">
                        <InputField
                          type="text"
                          value={input.identityNumber}
                          placeholder="identityNumber"
                          label="identityNumber"
                          name="identityNumber"
                          onChange={(e) =>
                            setInput({
                              ...input,
                              identityNumber: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <div className="col-xl-4">
                        <Select
                          value={input.type}
                          label="Resource Type"
                          name="type"
                          onChange={(e) =>
                            setInput({
                              ...input,
                              type: e.target.value,
                            })
                          }
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
                          value={input.picture}
                          placeholder="picture"
                          label="picture"
                          name="picture"
                          onChange={(e) =>
                            setInput({
                              ...input,
                              picture: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="col-xl-4 ">
                        <Select
                          value={input.catton}
                          label="Catton Available"
                          name="catton"
                          onChange={(e) =>
                            setInput({
                              ...input,
                              catton: e.target.value,
                            })
                          }
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
                          value={input.serialNumber}
                          placeholder="Catton serial number"
                          label="Catton serial number"
                          name="serialNumber"
                          onChange={(e) =>
                            setInput({
                              ...input,
                              serialNumber: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="col-xl-4">
                        <FileInput
                          type="file"
                          value={input.catPicture}
                          label="catton Picture"
                          name="catPicture"
                          onChange={(e) =>
                            setInput({
                              ...input,
                              catPicture: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="col-xl-6">
                        <TextArea
                          value={input.description}
                          placeholder="description"
                          label="description"
                          name="description"
                          onChange={(e) =>
                            setInput({
                              ...input,
                              description: e.target.value,
                            })
                          }
                        ></TextArea>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4"></div>

                      <div className="col-md-4">
                        <Button
                          type="button"
                          value={
                            isProcessing ? messages.processingMessage : "Save"
                          }
                          name="button"
                          onClick={() => (!isProcessing ? addRes() : null)}
                          contain={true}
                        />
                      </div>
                      <div className="col-md-4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OtherPageBody>
    </>
  );
};

export default AddResource;
