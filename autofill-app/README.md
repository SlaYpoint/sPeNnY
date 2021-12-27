# autofill app

View the app [here](https://0wru5.csb.app/)

### Components
1. SuggestionsList
  - prop :
    - filteredSuggestions
    - activeSuggestionIndex
    - onCliclHandler
2. Autofill
  - prop :
    - suggestionsList 

### Workflow

- On typing the text in the input field the inputHandler is triggered. On change, each character's presence in checked in the *suggestions list* passed as the `prop`.
- You can then select from the drop-down list to set the input value.

### Tech Stack
1. [React](https://reactjs.org/)