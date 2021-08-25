import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getFirestore } from '../../services/firebaseService';
import ItemDetail from '../../components/ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [items, setItems] = useState({})
    const { id } = useParams()

    useEffect(() => {

        const dbQuery = getFirestore()

        dbQuery.collection('items').doc(id).get()
            .then(resp => setItems({ ...resp.data(), id: resp.id }))

    }, [id])

    return (
        <div>
            <ItemDetail item={items} />
        </div>)
}

export default ItemDetailContainer;