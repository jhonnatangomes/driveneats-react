export default function Categorias(props){
    return (
        <div className={props.pratos.categoria}>

            <p className="righteous categoria">{props.pratos.frase}</p>

            <div className="container-itens">

                {props.pratos.itens.map((item, i) => <Item item={item} key={i}/>)}

            </div>


        </div>
    );
}

function Item(props) {
    return (
        <div className="item roboto prato" onclick="selecionar_prato(this);">
                    <img src={props.item.image} alt={props.item.descricao} />
                    <p className="nome-item">{props.item.nome}</p>
                    <p className="descricao-item">{props.item.descricao}</p>
                    <p className="preco">{props.item.preco}</p>
                    <ion-icon name="checkmark-circle"></ion-icon>
                </div>
    );
}