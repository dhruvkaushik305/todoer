import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import eyeIcon from "../../assets/hidden.png";
import { useNavigate } from "react-router-dom";
type Inputs = {
  name: string;
  username: string;
  email: string;
  password: string;
};
let timeout: NodeJS.Timeout | undefined = undefined;
const SignupLayout: React.FC = () => {
  const [exists, setExists] = React.useState(false);
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    //TODO: Put the backend url in env
    if (exists) return;
    const res = await fetch("http://localhost:3000/api/v1/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response = await res.json();
    console.log(response);
    if (response.success) {
      navigate("/dashboard");
    }
  };
  const checkUsername = async (username: string) => {
    clearTimeout(timeout);
    if (username === "") return;
    timeout = setTimeout(async () => {
      const encodedUsername = encodeURIComponent(username);
      const res = await fetch(
        `http://localhost:3000/api/v1/auth/checkUsername/${encodedUsername}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      if (data.exists) {
        setExists(true);
      } else {
        setExists(false);
      }
    }, 1000);
  };
  return (
    <div className="bg-thistle p-5 rounded-lg md:w-2/4">
      <h1 className="text-2xl text-center m-3">Signup</h1>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col w-full">
          <label htmlFor="name" className="text-lg">
            Name
          </label>
          <input
            type="text"
            placeholder="Name"
            id="name"
            {...register("name", { required: true })}
            className="focus:outline-none p-2 rounded-md"
          />
          {errors.name && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="username" className="text-lg">
            Username
          </label>
          <input
            type="text"
            placeholder="Username"
            id="username"
            {...register("username", { required: true })}
            onChange={async (e) => {
              await checkUsername(e.target.value);
            }}
            className="focus:outline-none p-2 rounded-md"
          />
          {exists && <span>This username is already taken</span>}
          {errors.username && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="email" className="text-lg">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            {...register("email", { required: true })}
            className="focus:outline-none p-2 rounded-md"
          />
          {errors.email && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-lg">
            Password
          </label>
          <div className="flex justify-between gap-1">
            <input
              type="password"
              placeholder="Password"
              id="password"
              {...register("password", { required: true })}
              className="focus:outline-none p-2 rounded-md grow"
            />
            <button
              className="focus:outline-none"
              onClick={() => {
                const password = document.getElementById(
                  "password"
                ) as HTMLInputElement;
                if (password.type === "password") {
                  password.type = "text";
                } else {
                  password.type = "password";
                }
              }}
            >
              <img src={eyeIcon} alt="hidden" />
            </button>
          </div>

          {errors.password && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <button
          type="submit"
          className="px-3 py-2 bg-raisinBlack text-white rounded-md mt-5"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignupLayout;
