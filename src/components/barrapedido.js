import {Link} from "react-router-dom";

export default function BarraPedido({itensSelecionados, setItensSelecionados}) {

    let URL_WHATSAPP = "https://wa.me/5517997372284?text=";
    function fecharPedido() {
        let fechar = true;
        for(let key of Object.keys(itensSelecionados)){
            if(itensSelecionados[key].length === 0) fechar = false;
        }

        console.log(itensSelecionados);
        // if(fechar) escreverConfirmacao();
        return fechar;
    }

    function concluirPedido() {
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

    // function escreverConfirmacao() {
    //     let itens = [];
    //     for(let key of Object.keys(itensSelecionados)){
    //         for(let item of itensSelecionados[key]){
    //             itens.push(item);
    //         }
    //     }
    // }

    return (
        <div className="barra-pedido">
        {fecharPedido() ? <Link to={{pathname: "/revisar", state: itensSelecionados}}><div className="pedido">
        <button className="roboto fechar-pedido">Fechar pedido</button>
        </div></Link> : <div className="pedido">
            <button className="roboto">Selecione os 3 itens para fechar o pedido</button>
        </div>}
    </div>
    );
}


