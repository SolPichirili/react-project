import './ItemDetailContainer.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getFirestore } from '../../services/firebaseService';
import Loading from '../../components/Loading/Loading';
import ItemDetail from '../../components/ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
    const [items, setItems] = useState({})
    const [loading, setLoading] = useState(true);
    const { id } = useParams()

    useEffect(() => {

        const dbQuery = getFirestore()

        dbQuery.collection('items').doc(id).get()
            .then(resp => {
                setLoading(false);
                setItems({ ...resp.data(), id: resp.id })
            })
    }, [id])

    return (
        <div className="flex">
            {loading ? <Loading /> : <ItemDetail item={items} />}
        </div>)
}

export default ItemDetailContainer;