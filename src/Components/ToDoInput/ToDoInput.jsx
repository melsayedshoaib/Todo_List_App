import React, { useState } from 'react'

import { BiBook } from "react-icons/bi";
import { addTodo } from '../../Store/Slices/todoSlice';
import { useDispatch } from "react-redux";

export default function ToDoInput() {
  const generatedId = crypto.randomUUID();
  const dispatch = useDispatch();
  const [toDo, setToDo] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addTodo(
      {
        id: generatedId,
        todoName: toDo,
      },
    ))
    setToDo("");
  }
  return (
    <div>
      <h2 className='text-center bg-success text-white py-3 w-75 mx-auto my-3 rounded-3 shadow-lg nowrap'>Add Your Todos</h2>
      <div className='p-3 border w-75 mx-auto'>
        <form onSubmit={handleSubmit}>
            <div className="position-relative">
                <BiBook className="fs-6 rounded-top text-white bg-primary position-absolute end-0 top-0" />
                <input required type="text" placeholder="Add A New Todo" className="w-100 rounded border-0 p-2" value={toDo} onChange={(e) => setToDo(e.target.value)} />
            </div>
            <button className="btn w-100 btn-primary text-white mt-3" type='submit'>Add A New Todo</button>
        </form>
      </div>
    </div>
  )
}
