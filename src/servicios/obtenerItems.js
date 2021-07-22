let productos = [{ id: '1', título: 'Cómic The Infinity Gauntlet', precio: '$2000', descripción: 'Escrito por Jim Starley e ilustrado por George Pérez y Ron Lim, cuenta cómo Thanos planea controlar el multiverso con su guantelete y las cinco Gemas del Infinito: Tiempo, Espacio, Mente, Alma, Realidad y Poder.', url: 'http://media.comicbook.com/uploads1/2015/01/the-infinity-gauntlet-4-116906.jpg' },
{ id: '2', título: 'Cómic The Killing Joke', precio: '$3000', descripción: 'Los dibujos en este cómic son de Brian Bolland y sus palabras de Alan Moore. Una historia sobre la locura, la maldad y el bien, pero principalmente sobre las dificultades del héroe y el villano.', url: 'https://i1.wp.com/codigoespagueti.com/wp-content/uploads/2013/12/The-Killing-Joke.jpg?resize=640%2C360&quality=80&ssl=1' },
{ id: '3', título: 'Cómic Maus', precio: '$2000', descripción: 'La historia se desarrolla a partir de las experiencias del propio autor (Art Spiegelman) y las entrevistas a su padre, que narra su vida como judío polaco y superviviente del Holocausto.', url: 'https://www.lavanguardia.com/files/image_948_465/uploads/2018/07/23/5fa432c2c7ee6.jpeg' }
];

const nuevaPromesa = new Promise((resp, err) => {
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

const obtenerItems = () => {
    return nuevaPromesa;
}

export default obtenerItems;