const ItemDetail = ({título, precio, descripción, url}) => {
    return(<div>
        <img src={url} alt="tapa-del-comic-el-guantelete-del-infinito"></img>
        <p>{título}</p>
        <p>{precio}</p>
        <p>{descripción}</p>
    </div>)
}

export default ItemDetail;