import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  function handleDarkModeClick() {
    setIsDarkMode((prevMode) => !prevMode);
  }


  const appClass = isDarkMode ? "App dark" : "App light";
  return (
    <div className={appClass}>
      <Header onDarkModeClick={handleDarkModeClick}/>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
