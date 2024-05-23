import React from "react";
const FooterLayout: React.FC = () => {
  return (
    <footer className="flex w-full items-center justify-center border-t border-gray-800 bg-black/90 p-3 text-center text-white">
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
