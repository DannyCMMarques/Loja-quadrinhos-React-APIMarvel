import React from "react";
import { FrasesHomeProps } from "../../utils/interfaces/frasesHomeComponente-props";

const FrasesHomeComponente = ({ frase }: FrasesHomeProps) => {
  return (
    <div className="w-full px-2">
      <h5 className="text-white font-extrabold text-xl md:text-3xl sm:text-xl">
        {frase}
      </h5>
    </div>
  );
};

export default FrasesHomeComponente;
