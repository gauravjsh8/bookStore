import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:3000/api/users/create", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Registered successfully");
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
      })
      .catch((error) => {
        toast.error(error.response?.data?.message);
      });
  };
  return (
    <div>
      <div
        className="modal fade"
        id="signUpModal"
        tabIndex="-1"
        aria-labelledby="signUpModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered"
          style={{ maxWidth: "400px" }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="modal-content" style={{ width: "80%" }}>
              <div className="modal-header bg-dark text-white">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Sign Up
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
                  placeholder="Name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-danger" style={{ fontSize: "10px" }}>
                    This field is required
                  </span>
                )}
                <input
                  type="email"
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
              <div className="modal-footer d-flex align-items-center justify-content-between">
                <div>
                  <p className="mt-1">
                    Already Registered? {""}
                    <span>
                      <a
                        href="#"
                        className="text-decoration-none"
                        data-bs-toggle="modal"
                        data-bs-target="#loginModal"
                        data-bs-dismiss="modal"
                      >
                        Log in Here
                      </a>
                    </span>
                  </p>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary p-1"
                  style={{ width: "100%" }}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
