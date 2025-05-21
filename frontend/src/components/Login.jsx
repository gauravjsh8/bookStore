import axios from "axios";
import Signup from "./Signup";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

const Login = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log("Authuser", authUser);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:3000/api/users/login", userInfo)
      .then((res) => {
        console.log(res);
        if (res.data) {
          toast.success("Logged in successfully");
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
        localStorage.setItem("Users", JSON.stringify(res.data.Users));
      })
      .catch((error) => {
        toast.error(error.response?.data?.message);
      });
  };

  return (
    <>
      <div>
        <div
          className="modal fade"
          id="loginModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered"
            style={{ maxWidth: "400px", margin: "auto" }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              {" "}
              <div className="modal-content" style={{ width: "80%" }}>
                <div className="modal-header bg-dark text-white">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Login
                  </h1>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-danger" style={{ fontSize: "10px" }}>
                      This field is required
                    </span>
                  )}

                  <input
                    type="password"
                    className="form-control mb-2"
                    placeholder="Password"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <span className="text-danger" style={{ fontSize: "10px" }}>
                      This field is required
                    </span>
                  )}
                </div>
                <div className="modal-footer d-flex-column align-items-center justify-content-between">
                  <div>
                    <p className="mt-1">
                      Not Registered? {""}
                      <span>
                        <a
                          href="#"
                          className="text-decoration-none"
                          data-bs-toggle="modal"
                          data-bs-target="#signUpModal"
                          data-bs-dismiss="modal"
                        >
                          Signup Here
                        </a>
                      </span>
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary p-1"
                    style={{
                      width: "100%",
                      backgroundColor: "green",
                    }}
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Signup />
    </>
  );
};

export default Login;
