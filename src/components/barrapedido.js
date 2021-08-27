export default function BarraPedido({categoriasSelecionadas}) {

    function fecharPedido() {
        let fechar = true;
        for(let key of Object.keys(categoriasSelecionadas)){
            if(categoriasSelecionadas[key].length === 0) fechar = false;
        }

        console.log(categoriasSelecionadas);
        return fechar;
    }

    function concluirPedido() {
        let URL_WHATSAPP = "https://wa.me/5517997372284?text=";
        let text = "Estou testando haha";

        URL_WHATSAPP += encodeURIComponent(text);

        return URL_WHATSAPP;
    }


    return (
        <div className="barra-pedido">
        
        {fecharPedido() ? <div className="pedido">
            <button className="roboto fechar-pedido"><a>Fechar pedido</a></button>
        </div> : <div className="pedido">
            <button className="roboto">Selecione os 3 itens para fechar o pedido</button>
        </div>}

    </div>
    );
}