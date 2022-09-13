import React from "react";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const Store = () => {
  return (
    <div>
      <div className="wrapper">
        <Navbar />
        <Sidebar />
        <div className="main-panel">
          <div className="content">
            <div className="page-inner">
              <div className="page-header">
                <h4 className="page-title">Store</h4>
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
                        <h4 className="card-title">Products in store</h4>
                        <button className="btn btn-primary btn-round ml-auto">
                          <i className="fa fa-plus"></i>
                          <Link
                            className="btn btn-primary btn-round ml-auto"
                            to="/add-product"
                          >
                            Add Product
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
                              <th>Product Name</th>
                              <th>Product Category</th>
                              <th>Product Quantity</th>
                              <th>Purchase Price</th>
                              <th>Selling Price</th>
                              <th>Supplier Name</th>
                              <th>Date Added</th>
                              <th style={{ width: "10%" }}>Action</th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Hulhude Rice</td>
                              <td>Bags stuff</td>
                              <td>7800</td>
                              <td>27,500</td>
                              <td>29,000</td>
                              <td>Alh Adamu Abdullahi</td>
                              <td>9/09/2022</td>
                              <td>
                                <div className="form-button-action">
                                  <button
                                    type="button"
                                    data-toggle="tooltip"
                                    title=""
                                    className="btn btn-link btn-primary btn-lg"
                                    data-original-title="Edit Task"
                                  >
                                    <i className="fa fa-edit"></i>
                                  </button>
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
                            <tr>
                              <td>1</td>
                              <td>Hulhude Rice</td>
                              <td>Bags stuff</td>
                              <td>7800</td>
                              <td>27,500</td>
                              <td>29,000</td>
                              <td>Alh Adamu Abdullahi</td>
                              <td>9/09/2022</td>
                              <td>
                                <div className="form-button-action">
                                  <button
                                    type="button"
                                    data-toggle="tooltip"
                                    title=""
                                    className="btn btn-link btn-primary btn-lg"
                                    data-original-title="Edit Task"
                                  >
                                    <i className="fa fa-edit"></i>
                                  </button>
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
                            <tr>
                              <td>1</td>
                              <td>Hulhude Rice</td>
                              <td>Bags stuff</td>
                              <td>7800</td>
                              <td>27,500</td>
                              <td>29,000</td>
                              <td>Alh Adamu Abdullahi</td>
                              <td>9/09/2022</td>
                              <td>
                                <div className="form-button-action">
                                  <button
                                    type="button"
                                    data-toggle="tooltip"
                                    title=""
                                    className="btn btn-link btn-primary btn-lg"
                                    data-original-title="Edit Task"
                                  >
                                    <i className="fa fa-edit"></i>
                                  </button>
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
                            <tr>
                              <td>1</td>
                              <td>Hulhude Rice</td>
                              <td>Bags stuff</td>
                              <td>7800</td>
                              <td>27,500</td>
                              <td>29,000</td>
                              <td>Alh Adamu Abdullahi</td>
                              <td>9/09/2022</td>
                              <td>
                                <div className="form-button-action">
                                  <button
                                    type="button"
                                    data-toggle="tooltip"
                                    title=""
                                    className="btn btn-link btn-primary btn-lg"
                                    data-original-title="Edit Task"
                                  >
                                    <i className="fa fa-edit"></i>
                                  </button>
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
                            <tr>
                              <td>1</td>
                              <td>Hulhude Rice</td>
                              <td>Bags stuff</td>
                              <td>7800</td>
                              <td>27,500</td>
                              <td>29,000</td>
                              <td>Alh Adamu Abdullahi</td>
                              <td>9/09/2022</td>
                              <td>
                                <div className="form-button-action">
                                  <button
                                    type="button"
                                    data-toggle="tooltip"
                                    title=""
                                    className="btn btn-link btn-primary btn-lg"
                                    data-original-title="Edit Task"
                                  >
                                    <i className="fa fa-edit"></i>
                                  </button>
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
                            <tr>
                              <td>1</td>
                              <td>Hulhude Rice</td>
                              <td>Bags stuff</td>
                              <td>7800</td>
                              <td>27,500</td>
                              <td>29,000</td>
                              <td>Alh Adamu Abdullahi</td>
                              <td>9/09/2022</td>
                              <td>
                                <div className="form-button-action">
                                  <button
                                    type="button"
                                    data-toggle="tooltip"
                                    title=""
                                    className="btn btn-link btn-primary btn-lg"
                                    data-original-title="Edit Task"
                                  >
                                    <i className="fa fa-edit"></i>
                                  </button>
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
                            <tr>
                              <td>1</td>
                              <td>Hulhude Rice</td>
                              <td>Bags stuff</td>
                              <td>7800</td>
                              <td>27,500</td>
                              <td>29,000</td>
                              <td>Alh Adamu Abdullahi</td>
                              <td>9/09/2022</td>
                              <td>
                                <div className="form-button-action">
                                  <button
                                    type="button"
                                    data-toggle="tooltip"
                                    title=""
                                    className="btn btn-link btn-primary btn-lg"
                                    data-original-title="Edit Task"
                                  >
                                    <i className="fa fa-edit"></i>
                                  </button>
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
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
