import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import eyeIcon from "../../assets/hidden.png";
import { useNavigate } from "react-router-dom";
import { SignupInput, SignupSchema } from "@repo/types/Signup"
import { toast } from "sonner";
let timeout: NodeJS.Timeout | undefined = undefined;
const SignupLayout: React.FC = () => {
  const [exists, setExists] = React.useState(false);
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignupInput>({ resolver: zodResolver(SignupSchema) });
  const onSubmit: SubmitHandler<SignupInput> = async (data) => {
    if (exists) return;
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      if (result.success) {
        toast.success("Account created, let's login");
        navigate("/auth/login");
      }
    }
    catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };
  const checkUsername = async (username: string) => {
    clearTimeout(timeout);
    if (username === "") return;
    timeout = setTimeout(async () => {
      const encodedUsername = encodeURIComponent(username);
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND}/auth/checkUsername/${encodedUsername}`,
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
    <div className="p-5 rounded-lg flex gap-5 text-zinc-100 border-2 border-gray-700 h-5/6 items-center w-4/6">
      <div className="font-serif font-extrabold text-8xl w-3/6 flex flex-col justify-center items-start text-left p-3 leading-[7rem] h-full">
        <p className="text-left">Today's <span className="text-blue underline">Tasks,</span></p>
        <p className="text-left">Tomorrow's </p>
        <p className="text-green-600 underline">Success</p>
      </div>
      <div className="p-8 rounded-md w-full">
        <p className="text-4xl text-center mb-[2rem] font-sans">Join today</p>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col w-full">
            <label htmlFor="name" className="text-xl">
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
              id="name"
              {...register("name")}
              className="focus:outline-none p-2 rounded-md text-lg text-black"
            />
            {errors.name && (
              <span className="text-zinc-100 font-bold text-sm">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="username" className="text-xl">
              Username
            </label>
            <input
              type="text"
              placeholder="Username"
              id="username"
              {...register("username")}
              onChange={async (e) => {
                await checkUsername(e.target.value);
              }}
              className="focus:outline-none p-2 rounded-md text-lg text-black"
            />
            {exists && (
              <span className="text-zinc-100 font-bold">
                This username is already taken
              </span>
            )}
            {errors.username && (
              <span className="text-zinc-100 font-bold text-sm">
                {errors.username.message}
              </span>
            )}
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="email" className="text-xl">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              {...register("email")}
              className="focus:outline-none p-2 rounded-md text-lg text-black"
            />
            {errors.email && (
              <span className="text-zinc-100 font-bold text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-xl">
              Password
            </label>
            <div className="flex justify-between gap-1">
              <input
                type="password"
                placeholder="Password"
                id="password"
                {...register("password")}
                className="focus:outline-none p-2 rounded-md text-lg text-black"
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
              <span className="text-zinc-100 font-bold text-sm">
                {errors.password.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="p-3 bg-blue text-white rounded-lg mt-5 text-xl"
          >
            Sign up
          </button>
        </form>
      </div>
    </div >
  );
};

export default SignupLayout;
