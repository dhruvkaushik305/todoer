import React from "react";
const FooterLayout: React.FC = () => {
  return (
    <footer className="hidden w-full items-center justify-between bg-slate-950 p-3 text-center text-white xl:flex">
      <p className="">
        Crafted with{" "}
        <a href="https://www.instagram.com/_archana_sr07/" target="_blank">
          ❤️
        </a>{" "}
        by{" "}
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
        Something wonky? Report it{" "}
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
