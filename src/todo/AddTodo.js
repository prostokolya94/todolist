import React, { useState } from "react";

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
//let inputStyle = [];

function AddTodo({ onCreate }) {
  const input = useInputValue("");

  function submitHandler(event) {
    event.preventDefault();

    if (input.value().trim().length < 40 && input.value().trim()) {
      onCreate(input.value());
      input.clear();
    } else {
      input.clear();
      //inputStyle.push("wrong");
      //console.log(inputStyle);
      //setTimeout(inputStyle.splice(0,1), 1000)
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
      <input
        /*className={inputStyle.join("")}*/
        placeholder="Не более 40 символов"
        {...input.bind}
      />
      <button type="submit">Запланировать</button>
    </form>
  );
}

export default AddTodo;
