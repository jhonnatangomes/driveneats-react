import { useState } from "react";

export default function Categorias(props){
    return (
        <div className={props.pratos.categoria}>

            <p className="righteous categoria">{props.pratos.frase}</p>

            <div className="container-itens">

                {props.pratos.itens.map((item, i) => <Item item={item} key={i}/>)}

            </div>


        </div>
    );
}

function Item(props) {

    const [classeDiv, setClasseDiv] = useState("item roboto");
    const [classeContador, setClasseContador] = useState("contador escondido");
    const [contador, setContador] = useState(1);

    function selecionar() {
        setClasseDiv("item roboto selecionado");
        setClasseContador("contador");
    }

    function alterarContador(e, button) {
        if(button === "+") setContador(contador + 1);
        else setContador(contador - 1);
        
        if(contador === 1 && button === "-") {
            setClasseDiv("item roboto");
            setClasseContador("contador escondido");
        }

        e.stopPropagation();
        
    }

    return (
        <div className={classeDiv} onClick={selecionar}>
                    <img src={props.item.image} alt={props.item.descricao} />
                    <p className="nome-item">{props.item.nome}</p>
                    <p className="descricao-item">{props.item.descricao}</p>
                    <p className="preco">{props.item.preco}</p>
                    <div className={classeContador}>
                        <button onClick={(e) => {alterarContador(e, "-")}}>-</button>
                        <div>{contador}</div>
                        <button onClick={(e) => {alterarContador(e, "+")}}>+</button>
                    </div>
                </div>
    );
}

