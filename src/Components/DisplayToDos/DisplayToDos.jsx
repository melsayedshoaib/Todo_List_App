import React, { useState } from 'react'
import { deleteTodo, editTodo } from '../../Store/Slices/todoSlice';
import { useDispatch, useSelector } from 'react-redux'

import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";

export default function DisplayToDos() {
    const list = useSelector((state) => state.todoSlice.list)
    const dispatch = useDispatch();
    const [isEditing, setEditing] = useState(false);
    const [state, setState] = useState({
        id: '', todoName: '', contentError: null
    })
    const onEditToggle = (id, todoName) => {
        setEditing(true);
        setState({...state, id, todoName})
    }
    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value, [`${e.target.name}Error`]: null})
    }
    const { todoName, contentError, id } = state;
    const edit = () => {
        if (todoName === '') {
            setState({ ...state, contentError: 'Edit Your Todo' });
            return;
        }
        dispatch((editTodo({ todoName, id })))
        setEditing(false)
    }
    return (    
    <div>
            <h2 className="text-white text-center bg-dark w-75 mx-auto py-3 my-3 rounded-3 nowrap">Your Todo List</h2>
            {isEditing ? <div className="text-center">
                <h2 className='text-white text-center bg-dark w-75 mx-auto py-3 my-3 rounded-3 nowrap'>Edit Your Todo</h2>
                <div className='d-flex align-items-center justify-content-center'>
                    <input placeholder='Edit Your Todo' className='w-50 py-2 border-0' type="text" value={todoName} name='todoName' onChange={handleChange} />
                    <button className='btn btn-success fs-6 py-2 rounded-0' type='button' onClick={edit}>Edit</button>
                </div>
                {contentError && <div className='alert alert-danger w-25 mt-3 mx-auto'>{contentError}</div>}
            </div>: <ul className='list-unstyled w-75 mx-auto rounded-3'>
                {list && list.map((item) => {
                    return <li key={item.id} className='my-3 p-3 rounded d-flex align-items-center justify-content-between bg-white'>
                    <div onClick={(e) => e.target.classList.toggle("toggle-classes")} >
                        <p className='m-0 fs-3'>{ item.todoName}</p>
                    </div>
                    <div>
                        <AiFillEdit onClick={() => onEditToggle(item.id, item.todoName)} className='fs-3 text-warning cursor-pointer me-2' />
                        <AiFillDelete onClick={() => dispatch(deleteTodo(item))} className='fs-3 text-danger cursor-pointer'/>
                    </div>
                </li>
            })}
        </ul>}
    </div>
    )
}   