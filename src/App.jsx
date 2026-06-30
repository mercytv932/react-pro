import "./App.css";
import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
import ConditionalComponent from "./components/ConditionalComponent";
function App(props) {
  const seatNumbers = [1, 4, 7];
  const person = {
    name: "Yosef",
    greet: "Hi there!",
    emoji: "😄",
    seatNumbers: [1, 4, 7],
  };
  return (
    <>
      <Hello person={person} />
      <Fruits />
      <ConditionalComponent />
    </>
  );
}

export default App;
