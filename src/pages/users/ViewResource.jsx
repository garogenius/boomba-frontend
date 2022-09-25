import React from "react";
import OtherPageBody from "./OtherPageBody";
import bg from "../../assets/img/arashmil.jpg";
const ViewResource = () => {
  return (
    <OtherPageBody>
      <div className="page-inner">
        <div className="page-header">
          <h4 className="page-title">Resource Details</h4>
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
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4">
                    <img src={bg} alt="/No image" style={{ width: "100%" }} />
                  </div>
                  <div className="col-md-8">
                    <div className="text">
                      <p>
                        Title: <span>tecno</span>
                      </p>
                      <p>
                        Model: <span>tecno</span>
                      </p>
                      <p>
                        Identity Number: <span>12345678</span>
                      </p>
                      <p>
                        Description:{" "}
                        <span>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Officia voluptatibus ducimus dignissimos minus
                          pariatur cupiditate tenetur voluptas, quibusdam
                          mollitia provident voluptatem illo molestiae
                          recusandae adipisci unde a ea tempore quos.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </OtherPageBody>
  );
};

export default ViewResource;
