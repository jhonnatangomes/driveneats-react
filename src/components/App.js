import Topo from "./topo/Topo";
import Corpo from "./corpo/Corpo";
import BarraPedido from "./barrapedido/BarraPedido";
import Confirmacao from "./confirmacao/Confirmacao";
import React, { useState } from "react";
import "../css/reset.css";
import "../css/styles.css";
import {
    BrowserRouter as Router,
    Switch, 
    Route
} from "react-router-dom";

export default function App(){

    const [itensSelecionados, setItensSelecionados] = useState({
        pratos: [], bebidas: [], sobremesas: []
    });

    return (
        <Router>
            <Topo />
            <Switch>
                <Route path="/revisar">
                    <Confirmacao itensSelecionados={itensSelecionados} setItensSelecionados={setItensSelecionados}/>
                </Route>
                <Route path="/">
                    <Corpo itensSelecionados={itensSelecionados} setItensSelecionados={setItensSelecionados}/>
                    <BarraPedido itensSelecionados={itensSelecionados} setItensSelecionados={setItensSelecionados}/>
                </Route>
            </Switch>
        </Router>
    );
}