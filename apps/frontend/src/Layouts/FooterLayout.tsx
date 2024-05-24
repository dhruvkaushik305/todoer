import React from "react";
const FooterLayout: React.FC = () => {
  return (
    <footer className="hidden w-full items-center justify-center bg-slate-950 p-3 text-center text-white xl:flex">
      <p>
        Made with ❤️ by{" "}
        <a href="https://github.com/dhruvkaushik305" target="_blank">
          Dhruv Kaushik
        </a>
      </p>
    </footer>
  );
};
export default FooterLayout;
