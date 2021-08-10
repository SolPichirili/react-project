import { useEffect, useState } from 'react';
import Item from './Item';
import { useParams } from 'react-router';
import { getFirestore } from '../servicios/firebaseServicio';

const ItemList = () => {
  const [itemList, setItemList] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {

    let db = getFirestore()
    let coleccion = db.collection('items')

    const dbQuery = categoriaId ? coleccion.where('categoria', '==', categoriaId) : coleccion;

    dbQuery.get().then(resp => {
      setItemList(resp.docs.map(it => ({ ...it.data(), id: it.id })))
    })
  }, [categoriaId])

  return (
    <div className="row comics">
      <Item item={itemList} />
    </div>
  )
}

export default ItemList;