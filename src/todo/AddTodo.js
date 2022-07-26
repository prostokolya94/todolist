import React, { useState } from "react";
import PropTypes from "prop-types";


function useInputValue(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);
  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    clear: () => setValue(""),
    value: () => value,
    
  };
}

function AddTodo({ onCreate }) {
  const input = useInputValue("");
  

  function submitHandler(event) {
    event.preventDefault();

    if (input.value().trim().length < 40 && input.value().trim()) {
      onCreate(input.value());
      input.clear();
    } else {
      input.clear();
    }
  }

  return (
    <form
      style={{
        marginBottom: "1rem",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
      onSubmit={submitHandler}
    >
      <input placeholder="Не более 40 символов" {...input.bind} />
      <button type="submit">Запланировать</button>
    </form>
  );
}
AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default AddTodo;
