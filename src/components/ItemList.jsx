import { useEffect, useState } from 'react';
import Item from './Item';
import { useParams } from 'react-router';
import productos from '../servicios/productos';
import { Spinner } from 'react-bootstrap';

const ItemList = () => {
  const [itemList, setItemList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams()

  useEffect(() => {

    setLoading(true)

    const promesa = new Promise((resp, err) => {
      let state = 200;
      if (state === 200) {
        setTimeout(() => {
          setLoading(false);
          resp(productos)
        }, 2000);
      } else {
        setTimeout(() => {
          err(console.log('no funciona'))
        }, 2000);
      }
    });

    if (categoriaId === undefined) {
      promesa
        .then(resp => setItemList(resp))
        .catch(err => console.log(err))
        .finally(console.log('Hubo un error pero continuamos'))
    } else {
      promesa
        .then(resp => setItemList(resp.filter(it => it.categoria === categoriaId)))
        .catch(err => console.log(err))
        .finally(console.log('Hubo un error pero continuamos'))
    }


  }, [categoriaId])

  return (
    <div className="row comics">
      {loading && <Spinner animation="border" role="status">
        <span className="visually-hidden"></span>
      </Spinner>}
      {!loading && itemList.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>


  )
}

export default ItemList;