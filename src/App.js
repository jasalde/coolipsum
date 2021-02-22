import React, { useState } from "react";
import data from "./data";
function App() {
  const [amount, setAmount] = useState(0);
  const [paragraphs, setParagraphs] = useState([]);

  const handleOnChange = (e) => {
    const inputVal = e.target.value;
    setAmount(inputVal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let count = parseInt(amount);
    if (amount < 0) {
      count = 1;
    }

    if (amount > data.length) {
      count = data.length;
    }

    const newData = data.slice(0, count);
    setParagraphs(newData);
  };
  return (
    <>
      <section className="section-center">
        <h3>tired of boring lorem ipsum?</h3>
        <form className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="amount">paragraphs:</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={amount}
            onChange={handleOnChange}
          />
          <button className="btn">generate</button>
        </form>
        <article className="lorem-text">
          {paragraphs.map((paragraph, idx) => {
            return <p key={idx}>{paragraph}</p>;
          })}
        </article>
      </section>
    </>
  );
}

export default App;
