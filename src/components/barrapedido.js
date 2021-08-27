export default function BarraPedido({categoriasSelecionadas}) {

    function fecharPedido() {
        let fechar = true;
        for(let key of Object.keys(categoriasSelecionadas)){
            if(categoriasSelecionadas[key] === 0) fechar = false;
        }

        console.log(categoriasSelecionadas);

        return fechar;
    }

    return (
        <div className="barra-pedido">
        
        {fecharPedido() ? <div className="pedido">
            <button className="roboto fechar-pedido">Fechar pedido</button>
        </div> : <div className="pedido">
            <button className="roboto">Selecione os 3 itens para fechar o pedido</button>
        </div>}

    </div>
    );
}