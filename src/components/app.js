import Topo from "./topo";
import Corpo from "./corpo";
import BarraPedido from "./barrapedido";
import React, { useState } from "react";

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