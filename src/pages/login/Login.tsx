const Login = () => {
  return (
    <div
      className="container-fluid vh-100 d-flex justify-content-center align-items-center m-0"
      style={{ backgroundColor: "#0f172a" }} // dark background
    >
      <div className="row w-100">
        <div className="col-md-4 mx-auto">
          <div
            className="card border-0 rounded-4 shadow-lg"
            style={{ backgroundColor: "#020617", color: "#e2e8f0" }}
          >
            <div className="card-body p-4">

              <h3 className="text-center mb-4 fw-bold text-success">
                Login
              </h3>

              <form>
                {/* Email */}
                <div className="mb-3">
                  <label className="form-label text-light">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control rounded-3"
                    placeholder="Enter your email"
                    style={{
                      backgroundColor: "#0f172a",
                      border: "1px solid #14532d",
                      color: "#e2e8f0",
                    }}
                  />
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label className="form-label text-light">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control rounded-3"
                    placeholder="Enter your password"
                    style={{
                      backgroundColor: "#0f172a",
                      border: "1px solid #14532d",
                      color: "#e2e8f0",
                    }}
                  />
                </div>

                {/* Remember + Forgot */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="remember"
                    />
                    <label className="form-check-label text-light" htmlFor="remember">
                      Remember me
                    </label>
                  </div>

                  <a href="#" className="text-success text-decoration-none">
                    Forgot password?
                  </a>
                </div>

                {/* Button */}
                <div className="d-grid">
                  <button
                    type="button"
                    className="btn rounded-3 fw-semibold"
                    style={{
                      backgroundColor: "#14532d",
                      color: "#fff",
                    }}
                  >
                    Login
                  </button>
                </div>
              </form>

              {/* Footer */}
              <p className="text-center mt-3 mb-0 text-light">
                Don't have an account?{" "}
                <a href="#" className="text-success fw-semibold text-decoration-none">
                  Sign up
                </a>
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;