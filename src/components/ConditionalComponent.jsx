import Welcome from "./Welcome";
import Code from "./Code";

export default function ConditionalComponent() {
  let messageOne = <h1>This is mesage 1</h1>;
  let messageTwo = <h1>This is mesage 2</h1>;
  let message;
  const display = false;

  if (display) {
    message = <h1>This is message one</h1>;
  } else {
    message = <h1>This is message 2</h1>;
  }
  return message;
}
