import { useForm } from "react-hook-form";
import Container from "../../component/Container";
import PrimaryBtn from "../../component/PrimaryBtn";
import { useState } from "react";
import FormFieldRequiredErrorMsg from "../../component/FormFieldRequiredErrorMsg";
import { Link } from "react-router-dom";

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <div className="grid grid-cols-2 h-full my-12">
        <div className="h-auto flex items-center">
          <img
            src="https://i.ibb.co/cDp0FCg/2942004.jpg"
            alt=""
            className="w-3/4 mx-auto"
          />
        </div>
        <div className="m-12 p-12 bg-my-secondary bg-opacity-20 backdrop-blur rounded-xl">
          <h2 className="text-3xl text-center font-bold text-my-primary">
            Please Login
          </h2>
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="card-body w-full">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email*</span>
              </label>
              <input
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                })}
                placeholder="Email"
                className="input input-bordered"
                autoComplete="off"
              />
              {errors.email?.type === "required" && (
                <FormFieldRequiredErrorMsg />
              )}
              {errors.email?.type === "pattern" && (
                <span className="text-sm text-red-500 font-medium">
                  Please Enter a valid email
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password*</span>
              </label>
              <input
                type={isVisible ? "text" : "password"}
                {...register("password", { required: true })}
                placeholder="Password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control flex-row">
              <input
                type="checkbox"
                id="isVisible"
                onChange={() => setIsVisible(!isVisible)}
              />
              <label className="label" htmlFor="isVisible">
                Show Password
              </label>
            </div>
            <div className="form-control">
              <PrimaryBtn>Login</PrimaryBtn>
            </div>
          </form>
          <p className="text-center">
            New Here?{" "}
            <Link to="/signup" className="font-bold text-my-primary">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Login;
