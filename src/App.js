import React, { useState } from "react";
import styles from "./App.module.css";

const App = () => {
  const [readState, setReadState] = useState(false);

  const handleClick = () => {
    setReadState(!readState);
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.readContainer}>
        <h1 className={styles.mainHead}>React Hooks</h1>
        <p className={styles.readText}>Hooks are new addition to React</p>
        <img
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
          className={styles.reactImg}
        />
        <p className={styles.readText}>
          {" "}
          Hooks solve a wide variety of seemingly unconnected problems in react
          that we have encountered over five years of writing and maintaining
          tens of thousands of components.{" "}
          {readState &&
            " For curious readers, we have prepared a detailed RFC. Hooks allow you to reuse stateful logic without changing your component heirechy. Hooks works side-by-side with existing code so you can adopt them carefully."}
        </p>
        <button className={styles.readBtn} onClick={handleClick}>
          {readState ? "Read More" : "Read Less"}
        </button>
      </div>
    </div>
  );
};

export default App;
