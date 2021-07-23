import { Link } from "react-router-dom";

const Item = ({ id, título, descripción, precio, img }) => {

  return (
    <div className="card tarjeta col-3">
      <img className="card-img-top img-fluid" src={img} alt="tapa-de-comics" />
      <div className="card-body">
        <h5>{título}</h5>
        <p className="card-text">
          {descripción}
        </p>
        <p className="card-text">
          {precio}
        </p>
        <div className="text-center">
        <Link to={`/item/${id}`}><button className="verMas">Ver más</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Item;