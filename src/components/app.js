import Topo from "./topo";
import Corpo from "./corpo";
import BarraPedido from "./barrapedido";
import React, { useState } from "react";
import "../css/reset.css";
import "../css/styles.css";

export default function App(){

    const [itensSelecionados, setItensSelecionados] = useState({
        pratos: [], bebidas: [], sobremesas: []
    });

    return (
        <>
        <Topo />
        <Corpo itensSelecionados={itensSelecionados} setItensSelecionados={setItensSelecionados}/>
        <BarraPedido itensSelecionados={itensSelecionados}/>
        </>
    );
}