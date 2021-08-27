import Topo from "./topo";
import Corpo from "./corpo";
import BarraPedido from "./barrapedido";
import { useState } from "react";

export default function App(){

    const [categoriasSelecionadas, setCategoriasSelecionadas] = useState({
        pratos: [], bebidas: [], sobremesas: []
    });

    return (
        <>
        <Topo />
        <Corpo categoriasSelecionadas={categoriasSelecionadas} setCategoriasSelecionadas={setCategoriasSelecionadas}/>
        <BarraPedido categoriasSelecionadas={categoriasSelecionadas}/>
        </>
    );
}