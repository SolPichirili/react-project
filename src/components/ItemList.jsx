import { useEffect, useState } from 'react';
import Item from './Item';

const ItemList = () => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {

    let productos = [{ id: '1', título: 'Cómic The Infinity Gauntlet', precio: '$2000', descripción: 'Cómic de Jim Starlin', url: 'https://cdn.shopify.com/s/files/1/0051/8805/9206/products/marvel-deluxe-guantelete-1_1024x1024@2x.jpg?v=1563397764' },
    { id: '2', título: 'Cómic The Killing Joke', precio: '$3000', descripción: 'Cómic de Alan Moore', url: 'https://cdna.artstation.com/p/assets/images/images/015/439/318/large/pressy-patanik-cover.jpg?1548337090' },
    { id: '3', título: 'Cómic Maus', precio: '$2000', descripción: 'Cómic de Art Spiegelman', url: 'https://lapiedradesisifo.com/wp-content/uploads/2014/05/url53245234.jpg' }
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

    const obtenerPromesa = () => {
      return promesa;
    }

    obtenerPromesa()
      .then(resp => setItemList(resp))
      .catch(err => console.log(err))
      .finally(console.log('Hubo un error pero continuamos'))
  }, [])

  return (
    <div>
      {itemList.map((item) => (
        <Item key={item.id} título={item.título} precio={item.precio} descripción={item.descripción} url={item.url} />
      ))}
    </div>
  )
}

export default ItemList;