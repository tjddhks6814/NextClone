import React, { useState } from "react"

const List = () => {
    const [todo, setTodo] = useState<string[]>([]);
    const [list, setList] = useState("");

    const todoInsert = (e:React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        if(list !== ""){
            setTodo([...todo, list]);
            setList("");
        }else{
            alert("Add TodoList");
            return false;
        }
    }

    const todoChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setList(e.target.value)
    }

    const todoDelete = (e:React.MouseEvent<HTMLElement>) => {
        const newList = [...todo];
        newList.splice(Number(e.currentTarget.getAttribute('value')), 1);
        setTodo(newList);
    }

    const todoUpdate = (e:React.MouseEvent<HTMLButtonElement>) => {
        const updateValue = e.currentTarget.value;
        const inputString = prompt("변경 할 내용을 입력하세요", updateValue);
        const eId =  Number(e.currentTarget.name);
        
        if(inputString != null){
            const newList = [...todo];
            newList[eId] = inputString;
            setTodo(newList);
            alert("변경되었습니다.");
        }
        
    }

    return(
        <div className="container">
            <h1 style={{textAlign:"center"}}>My Todo List</h1>
            <input type="text" name="todoList" value={list} placeholder="Todo" onChange={todoChange} />
            <button id="inputBtn" onClick={todoInsert}>입력</button>
            <ul>
            {
                todo.map((ele,i) => (
                    <li key={i}>
                        <span>{ele}</span>
                        <button id={"updateBtn"} name={i} value={ele} onClick={todoUpdate}>변경</button>
                        <button id="delBtn" value={i} onClick={todoDelete}>삭제</button>
                    </li>
                ))
            }
            </ul>
        </div>
    )
}

export default List