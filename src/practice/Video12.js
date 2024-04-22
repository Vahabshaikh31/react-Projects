import React from 'react'

export default function Video12() {
  let curnD = new Date(2020, 5, 5, 14);
  curnD = curnD.getHours();
  let greeting = "";

  const css = {
    color: "black"
  };


  if (curnD >= 1 && curnD < 12) {
    greeting = "Moring";
    css.color = "Green";
  }

  else if (curnD >= 12 && curnD <= 19) {
    greeting = "Evening";
    css.color = "orange";

  }
  else {
    greeting = "Night";
    css.color = "Black";
  }
  return (
    <div>
      <h1 style={css}>Good {greeting}</h1>


    </div>
  )
}
