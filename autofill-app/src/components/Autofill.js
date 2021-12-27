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

  const onKeyDown = (e) => {
    let idx;
    switch(e.keyCode) {
      case 38:
        idx = activeSuggestionIdx;
        if(idx - 1 !== 0)
          setActiveSuggestionIdx(idx - 1);
        break;
      case 40:
        idx = activeSuggestionIdx;
        if(idx + 1 !== suggestions.length)
          setActiveSuggestionIdx(idx + 1);
        break;
      case 13:
        setInput(suggestions[activeSuggestionIdx]);
        setFilteredSuggestions([]);
        setActiveSuggestionIdx(0);
        setShowSuggestions(false);
        break;
      default :
        // do
        break;
    }
  };

  return (
    <>
      <input 
        type="text"
        placeholder="start typing..."
        onChange={inputHandler}
        onKeyDown={onKeyDown}
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
