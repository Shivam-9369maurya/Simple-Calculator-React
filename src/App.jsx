import styles from "./App.module.css";
import Display from "./component/Display";
import Buttons from "./component/Buttons";
import { useState } from "react";

function App() {
  const [Calval, SetCalval] = useState("");
  const onButtonclick = (buttonText) => {
    if (buttonText === "C") {
      SetCalval("");
    } else if (buttonText === "=") {
      const result = eval(Calval);
      SetCalval(result);
    } else {
      const newdisplayvalue = Calval + buttonText;
      SetCalval(newdisplayvalue);
    }
  };
  return (
    <center>
      <div className={styles.calculator}>
        <Display displayvalue={Calval}></Display>
        <Buttons onButtonclick={onButtonclick}></Buttons>
      </div>
    </center>
  );
}

export default App;
