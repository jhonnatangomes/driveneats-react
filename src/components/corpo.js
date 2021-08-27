import Categorias from "./categorias";

let pratos = [
    {
        categoria: "pratos",
        frase: "Primeiro, seu prato",
        itens: [
            {
                nome: "Frango Yin Yang",
                descricao: "Um pouco de batata, um pouco de salada",
                preco: "R$ 14,90",
                image: "imagens/prato.jpeg"
            },
            {
                nome: "Strogonoff de Frango",
                descricao: "Strogonoff de frango com batata palha e arroz",
                preco: "R$ 18,90",
                image: "imagens/strogonoff-de-frango.jpg"
            },
            {
                nome: "Churrasco",
                descricao: "Churrasco, arroz e acompanhamento",
                preco: "R$ 20,90",
                image: "imagens/churrasco.jpg"
            },
            {
                nome: "Salada",
                descricao: "Uma salada deliciosa",
                preco: "R$ 16,90",
                image: "imagens/salada.jpg"
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
                image: "imagens/coca.jpg"
            },
            {
                nome: "Guaraná Jesus",
                descricao: "Refrigerante de qualidade do Maranhão",
                preco: "R$ 3,90",
                image: "imagens/guarana-jesus.jpg"
            },
            {
                nome: "Água de coco",
                descricao: "Água de coco natural e gelada",
                preco: "R$ 5,90",
                image: "imagens/agua-de-coco.jpg"
            },
            {
                nome: "Guaraná da Amazônia",
                descricao: "Um delicioso guaraná da amazônia",
                preco: "R$ 7,90",
                image: "imagens/guarana-amazonia.jpg"
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
                image: "imagens/pudim.jpg"
            },
            {
                nome: "Sorvete",
                descricao: "Iogurte grego, o melhor sabor de todos",
                preco: "R$ 10,90",
                image: "imagens/sorvete.jpg"
            },
            {
                nome: "petit-gateau",
                descricao: "Bolo com sorvete",
                preco: "R$ 19,90",
                image: "imagens/petit-gateau.jpg"
            },
            {
                nome: "Sobremesa de morango",
                descricao: "Sobremesa de chocolate com morango e chantilly",
                preco: "R$ 14,90",
                image: "imagens/sobremesa-de-morango.jpeg"
            }
        ]
    }
]

export default function Corpo({categoriasSelecionadas, setCategoriasSelecionadas}){
    return(
        <div className="corpo">
            {pratos.map((prato, i) => <Categorias pratos={prato} key={i} categoriasSelecionadas={categoriasSelecionadas} setCategoriasSelecionadas={setCategoriasSelecionadas}/>)}
        </div>
    );
}