import React, { useState } from "react";
import "./item.css";

export default function Item({categoria, itensSelecionados, setItensSelecionados, item}) {

    const [classeDiv, setClasseDiv] = useState("item roboto");
    const [classeContador, setClasseContador] = useState("contador escondido");
    const [contador, setContador] = useState(1);

    function selecionar() {
        setClasseDiv("item roboto selecionado");
        setClasseContador("contador");
        
        if(classeDiv !== ("item roboto selecionado")){
            setItensSelecionados({...itensSelecionados, [categoria]: [...itensSelecionados[categoria], 
            {nome: item.nome, preco: item.preco, quantidade: 1}]});
        }
    }

    function alterarContador(button, e) {
        let updatedItem = {}
        if(button === "+") {
            updatedItem = itensSelecionados[categoria].map((elemento) => {
                return {nome: elemento.nome, preco: elemento.preco, quantidade: elemento.nome === item.nome ? contador + 1 : elemento.quantidade}
            });
            setContador(contador + 1);
        }
        else {
            updatedItem = itensSelecionados[categoria].map((elemento) => {
                return {nome: elemento.nome, preco: elemento.preco, quantidade: elemento.nome === item.nome ? contador - 1  : elemento.quantidade}
            });
            setContador(contador - 1);
        }

        setItensSelecionados({...itensSelecionados, [categoria]: updatedItem});

        if(contador === 1 && button === "-") {
            updatedItem = itensSelecionados[categoria].filter((elemento) => elemento.nome !== item.nome)
            setClasseDiv("item roboto");
            setClasseContador("contador escondido");
            setContador(1);
            setItensSelecionados({...itensSelecionados, [categoria]: updatedItem});
        }

        e.stopPropagation();
    }

    return (
        <div className={classeDiv} onClick={() => selecionar()}>
                    <img src={item.image} alt={item.descricao} />
                    <p className="nome-item">{item.nome}</p>
                    <p className="descricao-item">{item.descricao}</p>
                    <p className="preco">{item.preco}</p>
                    <div className={classeContador}>
                        <button onClick={(e) => {alterarContador("-", e)}}>-</button>
                        <div>{contador}</div>
                        <button onClick={(e) => {alterarContador("+", e)}}>+</button>
                    </div>
                </div>
    );
}