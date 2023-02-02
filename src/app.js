const express = require('express')
const app = express()

app.use(express.json())

const usersDB = [{
    id: 1,
    firstName: "Diego",
    lastName: "Mariscal",
    email: "DiegoAMM@gmail.com",
    password: "root",
    age: 25
},
{
    id: 2,
    firstName: "Cesar",
    lastName: "Mariscal",
    email: "CesarAMM@gmail.com",
    password: "root",
    age: 35
}]

let baseId = 3

app.get('/', (req, res) => {
    res.json({
        message: 'its alive!!:D'
    })
})

app.get('/users', (req, res) => {
    res.json(usersDB)
})

app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id)
    const data = usersDB.find((user) => id === user.id)
    if (data) {
        res.json(data)
    } else {
        res.status(404).json({
            message: 'user not found'
        })
    }
})

app.post('/users', (req, res) => {
    const data = req.body

    const newUser = {
        id: baseId++,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        age: data.age
    }
    usersDB.push(newUser)
    res.json(newUser)

})

app.listen(9000, () => {
    console.log('server started at port 9000')
})



module.exports = app
