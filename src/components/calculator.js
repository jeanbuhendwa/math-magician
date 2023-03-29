import { useState } from 'react';
import calculate from '../logic/calculate';
import CalcBg from '../assets/calculate.svg';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const inputSign = [
    'AC',
    '+/-',
    '%',
    '÷',
    '7',
    '8',
    '9',
    'x',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    '.',
    '=',
  ];

  const handleClick = (buttonName) => {
    const result = calculate(state, buttonName);
    setState(result);
  };

  return (
    <>
      <main className="mainCalcContainer">
        <section className="imgCalc">
          <img src={CalcBg} alt="Calculate Backgroung" />
        </section>
        <section className="calcContainer">
          <div className="displayContainer">
            <h2>{state.next || state.total || '0'}</h2>
          </div>
          <div className="inputContainer">
            {inputSign.map((sign) => (
              <button
                type="button"
                key={sign}
                onClick={() => {
                  handleClick(sign);
                }}
              >
                {sign}
              </button>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Calculator;
