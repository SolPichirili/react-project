import './Item.css'
import { Link } from 'react-router-dom';

const Item = ({ item }) => {

  return (
    item.map((item, index) =>
      <div className="card tarjeta col-3" key={index}>
        <img className="card-img-top img-fluid rounded img" src={item.url1} alt="tapa-de-comics" />
        <div className="card-body">
          <h5>{item.titulo}</h5>
          <p className="card-text">
            {item.descripcion}
          </p>
          <p className="card-text">
            $ {item.precio}
          </p>
          <div className="text-center">
            <Link to={`/item/${item.id}`}><button className="more">Ver más</button></Link>
          </div>
        </div>
      </div>
    )
  )
}

export default Item;