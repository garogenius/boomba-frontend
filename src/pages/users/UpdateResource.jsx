import React, { useState, useEffect } from "react";
import OtherPageBody from "./OtherPageBody";
import Button from "./components/button/Button";
import InputField from "./components/inputs/InputField";
import TextArea from "./components/inputs/TextArea";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { messages } from "../../utils/constants/messages";
import { resourceService } from "../../service/resource.service";
import { useParams } from "react-router-dom";
const UpdateResource = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");
  let { id } = useParams();
  useEffect(() => {
    resourceService.getResourceById(id).then((result) => {
      if (result.data.success) {
        // alert(JSON.stringify(result.data.user));
        setName(result.data.data.name);
        setColor(result.data.user.color);
        setModel(result.data.user.model);
        setDescription(result.data.user.description);
      } else {
        toast.error(result.data.message);
      }
    });
  }, [id]);
  const update = () => {
    const request = {
      name: name,
      model: model,
      color: color,
      description: description,
    };

    setIsProcessing(true);
    resourceService
      .updateResource(id, request)
      .then((result) => {
        setIsProcessing(false);
        if (result.data.success) {
          localStorage.setItem("userToken", result.data.data.access_token);
          localStorage.setItem("user", JSON.stringify(result.data.data.info));
          toast.success(result.data.message);
          setTimeout(() => {
            window.location = "/dashboard";
          }, 500);
        } else {
          // setIsProcessing(false);
          toast.error(messages.invalidDetails);
        }
      })
      .catch((e) => {
        console.log(messages.invalidDetails);
        setIsProcessing(false);
      });
  };
  return (
    <div>
      <OtherPageBody>
        <div className="page-inner">
          <div className="page-header">
            <ToastContainer />
            <h4 className="page-title">Update Resource</h4>
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
                  <h4 className="text-center">Update Resource Info</h4>
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
                            onChange={(e) => setName(e.target.value)}
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
                            onChange={(e) => setModel(e.target.value)}
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
                            onChange={(e) => setColor(e.target.value)}
                            required
                          />
                        </div>
                        <div className="">
                          <TextArea
                            value={description}
                            placeholder="description"
                            label="description"
                            name="description"
                            onChange={(e) => setDescription(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <Button
                        value={
                          isProcessing ? messages.processingMessage : "Update"
                        }
                        type="button"
                        name="button"
                        onClick={() => (!isProcessing ? update() : null)}
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
