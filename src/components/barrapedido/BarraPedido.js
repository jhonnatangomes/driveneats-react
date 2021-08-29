import {Link} from "react-router-dom";
import "./barraPedido.css";

export default function BarraPedido({itensSelecionados, setItensSelecionados}) {

    function fecharPedido() {
        let fechar = true;
        for(let key of Object.keys(itensSelecionados)){
            if(itensSelecionados[key].length === 0) fechar = false;
        }
        return fechar;
    }

    return (
        <div className="barra-pedido">
        {fecharPedido() ? <Link to="/revisar"><div className="pedido">
        <button className="roboto fechar-pedido">Fechar pedido</button>
        </div></Link> : <div className="pedido">
            <button className="roboto">Selecione os 3 itens para fechar o pedido</button>
        </div>}
    </div>
    );
}


