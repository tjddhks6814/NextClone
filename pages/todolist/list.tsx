import { useState } from "react"

const List = () => {
    const [todo, setTodo] = useState<Array<string>>([]);
    const [list, setList] = useState<string>("");

    interface deleteBtn {
        (): () => void;
    }

    const todoInsert = (e:any) => {
        e.preventDefault();
        if(list !== ""){
            setTodo([...todo, list]);
            setList("");
        }else{
            alert("Add TodoList");
            return false;
        }
    }

    const todoChange = (e:any) => {
        setList(e.target.value)
    }

    const todoDelete = (e:any) => {
        const newList =[...todo];
        newList.splice(e.target.value, 1);
        setTodo(newList);
    }

    return(
        <div className="container">
            <h1 style={{textAlign:"center"}}>My Todo List</h1>
            <input type="text" name="todoList" value={list} placeholder="Todo" onChange={todoChange} />
            <button onClick={todoInsert}>입력</button>
            <ul>
            {
                todo.map((ele,i) => (
                    <li key={i}>
                        <span>{ele}</span>
                        <button value={i} onClick={todoDelete} style={{marginLeft:"5px"}}>삭제</button>
                    </li>
                ))
            }
            </ul>
        </div>
    )
}

export default List