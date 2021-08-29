import Item from "../Item";

export default function Categoria({pratos, itensSelecionados, setItensSelecionados}){
    return (
        <div className={pratos.categoria}>
            <p className="righteous categoria">{pratos.frase}</p>
            <div className="container-itens">
                {pratos.itens.map((item, i) => <Item item={item} key={i} itensSelecionados={itensSelecionados} setItensSelecionados={setItensSelecionados} categoria={pratos.categoria}/>)}
            </div>
        </div>
    );
}



