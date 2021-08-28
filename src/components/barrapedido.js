export default function BarraPedido({categoriasSelecionadas}) {

    let URL_WHATSAPP = "https://wa.me/5517997372284?text=";
    function fecharPedido() {
        let fechar = true;
        for(let key of Object.keys(categoriasSelecionadas)){
            if(categoriasSelecionadas[key].length === 0) fechar = false;
        }

        console.log(categoriasSelecionadas);
        if(fechar) concluirPedido();
        return fechar;
    }

    function concluirPedido() {
        let text = "";
        let total = 0;

        for(let key of Object.keys(categoriasSelecionadas)){
            text += `${key[0].toUpperCase() + key.slice(1)} : `;
            for(let item of categoriasSelecionadas[key]){
                text += `${item.nome} ${item.quantidade > 1 ? `(${item.quantidade}x)` : ``}\n`;
                total += Number(item.preco.slice(3).replace(",", ".")) * item.quantidade;
            }
        }

        text += `Total: ${total.toFixed(2)}`;
        URL_WHATSAPP += encodeURIComponent(text);
    }


    return (
        <div className="barra-pedido">
        
        {fecharPedido() ? <div className="pedido">
            <button className="roboto fechar-pedido"><a href={URL_WHATSAPP}>Fechar pedido</a></button>
        </div> : <div className="pedido">
            <button className="roboto">Selecione os 3 itens para fechar o pedido</button>
        </div>}

    </div>
    );
}