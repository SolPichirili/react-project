const ItemDetail = ({título, precio, descripción, url}) => {
    return(<div>
        <img src={url} alt="imagen-comic"></img>
        <p>{título}</p>
        <p>{precio}</p>
        <p>{descripción}</p>
    </div>)
}

export default ItemDetail;