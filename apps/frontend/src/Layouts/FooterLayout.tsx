import React from "react";
const FooterLayout: React.FC = () => {
  return (
    <footer className="hidden w-full items-center justify-between p-3 text-center text-white backdrop-blur-md xl:flex">
      <p className="">
        Crafted with{" "}
        <a href="https://www.instagram.com/_archana_sr07/" target="_blank">
          ❤️
        </a>{" "}
        (and
        <a
          href="https://open.spotify.com/album/5quMTd5zeI9yW5UDua8wS4"
          target="_blank"
        >
          ☕️
        </a>
        ) by &nbsp;
        <a href="https://github.com/dhruvkaushik305" target="_blank">
          Dhruv Kaushik
        </a>
      </p>
      <p>
        Having Issues? Report it{" "}
        <a
          className="underline"
          href="https://github.com/dhruvkaushik305/todoer/issues"
          target="_blank"
        >
          here
        </a>
      </p>
    </footer>
  );
};
export default FooterLayout;
