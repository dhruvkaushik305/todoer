import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { GrFormViewHide } from "react-icons/gr";
import { GrFormView } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput, SignupSchema } from "@repo/types/Auth";
import { toast } from "sonner";
import { checkUsernameAction, signupAction } from "../actions/authAction";
import { PuffLoader, SyncLoader } from "react-spinners";
let timeout: NodeJS.Timeout | undefined = undefined;
const SignupLayout: React.FC = () => {
  const [exists, setExists] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [usernameLoading, setUsernameLoading] = React.useState(false);
  const [signupLoading, setSignupLoading] = React.useState(false);
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignupInput>({ resolver: zodResolver(SignupSchema) });
  const onSubmit: SubmitHandler<SignupInput> = async (data) => {
    //Don't allow to signup if the username is already taken
    setSignupLoading(true);
    if (exists) return;
    try {
      const response = await signupAction(data);
      setSignupLoading(false);
      if (response.success) {
        toast.success("Account created, let's login");
        navigate("/auth/login");
      }
    } catch (err) {
      toast.error("Server seems to be down", {
        closeButton: true,
      });
    }
  };
  const usernameHandler = async (username: string) => {
    setUsernameLoading(true);
    clearTimeout(timeout);
    if (username === "" || username === undefined) setExists(false);
    timeout = setTimeout(async () => {
      const data = await checkUsernameAction(username);
      setUsernameLoading(false);
      if (data.exists) {
        setExists(true);
      } else {
        setExists(false);
      }
    }, 1000);
  };
  return (
    <div className="flex w-9/12 items-stretch justify-center gap-5 p-4 text-zinc-100 md:justify-between">
      <div className="hidden min-h-full w-1/2 flex-col items-start justify-center text-wrap p-1 text-left font-sans text-6xl leading-[4rem] lg:flex lg:text-6xl lg:leading-[5rem] xl:text-7xl xl:leading-[7rem]">
        <p>
          Today's <span className="text-blue-500 underline">Tasks,</span>
        </p>
        <p>Tomorrow's </p>
        <p className="text-green-600 underline">Success</p>
      </div>
      <div className="flex grow flex-col items-center justify-center gap-5 rounded-md border border-gray-800 p-3">
        <p className="w-full text-center font-sans text-4xl lg:text-3xl">
          Join today
        </p>
        <form
          className="flex min-w-[80%] max-w-full flex-col gap-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex w-full flex-col gap-1">
            <label htmlFor="name" className="text-xl">
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
              id="name"
              {...register("name")}
              className="rounded-md p-2 text-lg text-black focus:outline-none"
            />
            {errors.name && (
              <span className="text-sm font-bold text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="flex w-full flex-col">
            <label htmlFor="username" className="text-xl">
              Username
            </label>
            <div className="flex items-center gap-2 rounded-md bg-white">
              <input
                type="text"
                placeholder="Username"
                id="username"
                {...register("username")}
                onChange={async (e) => {
                  await usernameHandler(e.target.value);
                }}
                className="grow rounded-md p-2 text-lg text-black focus:outline-none"
              />
              <PuffLoader color="#60a5fa" size={44} loading={usernameLoading} />
            </div>
            {exists && (
              <span className="font-bold text-red-500">
                This username is already taken
              </span>
            )}
            {errors.username && (
              <span className="text-sm font-bold text-red-500">
                {errors.username.message}
              </span>
            )}
          </div>
          <div className="flex w-full flex-col">
            <label htmlFor="email" className="text-xl">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              {...register("email")}
              className="rounded-md p-2 text-lg text-black focus:outline-none"
            />
            {errors.email && (
              <span className="text-sm font-bold text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-xl">
              Password
            </label>
            <div className="flex justify-between gap-1 rounded-md bg-white p-1">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                id="password"
                {...register("password")}
                className="w-full p-1 text-lg text-black focus:outline-none"
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer"
              >
                {showPassword ? (
                  <GrFormView className="size-10 text-black" />
                ) : (
                  <GrFormViewHide className="size-10 text-black" />
                )}
              </div>
            </div>
            {errors.password && (
              <span className="text-sm font-bold text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>
          {signupLoading ? (
            <div className="flex h-[3rem] w-full items-center justify-center">
              <SyncLoader color="#0284c7" />
            </div>
          ) : (
            <button
              type="submit"
              className="mt-5 h-[3rem] rounded-lg bg-blue-600 p-3 text-lg text-white lg:text-xl"
            >
              Sign up
            </button>
          )}
        </form>
        <div className="text-lg">
          Already joined? &nbsp;
          <Link to="/auth/login" className="underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupLayout;
