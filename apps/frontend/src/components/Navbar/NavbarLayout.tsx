export const NavbarLayout = () => {
  return (
    <div className="flex bg-uclaBlue justify-between md:justify-around p-3 items-center">
      <div className="md:text-4xl text-3xl text-offWhite font-noto-sans">
        Todo Link
      </div>
      <div className="flex justify-between gap-3">
        <button className="md:text-xl text-lg bg-raisinBlack text-white md:py-2 md:px-3 py-1 px-2 rounded-lg">
          Signup
        </button>
        <button className="md:text-xl text-lg bg-raisinBlack text-white md:py-2 md:px-3 py-1 px-2 rounded-lg">
          Login
        </button>
      </div>
    </div>
  );
};
