import React from "react";

const Login = () => {
  return (
    <div>
      <div className="wrapper bg-secondary">
        <div className="container">
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
              <div
                className="card border-primary rounded"
                style={{ marginTop: "150px" }}
              >
                <div className="card-body">
                  <h4 className="text-center text-dark">Login</h4>
                  <form method="" action="">
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
                        Email
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
                        Password
                      </label>
                    </div>
                    <div className="button">
                      <button className="btn btn-primary w-100 rounded">
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
