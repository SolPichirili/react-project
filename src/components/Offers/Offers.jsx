import './Offers.css';
import { useEffect, useState } from 'react';
import { getFirestore } from '../../services/firebaseService';
import OfferList from '../OfferList/OfferList';

const Offers = () => {
    const [offer, setOffer] = useState([])

    useEffect(() => {

        let db = getFirestore()
        let collection = db.collection('items')

        const dbQuery = collection.where('precio', '<', 2000)

        dbQuery.get().then(resp => {
            setOffer(resp.docs.map(it => ({ ...it.data(), id: it.id })
            ))
        })
    }, [])

    return (
        <div className="comics">
            <OfferList offers={offer} />
        </div>
    )
}

export default Offers;