const ItemDetail = ({título, precio, descripción, img}) => {
    return(<div>
        <img src={img} alt="imagen-comic" className="img-fluid imgThanos"></img>
        <h1>{título}</h1>
        <p>{precio}</p>
        <p>{descripción}</p>
    </div>)
}

export default ItemDetail;