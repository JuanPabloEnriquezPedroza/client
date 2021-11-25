import React from 'react';
import { getTodos } from '../functions/index.js';
import {useEffect, useState} from "react";
import { deleteTodo } from '../functions/index.js';

function Todo() {
    const [bdTodos, setBDTodos] = useState();

    useEffect(() => {
        console.log('Todos');
        const fetchData = async() => {
            const result = await getTodos();
            console.log('fetched data', result);
            setBDTodos(result);
        }
        fetchData();
    }, [bdTodos])

    async function removeTodo(id)
    {
        await deleteTodo(id);
    }

    return(
        <>
            {bdTodos && bdTodos.map((bdTodos) => {
                if(bdTodos.title)
                return(
                <div class="row center" key={bdTodos._id}>
                    <div class="col s12">
                        <div class="card light-blue darken-4">
                            <div class="card-content white-text">
                                <span class="card-title">{bdTodos.title}</span>
                                <p>{bdTodos.content}</p>
                            </div>
                            <button className="btn" onClick = {() => removeTodo(bdTodos._id)}>Eliminar</button>
                        </div>
                    </div>
                </div>)
            })}
        </>
    )
}

export default Todo;
