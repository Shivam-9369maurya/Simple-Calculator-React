import styles from "./Buttons.module.css";
const Buttons = ({ onButtonclick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonContainer}>
      {buttonNames.map((buttonName) => (
        <button
          className={styles.button}
          onClick={() => onButtonclick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};
export default Buttons;
