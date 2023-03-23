import { useEffect, useState } from 'react';

const RandomQuote = () => {
  const [quote, setQuote] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const urlAPI = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=amazing',
          {
            headers: {
              'X-Api-Key': 'XDKUoPxvEvoCNsKLVmBrnTyEiPs7mqeClAG3Ch7e',
              'Content-Type': 'application/json',
            },
          },
        );
        const response = await urlAPI.json();
        setQuote(response);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setQuote, setIsLoading]);

  if (isLoading) return <p>Quote Loading... please wait.</p>;
  if (hasError) return <div>Sorry something went wrong</div>;

  return (
    <div>
      {quote.map((data) => (
        <>
          <p key={quote.indexOf(data)}>{data.quote}</p>
          <h3>{data.author}</h3>
        </>
      ))}
    </div>
  );
};

export default RandomQuote;
