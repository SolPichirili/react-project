import productos from '../servicios/productos';

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