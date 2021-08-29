import './ItemList.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getFirestore } from '../../services/firebaseService';
import Loading from '../Loading/Loading';
import Item from '../Item/Item';

const ItemList = () => {
  const [itemList, setItemList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {

    let db = getFirestore()
    let collection = db.collection('items')

    const dbQuery = categoryId ? collection.where('categoria', '==', categoryId) : collection.orderBy('precio').limit(3);

    dbQuery.get().then(resp => {
        setLoading(false);
        setItemList(resp.docs.map(it => ({ ...it.data(), id: it.id })));
    })
  }, [categoryId])

  return (
    <div className="row comics">
      {loading ? <Loading /> : <Item item={itemList} />}
    </div>
  )
}

export default ItemList;