import {Link} from "react-router-dom";
import "./confirmacao.css";

export default function Confirmacao({itensSelecionados, setItensSelecionados}) {

    let URL_WHATSAPP = "https://wa.me/5517997372284?text=";
    let itens = [];
    let total = 0;

    for(let property in itensSelecionados){
        for(let item of itensSelecionados[property]){
            itens.push(item);
        }
    }

    function limparItensSelecionados(){
        setItensSelecionados({
            pratos: [], bebidas: [], sobremesas: []
        })
    }

    function criarLink() {
        let text = "Olá, gostaria de fazer o pedido:\n";
        let total = 0;

        for(let key of Object.keys(itensSelecionados)){
            text += `- ${key[0].toUpperCase() + key.slice(1)}: `;
            let textLine = [];
            for(let item of itensSelecionados[key]){
                item.quantidade > 1 ? textLine.push(`${item.nome} (${item.quantidade}x)`) : textLine.push(`${item.nome}`);
                total += Number(item.preco.slice(3).replace(",", ".")) * item.quantidade;
            }
            text += textLine.join(", ");
            text += "\n";
        }

        text += `Total: R$ ${total.toFixed(2)}`;
        URL_WHATSAPP += encodeURIComponent(text);
    }

    criarLink();

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
            <a href={URL_WHATSAPP}><button className="botao-confirmacao roboto">Tudo certo, pode pedir!</button></a>
            <Link to="/"><button className="botao-cancelar roboto" onClick={limparItensSelecionados}>Cancelar</button></Link>
        </div>
        </div>
    );
}