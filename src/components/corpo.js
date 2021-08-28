import Categorias from "./categorias";
import aguaDeCoco from "../imagens/agua-de-coco.jpg";
import churrasco from "../imagens/churrasco.jpg";
import coca from "../imagens/coca.jpg";
import guaranaAmazonia from "../imagens/guarana-amazonia.jpg";
import guaranaJesus from "../imagens/guarana-jesus.jpg";
import petitGateau from "../imagens/petit-gateau.jpg";
import prato from "../imagens/prato.jpeg";
import pudim from "../imagens/pudim.jpg";
import salada from "../imagens/salada.jpg";
import sobremesaDeMorango from "../imagens/sobremesa-de-morango.jpeg";
import sorvete from "../imagens/sorvete.jpg";
import strogonoffDeFrango from "../imagens/strogonoff-de-frango.jpg";

let categorias = [
    {
        categoria: "pratos",
        frase: "Primeiro, seu prato",
        itens: [
            {
                nome: "Frango Yin Yang",
                descricao: "Um pouco de batata, um pouco de salada",
                preco: "R$ 14,90",
                image: prato
            },
            {
                nome: "Strogonoff de Frango",
                descricao: "Strogonoff de frango com batata palha e arroz",
                preco: "R$ 18,90",
                image: strogonoffDeFrango
            },
            {
                nome: "Churrasco",
                descricao: "Churrasco, arroz e acompanhamento",
                preco: "R$ 20,90",
                image: churrasco
            },
            {
                nome: "Salada",
                descricao: "Uma salada deliciosa",
                preco: "R$ 16,90",
                image: salada
            }
        ]
    },
    {
        categoria: "bebidas",
        frase: "Agora, sua bebida",
        itens: [
            {
                nome: "Coquinha gelada",
                descricao: "Lata 350ml",
                preco: "R$ 4,90",
                image: coca
            },
            {
                nome: "Guaraná Jesus",
                descricao: "Refrigerante de qualidade do Maranhão",
                preco: "R$ 3,90",
                image: guaranaJesus
            },
            {
                nome: "Água de coco",
                descricao: "Água de coco natural e gelada",
                preco: "R$ 5,90",
                image: aguaDeCoco
            },
            {
                nome: "Guaraná da Amazônia",
                descricao: "Um delicioso guaraná da amazônia",
                preco: "R$ 7,90",
                image: guaranaAmazonia
            }
        ]
    },
    {
        categoria: "sobremesas",
        frase: "Por fim, sua sobremesa",
        itens: [
            {
                nome: "Pudim",
                descricao: "Apenas pudim",
                preco: "R$ 7,90",
                image: pudim
            },
            {
                nome: "Sorvete",
                descricao: "Iogurte grego, o melhor sabor de todos",
                preco: "R$ 10,90",
                image: sorvete
            },
            {
                nome: "Petit-gateau",
                descricao: "Bolo com sorvete",
                preco: "R$ 19,90",
                image: petitGateau
            },
            {
                nome: "Sobremesa de morango",
                descricao: "Sobremesa de chocolate com morango e chantilly",
                preco: "R$ 14,90",
                image: sobremesaDeMorango
            }
        ]
    }
]

export default function Corpo({itensSelecionados, setItensSelecionados}){
    return(
        <div className="corpo">
            {categorias.map((categoria, i) => <Categorias pratos={categoria} key={i} itensSelecionados={itensSelecionados} setItensSelecionados={setItensSelecionados}/>)}
        </div>
    );
}