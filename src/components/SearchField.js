import React from 'react';

const SearchField = ({ value, changeHandler, submitHandler }) => {

  function keyUpHandler(evt) {
    if (evt.keyCode !== 13) return;
    submitHandler();
  }

  return (
    <section>
      <input type="text" value={value} onChange={changeHandler} onKeyUp={keyUpHandler} />
    </section>
  );
};

export default SearchField;