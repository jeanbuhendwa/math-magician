const Calculator = () => {
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
  return (
    <>
      <section className="calcContainer">
        <div className="displayContainer">
          <h2>0</h2>
        </div>
        <div className="inputContainer">
          {inputSign.map((sign) => (
            <button type="button" key={sign}>
              {sign}
            </button>
          ))}
        </div>
      </section>
    </>
  );
};

export default Calculator;
