import { Link } from "react-router-dom";

const Item = ({ item }) => {

  return (
    item.map(item =>
      <>
        <div className="card tarjeta col-3">
          <img className="card-img-top img-fluid" src={item.url1} alt="tapa-de-comics" />
          <div className="card-body">
            <h5>{item.titulo}</h5>
            <p className="card-text">
              {item.descripcion}
            </p>
            <p className="card-text">
              $ {item.precio}
            </p>
            <div className="text-center">
              <Link to={`/item/${item.id}`}><button className="verMas">Ver más</button></Link>
            </div>
          </div>
        </div>
      </>
    )
  )
}

export default Item;