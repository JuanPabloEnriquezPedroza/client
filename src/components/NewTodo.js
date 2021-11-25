import React from 'react';
import {useState} from "react";
import { createTodos } from '../functions/index.js';

function NewTodo() {

    const [titulo, setState] = useState();

    function handleChangeTitulo(e){
        const {value} = e.target;
        setState(value);
        console.log(value);
    }

    const [descripcion, setState2] = useState();

    function handleChangeDescripcion(e){
        const {value} = e.target;
        setState2(value);
        console.log(value);
    }

    async function onSubmitHandler(){
        const result = await createTodos({title:titulo,content:descripcion});
        console.log("resultado",result);
    }

    return (
        <div>
            <div className="row">
                <form className="col s12" onSubmit={onSubmitHandler}>
                <div className="row">
                    <div className="input-field col s6">
                        {/* <i className="material-icons prefix">account_circle</i> */}
                        <input id="icon_prefix" type="text" className="validate" onChange={handleChangeTitulo}/>
                        <label htmlFor="icon_prefix">Título</label>
                    </div>
                    <div className="input-field col s6">
                        {/* <i className="material-icons prefix">phone</i> */}
                        <input id="icon_telephone" type="tel" className="validate" onChange={handleChangeDescripcion}/>
                        <label htmlFor="icon_telephone">Descripción</label>
                    </div>
                </div>
                <div className="row right-align">
                    <button className="btn">Publicar</button>
                </div>
                </form>
            </div>

            <div class="row center">
                <h1>Nueva Nota</h1>
            </div>

            <div class="row center">
                <div class="col s12">
                    <div class="card light-blue darken-4">
                        <div class="card-content white-text">
                            <span class="card-title">{titulo ? titulo:"Título"}</span>
                            <p>{descripcion ? descripcion:"Descripción"}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row center">
                <h1>Notas anteriores</h1>
            </div>
        </div>
    )
}

export default NewTodo;
