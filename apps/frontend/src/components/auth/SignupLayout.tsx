import React from "react";

const SignupLayout: React.FC = () => {
  return (
    <div className="bg-red-200 p-5 rounded-lg">
      <h1 className="text-2xl text-center m-3">Signup</h1>
      <form className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Name"
          className="focus:outline-none p-2 rounded-md"
        />
        <input
          type="text"
          placeholder="Username"
          className="focus:outline-none p-2 rounded-md"
        />
        <input
          type="email"
          placeholder="Email"
          className="focus:outline-none p-2 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="focus:outline-none p-2 rounded-md"
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="focus:outline-none p-2 rounded-md"
        />
        <button
          type="submit"
          className="px-3 py-2 bg-raisinBlack text-white rounded-md"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignupLayout;
