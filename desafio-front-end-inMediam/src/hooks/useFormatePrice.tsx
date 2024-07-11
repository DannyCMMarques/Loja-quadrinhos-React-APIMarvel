import { useEffect, useState } from 'react';

const useFormattedPrice = (price: number | undefined | null) => {
  const [formattedPrice, setFormattedPrice] = useState<string>('');

  useEffect(() => {
    if (price !== undefined && price !== null && !isNaN(price)) {
      const formatted = price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      });
      setFormattedPrice(formatted);
    } else {
      setFormattedPrice('');
    }
  }, [price]);

  return formattedPrice;
};

export default useFormattedPrice;
