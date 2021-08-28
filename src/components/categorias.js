import Item from "./item";

export default function Categorias({pratos, itensSelecionados, setItensSelecionados}){
    return (
        <div className={pratos.categoria}>
            <p className="righteous categoria">{pratos.frase}</p>
            <div className="container-itens">
                {pratos.itens.map((item, i) => <Item item={item} key={i} itensSelecionados={itensSelecionados} setItensSelecionados={setItensSelecionados} categoria={pratos.categoria}/>)}
            </div>
        </div>
    );
}



