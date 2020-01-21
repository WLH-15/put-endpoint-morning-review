const express = require('express')
const app = express()
const cors = require('cors')
const ctrl = require('./controller')
const port = 3879

app.use(express.json())
app.use(cors())

// ENDPOINTS
app.get('/api/people', ctrl.getPeople)
app.put('/api/people/:id', ctrl.updatePerson)

app.listen(port, () => console.log(`Server running on ${port}`))

