import { useEffect, useState } from "react";

type TiposCartao =
  | "Visa"
  | "MasterCard"
  | "American Express"
  | "Discover"
  | "Other";

const useValidadorCartao = (cardNumber: string): TiposCartao | null => {
  const [tiposCartao, setTiposCartao] = useState<TiposCartao | null>(null);

  useEffect(() => {
    const limparCartao = cardNumber?.replace(/\s/g, "");

    const cardRegex: { [key in TiposCartao]: RegExp } = {
      Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
      MasterCard: /^5[1-5][0-9]{14}$/,
      "American Express": /^3[47][0-9]{13}$/,
      Discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
      Other: /^(?:2131|1800|35\d{3})\d{11}$/,
    };

    let tipoEncontrado: TiposCartao | null = null;

    Object.entries(cardRegex).forEach(([type, regex]) => {
      if (regex.test(limparCartao)) {
        tipoEncontrado = type as TiposCartao;
      }
    });

    setTiposCartao(tipoEncontrado);
  }, [cardNumber]);

  return tiposCartao;
};

export default useValidadorCartao;
