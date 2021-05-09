import React, { useState } from "react";
import "./styles.css";
import quotes from "./quotedatabase";
function App() {
  const [values, setValues] = useState({
    quote: "The purpose of our lives is to be happy",
    author: "Dalai Lama",
  });

  const genrandomQuote = () => {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    console.log(quotes[randomNumber]);
    return quotes[randomNumber];
  };
  const shuffleQuotes=(array)=>{
    return array.sort(()=>Math.random()-0.5)
  }

  const onsubmit = () => {
    const generateRandomQuote = genrandomQuote();
    setValues({...values,
      quote: generateRandomQuote.quote,
      author: generateRandomQuote.author
    });
    shuffleQuotes(quotes)

  };

  return (
    <div>
      <div
        className="card mx-auto text-white bg-dark col-8 "
        style={{ marginTop: "200px" }}
      >
        <div className="card-body ">
          <h3 className="card-title text-left">Quotes</h3>
          <hr />
          <p className="card-text text-center">
          "{values.quote}"
          </p>
          <p className="card-text text-center">{values.author}</p>
          <button className="btn btn-primary " onClick={onsubmit}>NEXT </button>

        </div>
      </div>
    </div>
  );
}

export default App;
