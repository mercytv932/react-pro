import Hello from "./components/Hello";

function App(props) {
  const seatNumbers = [1,4,7];
  const person = {
    name: "Yosef",
    greet: "Hi there!",
    emoji: "😄",
    seatNumbers: [1,4,7]
  }
  return <>
  <Hello person={person}/>
  </>;
}

export default App;
 9