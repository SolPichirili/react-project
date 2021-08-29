import './Offers.css';
import { useEffect, useState } from 'react';
import { getFirestore } from '../../services/firebaseService';
import Loading from '../Loading/Loading';
import OfferList from '../OfferList/OfferList';

const Offers = () => {
    const [offer, setOffer] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        let db = getFirestore()
        let collection = db.collection('items')

        const dbQuery = collection.where('precio', '<', 2000)

        dbQuery.get().then(resp => {
            setLoading(false);
            setOffer(resp.docs.map(it => ({ ...it.data(), id: it.id })
            ))
        })
    }, [])

    return (
        <div className="comics">
            {loading ? <Loading /> : <OfferList offers={offer} />}
        </div>
    )
}

export default Offers;