import { useEffect, useState } from 'react';
import Item from './Item';
import tapaguantelete from '../imagenes/tapaguantelete.png';
import tapabroma from '../imagenes/tapabroma.png';
import tapamaus from '../imagenes/tapamaus.png';
import { useParams } from 'react-router';

const ItemList = () => {
  const [itemList, setItemList] = useState([]);
  const {categoriaId} = useParams()

  useEffect(() => {

    let productos = [{ id: '1', título: 'Cómic The Infinity Gauntlet', precio: '$2000', descripción: 'Cómic de Jim Starlin', img: tapaguantelete, categoria:"Marvel" },
    { id: '2', título: 'Cómic The Killing Joke', precio: '$3000', descripción: 'Cómic de Alan Moore', img: tapabroma, categoria:"DC" },
    { id: '3', título: 'Cómic Maus', precio: '$2000', descripción: 'Cómic de Art Spiegelman', img: tapamaus, categoria:"Otros"}
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

    if(categoriaId===undefined){
      promesa
      .then(resp => setItemList(resp))
      .catch(err => console.log(err))
      .finally(console.log('Hubo un error pero continuamos'))
    } else {
      promesa
      .then(resp => setItemList(resp.filter(it => it.categoria===categoriaId )))
      .catch(err => console.log(err))
      .finally(console.log('Hubo un error pero continuamos'))
    }

    
  }, [categoriaId])

  return (
    <div className="row comics">
      {itemList.map((item) => (
        <Item id={item.id} key={item.id} título={item.título} precio={item.precio} descripción={item.descripción} img={item.img} />
      ))}
    </div>
  )
}

export default ItemList;