import React from 'react';

const ToDo = ({ todo, toggleTask, removeTask }) => {
    return (
        <div key={todo.id} className="item-todo">
            <div onClick={() => toggleTask(todo.id)} className={todo.complete ? "item-text srtike" : "item-text"}
            >
                {todo.task}
            </div>
            <div className='item-delete' onClick={() => removeTask(todo.id)}>
                x
            </div>

        </div>
    );
};

export default ToDo;