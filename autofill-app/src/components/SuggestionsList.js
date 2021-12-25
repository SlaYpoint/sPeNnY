import React from "react";

const SuggestionsList = ({
  filteredSuggestions,
  activeSuggestionIndex,
  onClickHandler,
}) => (
  filteredSuggestions.length ? (
    <ul className="suggestions">
      {filteredSuggestions.map((suggestion, idx) => {
        let className;

        if(idx === activeSuggestionIndex){
          className = "suggestion-active";
        }
        return (
          <li className={className} key={suggestion} onClick={onClickHandler} >
            {suggestion}
          </li>
        );
      })}
    </ul>
  ) : (
    <div className="no-results">
      <em>No results :/</em>
    </div>
  )
);

export default SuggestionsList;
