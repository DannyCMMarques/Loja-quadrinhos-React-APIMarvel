import { useEffect, useState } from 'react';

const useFormattedPrice = (price: number | undefined | null) => {
  const [formattedPrice, setFormattedPrice] = useState<string>('');

  useEffect(() => {
    if (price !== undefined && price !== null && !isNaN(price)) {
      const formatted = price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
      setFormattedPrice(formatted);
    } else {
      setFormattedPrice('');
    }
  }, [price]);

  return formattedPrice;
};

export default useFormattedPrice;
