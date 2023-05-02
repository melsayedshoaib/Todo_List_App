import React from "react";

import DisplayToDos from "./Components/DisplayToDos/DisplayToDos";
import ToDoInput from "./Components/ToDoInput/ToDoInput";

export default function App() {
  return <div>
    <ToDoInput />
    <DisplayToDos/>
  </div>;
}
