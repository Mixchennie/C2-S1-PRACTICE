import React from "react";

function App() {
  /* Contants used in this component */
  const DOLLAR_TO_EURO_RATIO = 0.92;
  const DOLLAR_TO_DONG_RATIO = 24560;

  let valueDollars = 15;

  // TODO : You need to implement and call this function in your JSX code
  // Convert the given value in dollars to a value in euro
  function dollarToEuro(valueInDollars) {
    return valueInDollars * 0.9;
  }

  // TODO : You need to implement and call this function in your JSX code
  // Convert the given value in dollars to a value in dong
  function dollarToDong(valueInDollars) {
    return valueInDollars * 23000;
  }

  return (
    <main>
      <h1>Device conversions</h1>

      <p>
        <label>Current value in dollars</label>
        <input disabled value={valueDollars} />

        {/* TODO This input need to display the value in dongs */}
        <label>Value in Dong</label>
        <input value={dollarToDong(valueDollars)} disabled />

        {/* TODO This input need to display the value in euros */}
        <label>Value in Euro</label>
        <input value={dollarToEuro(valueDollars)}  disabled />
      </p>
    </main>
  );
}

export default App;
