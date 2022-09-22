import React from "react";
import OtherPageBody from "../users/OtherPageBody";

const AddStaff = () => {
  return (
    <OtherPageBody>
      <div className="page-inner">
        <div className="page-header">
          <h4 className="page-title">Add Product</h4>
          <ul className="breadcrumbs">
            <li className="nav-home">
              <a href="/">
                <i className="flaticon-add-user"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-xl-4"></div>
          <div className="col-xl-4">
            <div className="card rounded">
              <div className="card-header">
                <h4 className="text-center">Create Staff</h4>
                <div className="card-body">
                  <form action="">
                    <div className="form-group form-floating-label">
                      <input
                        id="inputFloatingLabel"
                        type="text"
                        className="form-control input-border-bottom"
                        required
                      />
                      <label
                        for="inputFloatingLabel"
                        className="placeholder px-2"
                      >
                        Name
                      </label>
                    </div>
                    <div className="form-group form-floating-label">
                      <input
                        id="inputFloatingLabel"
                        type="text"
                        className="form-control input-border-bottom"
                        required
                      />
                      <label
                        for="inputFloatingLabel"
                        className="placeholder px-2"
                      >
                        Role
                      </label>
                    </div>
                    <div className="form-group form-floating-label">
                      <input
                        id="inputFloatingLabel"
                        type="text"
                        className="form-control input-border-bottom"
                        required
                      />
                      <label
                        for="inputFloatingLabel"
                        className="placeholder px-2"
                      >
                        Branch Posted
                      </label>
                    </div>

                    <div className="form-group form-floating-label">
                      <input
                        id="inputFloatingLabel"
                        type="date"
                        className="form-control input-border-bottom"
                        required
                      />
                      <label
                        for="inputFloatingLabel"
                        className="placeholder px-2"
                      ></label>
                    </div>
                    <div className="button">
                      <button className="btn btn-primary w-100">Create</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4"></div>
        </div>
      </div>
    </OtherPageBody>
  );
};

export default AddStaff;
