import { useEffect, useState } from 'react';
import QuoteBg from '../assets/quote-bg.svg';
import LoadingBg from '../assets/loading-bg.svg';
import ErrorBg from '../assets/error-bg.svg';

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

  if (isLoading) {
    return (
      <>
        <div className="quoteLoading">
          <img src={LoadingBg} alt="Loading Background" />
          <p>Quote Loading...</p>
        </div>
      </>
    );
  }
  if (hasError) {
    return (
      <>
        <div className="errorLoading">
          <img src={ErrorBg} alt="Error Background" />
          <p>Sorry something went wrong</p>
        </div>
      </>
    );
  }

  return (
    <>
      <main className="mainQuoteContainer">
        <section className="quoteBg">
          <img src={QuoteBg} alt="Quote Background" />
          <button type="button">Get New Quote</button>
        </section>
        <section className="quoteText">
          {quote.map((data) => (
            <>
              <p key={quote.indexOf(data)}>{data.quote}</p>
              <h3>{data.author}</h3>
            </>
          ))}
        </section>
      </main>
    </>
  );
};

export default RandomQuote;
