import './ItemList.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getFirestore } from '../../services/firebaseService';
import Item from '../Item/Item';

const ItemList = () => {
  const [itemList, setItemList] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {

    let db = getFirestore()
    let collection = db.collection('items')

    const dbQuery = categoryId ? collection.where('categoria', '==', categoryId) : collection;

    dbQuery.get().then(resp => {
      setItemList(resp.docs.map(it => ({ ...it.data(), id: it.id })))
    })
  }, [categoryId])

  return (
    <div className="row comics">
      <Item item={itemList} />
    </div>
  )
}

export default ItemList;