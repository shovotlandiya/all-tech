import { useRouter } from "next/router";

import React from "react";

const Bnma = () => {
  const { locale, locales, push } = useRouter();

  const handleClick = (l) => {
    push("/", undefined, { locale: l });
  };

  return (
    <div>
      <h1>{locale}</h1>

      {locales.map((l) => (
        <button key={l} onClick={handleClick(l)}>
          {l}
        </button>
      ))}
    </div>
  );
};

export default Bnma;
