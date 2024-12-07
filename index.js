import express from 'express'
import exphbs from 'express-handlebars'
import { sequelize as conn } from "./db/conn.js";

import { router as taskRoutes } from './routes/taskRouters.js';

const app = express()
const port = 3000
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.static('public'))
app.use(express.json())

import { Task } from "../models/Task.js";

app.use('/tasks', taskRoutes)

app.get('/', (req, res) => {
    res.redirect('/tasks')
})

app.use((req, res) => {
    res.render('404')
})

conn.sync().then(() => {
    app.listen(port)
    console.log(`Servidor rodando na porta ${port}!`)
}).catch(e => console.log(e))
