import React from "react";
import { Link } from "react-router-dom";
import OtherPageBody from "./OtherPageBody";
const AllResources = () => {
  return (
    <OtherPageBody>
      <div className="page-inner">
        <div className="page-header">
          <h4 className="page-title">All resources</h4>
          <ul className="breadcrumbs">
            <li className="nav-home">
              <a href="/">
                <i className="flaticon-store"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <div className="d-flex align-items-center">
                  <h4 className="card-title">All Resources</h4>
                  <button className="btn btn-primary btn-round ml-auto">
                    <i className="fa fa-plus"></i>
                    <Link
                      className="btn btn-primary btn-round ml-auto"
                      to="/add-resource"
                    >
                      Add Resource
                    </Link>
                  </button>
                </div>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table
                    id="add-row"
                    className="display table table-striped table-hover"
                  >
                    <thead>
                      <tr>
                        <th>S/n</th>
                        <th>Name</th>
                        <th>Identity Number</th>
                        <th>Type</th>
                        <th>Date Added</th>
                        <th>View Details</th>
                        <th style={{ width: "10%" }}>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Infinix</td>
                        <td>Im23456789</td>
                        <td>Phone</td>
                        <td>9/09/2022</td>
                        <td>
                          <Link to="/view-resource">
                            <button
                              type="button"
                              data-toggle="tooltip"
                              title=""
                              className="btn btn-link btn-primary btn-lg"
                              data-original-title="Edit Task"
                            >
                              <i className="fa fa-eye mx-4"></i>
                            </button>
                          </Link>
                          {/* <div className="form-button-action"></div> */}
                        </td>

                        <td>
                          <div className="form-button-action">
                            <Link to="/update-resource">
                              <button
                                type="button"
                                data-toggle="tooltip"
                                title=""
                                className="btn btn-link btn-primary btn-lg"
                                data-original-title="Edit Task"
                              >
                                <i className="fa fa-edit"></i>
                              </button>
                            </Link>
                            <button
                              type="button"
                              data-toggle="tooltip"
                              title=""
                              className="btn btn-link btn-danger"
                              data-original-title="Remove"
                            >
                              <i className="fa fa-times"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </OtherPageBody>
  );
};

export default AllResources;
