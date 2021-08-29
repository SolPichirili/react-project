import './OfferList.css';
import { Link } from 'react-router-dom';

const OfferList = ({ offers }) => {
    return (
        offers.map((off, index) =>
            <div className="card tarjeta col-3" key={index}>
                <img className="card-img-top img-fluid" src={off.url1} alt="tapa-de-comics" />
                <div className="card-body">
                    <h5>{off.titulo}</h5>
                    <p className="card-text">
                        {off.descripcion}
                    </p>
                    <p className="card-text">
                        $ {off.precio}
                    </p>
                    <div className="text-center">
                        <Link to={`/item/${off.id}`}><button className="more">Ver más</button></Link>
                    </div>
                </div>
            </div>
        )
    )
}

export default OfferList;