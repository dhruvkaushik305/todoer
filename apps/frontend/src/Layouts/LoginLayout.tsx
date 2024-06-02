import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginInput, LoginSchema } from "@repo/types/Auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useSetRecoilState } from "recoil";
import { GrFormViewHide } from "react-icons/gr";
import { GrFormView } from "react-icons/gr";
import { userDataAtom } from "../store/authStore";
import { loginAction } from "../actions/authAction";
import { SyncLoader } from "react-spinners";
const LoginLayout: React.FC = () => {
  const setUser = useSetRecoilState(userDataAtom);
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm<LoginInput>({
    resolver: zodResolver(LoginSchema),
  });
  const onSubmit: SubmitHandler<LoginInput> = async (data) => {
    setLoading(true);
    const response = await loginAction(data);
    setLoading(false);
    if (!response.success)
      toast.error(
        "Sorry, the server seems to be down. Please raise an issue if it has been a while",
        {
          closeButton: true,
        },
      );
    else {
      setUser(response.data!);
      toast.success(`Welcome back ${response.data!.name.split(" ")[0]}`);
      navigate("/home");
    }
  };
  return (
    <div className="min-h-5/6 flex max-h-full w-10/12 items-stretch justify-between gap-3 rounded-lg p-3 text-zinc-200 md:p-5">
      <div className="hidden max-w-full grow justify-start font-sans leading-[8rem] lg:flex lg:flex-col lg:text-8xl xl:text-9xl">
        <p>Let's</p>
        <p className="text-green-500">get</p>
        <p>to</p>
        <p className="text-blue-500">work</p>
      </div>
      <div className="flex max-w-full grow flex-col items-center justify-center gap-3  rounded-lg border border-gray-800 bg-black/40 p-3 backdrop-blur-md">
        <header className="text-center font-sans text-2xl md:text-4xl">
          Welcome back
        </header>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-5/6 flex-col gap-3"
        >
          <div className="flex w-full flex-col gap-1">
            <label htmlFor="email" className="text-lg">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              className="rounded-md p-2 text-black focus:outline-none"
              {...register("email")}
            />
          </div>
          <div className="flex w-full flex-col gap-1 text-lg">
            <label htmlFor="password">Password</label>
            <div className="flex justify-between gap-1 rounded-md bg-white p-1">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                id="password"
                {...register("password")}
                className="w-full rounded-md p-1 text-black focus:outline-none"
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer"
              >
                {showPassword ? (
                  <GrFormView className="size-8 text-black" />
                ) : (
                  <GrFormViewHide className="size-8 text-black" />
                )}
              </div>
            </div>
          </div>
          {loading ? (
            <div className="flex h-[3rem] w-full items-center justify-center">
              <SyncLoader color="#0284c7" />
            </div>
          ) : (
            <button
              className="mt-5 h-[3rem] rounded-md bg-blue-600 px-3 py-2 text-lg text-white"
              type="submit"
            >
              Login
            </button>
          )}
        </form>
        <div className="text-lg">
          Don't have an account?{" "}
          <Link to="/auth/signup" className="underline">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};
export default LoginLayout;
