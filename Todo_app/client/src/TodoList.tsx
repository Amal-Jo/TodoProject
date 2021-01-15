import React from'react';
import TodoListItem from './TodoListItem';

interface TodoListProps{
    todos:Todo[];
    clickToToggle:ClickToDoToggle

}

const TodoList:React.FC<TodoListProps>=({todos,clickToToggle})=>{
    return(
        <ul>
            {todos.map(todo=>{
                return <TodoListItem  key={todo.name} todo={todo} clickToToggle={clickToToggle}/>
            })}

        </ul>
    )

}
export default TodoList;