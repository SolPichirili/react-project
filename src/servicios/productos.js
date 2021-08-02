import tapaguantelete from '../imagenes/tapaguantelete.png';
import tapabroma from '../imagenes/tapabroma.png';
import tapamaus from '../imagenes/tapamaus.png';
import thanosdetalle from '../imagenes/thanosdetalle.png';
import jokerdetalle from '../imagenes/jokerdetalle.png';
import mausdetalle from '../imagenes/mausdetalle.png';

const productos = [
    {
        id: '1', 
        título: 'Cómic The Infinity Gauntlet', 
        precio: '$2000', 
        descripción: 'Cómic de Jim Starlin',
        descripción2: 'Escrito por Jim Starley e ilustrado por George Pérez y Ron Lim, cuenta cómo Thanos planea controlar el multiverso con su guantelete y las cinco Gemas del Infinito: Tiempo, Espacio, Mente, Alma, Realidad y Poder.', 
        img: tapaguantelete,
        img2: thanosdetalle,
        categoria:"Marvel"
    },

    {
        id: '2', 
        título: 'Cómic The Killing Joke', 
        precio: '$3000', 
        descripción: 'Cómic de Alan Moore',
        descripción2: 'Los dibujos en este cómic son de Brian Bolland y sus palabras de Alan Moore. Una historia sobre la locura, la maldad y el bien, pero principalmente sobre las dificultades del héroe y el villano.',
        img: tapabroma,
        img2: jokerdetalle, 
        categoria:"DC"
    },

    {
        id: '3', 
        título: 'Cómic Maus', 
        precio: '$2000', 
        descripción: 'Cómic de Art Spiegelman',
        descripción2: 'La historia se desarrolla a partir de las experiencias del propio autor (Art Spiegelman) y las entrevistas a su padre, que narra su vida como judío polaco y superviviente del Holocausto.', 
        img: tapamaus,
        img2: mausdetalle, 
        categoria:"Otros"
    }
]

export default productos;