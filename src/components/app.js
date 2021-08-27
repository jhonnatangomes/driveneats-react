import Topo from "./topo";
import Corpo from "./corpo";
import BarraPedido from "./barrapedido";
import { useState } from "react";

export default function App(){

    const [categoriasSelecionadas, setCategoriasSelecionadas] = useState({pratos: 0, bebidas: 0, sobremesas: 0});

    return (
        <>
        <Topo />
        <Corpo categoriasSelecionadas={categoriasSelecionadas} setCategoriasSelecionadas={setCategoriasSelecionadas}/>
        <BarraPedido categoriasSelecionadas={categoriasSelecionadas}/>
        </>
    );
}