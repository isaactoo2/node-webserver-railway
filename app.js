import express from 'express';
import hbs from 'hbs';
import * as dotenv from 'dotenv';

import path, { dirname } from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config()

const app = express();
const port = process.env.PORT

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')


 // Servir contenido estatico
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Isaac',
        titulo: 'Curso de node'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Isaac',
        titulo: 'Curso de node'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Isaac',
        titulo: 'Curso de node'
    })
})

app.get('*', (req, res) => {
    res.sendFile(__dirname+'/public/404.html')
})

app.listen(port)