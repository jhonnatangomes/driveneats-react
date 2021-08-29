import {Link, useLocation} from "react-router-dom";

export default function Confirmacao() {

    const location = useLocation();
    console.log(location);
    let itens = [];
    let total = 0;
    for(let property in location.state){
        for(let item of location.state[property]){
            itens.push(item);
        }
    }
    console.log("update");
    console.log(itens);

    function limparItensSelecionados(){
        for(let property in location.state){
            location.state[property] = [];
        }
    }

    return (
        <div className="tela-confirmacao roboto">
        <p className="righteous titulo-confirmacao">Revise seu pedido</p>
        <div className="itens-confirmacao">
            {/* <div className="item-confirmacao">
                <p>Frango Yin Yang</p>
                <p>R$ 14,90</p>
            </div>
            <div className="item-confirmacao">
                <p>Coquinha gelada</p>
                <p>R$ 4,90</p>
            </div>
            <div className="item-confirmacao">
                <p>Pudim</p>
                <p>R$ 7,90</p>
            </div>
            <div className="item-confirmacao">
                <p className="total-confirmacao">TOTAL</p>
                <p className="total-confirmacao">R$ 27,70</p>
            </div> */}
            {itens.map((item, i) => {
                let preco = Number(item.preco.slice(3).replace(",", "."));
                total += preco * item.quantidade;
                return (<div className="item-confirmacao" key={i}>
                    <p>{item.quantidade > 1 ? `${item.nome} (${item.quantidade}x)` : item.nome}</p>
                    <p>{`R$ ${preco*item.quantidade}`}</p>
                </div>);
            })} 
            <div className="item-confirmacao total-confirmacao">
                    <p>TOTAL</p>
                    <p>{`R$ ${total.toFixed(2)}`}</p>
                </div>
        </div>
        <div className="container-botoes">
            <button className="botao-confirmacao roboto">Tudo certo, pode pedir!</button>
            <Link to="/"><button className="botao-cancelar roboto" onClick={limparItensSelecionados}>Cancelar</button></Link>
        </div>
        </div>
    );
}