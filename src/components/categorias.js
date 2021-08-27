import { useState } from "react";

export default function Categorias({pratos, categoriasSelecionadas, setCategoriasSelecionadas}){

    const [globalContador, setGlobalContador] = useState(0);

    return (
        <div className={pratos.categoria}>

            <p className="righteous categoria">{pratos.frase}</p>

            <div className="container-itens">

                {pratos.itens.map((item, i) => <Item item={item} key={i} categoriasSelecionadas={categoriasSelecionadas} setCategoriasSelecionadas={setCategoriasSelecionadas} categoria={pratos.categoria} globalContador={globalContador} setGlobalContador={setGlobalContador}/>)}

            </div>


        </div>
    );
}

function Item({categoria, categoriasSelecionadas, setCategoriasSelecionadas, item, globalContador, setGlobalContador}) {

    const [classeDiv, setClasseDiv] = useState("item roboto " + categoria);
    const [classeContador, setClasseContador] = useState("contador escondido");
    const [contador, setContador] = useState(0);

    function selecionar(e) {
        setClasseDiv("item roboto selecionado " + categoria);
        setClasseContador("contador");

        if(classeDiv !== ("item roboto selecionado " + categoria)){
            alterarContador("+", e);
        }
    }

    function alterarContador(button, e) {
        if(button === "+") {
            setContador(contador + 1);
            setGlobalContador(globalContador + 1);
        }
        else {
            setContador(contador - 1);
            setGlobalContador(globalContador - 1);
        }

        setCategoriasSelecionadas({...categoriasSelecionadas, [categoria]: globalContador});
        
        if(contador === 1 && button === "-") {
            setClasseDiv("item roboto " + categoria);
            setClasseContador("contador escondido");
            setContador(0);
            setCategoriasSelecionadas({...categoriasSelecionadas, [categoria]: globalContador});
        }

        e.stopPropagation();
        
        
    }

    return (
        <div className={classeDiv} onClick={(e) => selecionar(e)}>
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

