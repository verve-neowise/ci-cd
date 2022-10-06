import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello CI/CD')
})


app.get('/hello', (req, res) => {
    res.send('Byee')
})

app.listen(8080, () => {
    console.log(`Server running on http://localhost:${8080}`)
})
