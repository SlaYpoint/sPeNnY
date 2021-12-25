import Autofill from './components/Autofill';
import './styles.css';

function App() {
  return (
    <div className="App">
     <h1>React Autofill</h1>
     <Autofill 
      suggestions={[
        "Apple",
        "Banana",
        "Carrot",
        "Dragon",
        "Eggs",
        "Grapes",
        "Orange",
        "Peach",
        "Rose",
        "Watermelon"
      ]}
     />
    </div>
  );
}

export default App;
