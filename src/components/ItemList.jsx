import { useEffect, useState } from 'react';
import Item from './Item';
import tapaguantelete from '../imagenes/tapaguantelete.png';
import tapabroma from '../imagenes/tapabroma.png';
import tapamaus from '../imagenes/tapamaus.png';

const ItemList = () => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {

    let productos = [{ id: '1', título: 'Cómic The Infinity Gauntlet', precio: '$2000', descripción: 'Cómic de Jim Starlin', url:tapaguantelete },
    { id: '2', título: 'Cómic The Killing Joke', precio: '$3000', descripción: 'Cómic de Alan Moore', url: tapabroma },
    { id: '3', título: 'Cómic Maus', precio: '$2000', descripción: 'Cómic de Art Spiegelman', url: tapamaus }
    ];

    const promesa = new Promise((resp, err) => {
      let state = 200;
      if (state === 200) {
        setTimeout(() => {
          resp(productos)
        }, 2000);
      } else {
        setTimeout(() => {
          err(console.log('no funciona'))
        }, 2000);
      }
    });

    promesa
      .then(resp => setItemList(resp))
      .catch(err => console.log(err))
      .finally(console.log('Hubo un error pero continuamos'))
  }, [])

  return (
    <div className="row comics">
      {itemList.map((item) => (
        <Item key={item.id} título={item.título} precio={item.precio} descripción={item.descripción} url={item.url} />
      ))}
    </div>
  )
}

export default ItemList;