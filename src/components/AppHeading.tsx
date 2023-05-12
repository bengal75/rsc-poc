"use client";
import { useState } from "react";

const AppHeading = () => {
  const [headingExpanded, setHeadingExpanded] = useState(false);
  const expandHeading = () => setHeadingExpanded((current) => !current);
  return (
    <h1
      className="cursor-pointer text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]"
      onClick={expandHeading}
    >
      {headingExpanded ? (
        <>
          Pictures <span className="text-[hsl(280,100%,70%)]">of</span> Cats
        </>
      ) : (
        <>
          P<span className="text-[hsl(280,100%,70%)]">o</span>C
        </>
      )}
    </h1>
  );
};

export default AppHeading;
