import React, { useState } from "react";
import SuggestionsList from './SuggestionsList';

const Autofill = ({ suggestions }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestionIdx, setActiveSuggestionIdx] = useState(0);
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    const userInput = e.target.value;

    const filteredOut = suggestions.filter(
      (suggestion) => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setInput(e.target.value);
    setFilteredSuggestions(filteredOut);
    setActiveSuggestionIdx(0);
    setShowSuggestions(true);
  };

  const selectHandler = (e) => {
    setFilteredSuggestions([]);
    setInput(e.target.innerText);
    setActiveSuggestionIdx(0);
    setShowSuggestions(false);
  };

  return (
    <>
      <input 
        type="text"
        placeholder="start typing..."
        onChange={inputHandler}
        value={input}
      />
      {showSuggestions &&
       input && 
       <SuggestionsList
        filteredSuggestions={filteredSuggestions}
        activeSuggestionIndex={activeSuggestionIdx}
        onClickHandler={selectHandler}
       />}
    </>
  );
};

export default Autofill;
