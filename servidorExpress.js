const express = require('express');
const app = express();

const Contenedor = require('./Contenedor')
const contenedor = new Contenedor('productos.json')

const PORT = 8080;


app.get('/productos', async (req, res) => {
    const allProducts = await contenedor.getAll()
    res.json(allProducts)
})

app.get('/productosRandom', async (req, res) =>{
    const allProducts = await contenedor.getAll()
    const id = allProducts.length;
    const numeroRandom = generateRandomNuber(1, id)
    const productoRandom = await contenedor.getById(numeroRandom)

    res.json(productoRandom);
})

const generateRandomNuber = (min, max) => {
    return Math.floor((Math.random()*(max+1 - min)) + min)
}

app.listen(PORT, () => {
    console.log(` El servidor esta corriendo en el puerto ${PORT} `)
})