import {Link, useLocation} from "react-router-dom";
import "./confirmacao.css";

export default function Confirmacao({setItensSelecionados}) {

    const location = useLocation();
    const {url, itens} = location.state;
    let total = 0;

    function limparItensSelecionados(){
        setItensSelecionados({
            pratos: [], bebidas: [], sobremesas: []
        })
    }

    return (
        <div className="tela-confirmacao roboto">
        <p className="righteous titulo-confirmacao">Revise seu pedido</p>
        <div className="itens-confirmacao">
            {itens.map((item, i) => {
                let precoPorItem = Number(item.preco.slice(3).replace(",", ".")) * item.quantidade;
                total += precoPorItem;
                let precoPorItemString = precoPorItem.toFixed(2).replace(".", ",");
                return (<div className="item-confirmacao" key={i}>
                    <p>{item.quantidade > 1 ? `${item.nome} (${item.quantidade}x)` : item.nome}</p>
                    <p>{`R$ ${precoPorItemString}`}</p>
                </div>);
            })} 
            <div className="item-confirmacao total-confirmacao">
                    <p>TOTAL</p>
                    <p>{`R$ ${total.toFixed(2).replace(".", ",")}`}</p>
                </div>
        </div>
        <div className="container-botoes">
            <a href={url}><button className="botao-confirmacao roboto">Tudo certo, pode pedir!</button></a>
            <Link to="/"><button className="botao-cancelar roboto" onClick={limparItensSelecionados}>Cancelar</button></Link>
        </div>
        </div>
    );
}