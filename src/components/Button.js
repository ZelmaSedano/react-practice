// State Hook
import React, { useState } from 'react';
// import styling
import './Button.css';

function Button(props) {
  const [isClicked, setisClicked] = useState(false);
  // false is the default

  // create a variable to hold toggling color effect
  // when true(clicked) = pink, when false = lightGray
  const background = isClicked ? 'pink' : 'lightGray';
  // return statement - can be only one
  return (
    // opening tag
    // change event to 'onClick'
    <button
      style={{ backgroundColor: background }}
      onClick={() => setisClicked(!isClicked)}
    >
      Button number{props.number}
    </button>
    // closing tag
  );
}

export default Button;
