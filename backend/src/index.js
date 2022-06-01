const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://josemauro:omnistack@cluster0.frlgd.mongodb.net/week10?retryWrites=true&w=majority',
                 {useNewUrlParser: true,
                  useUnifiedTopology: true}
                );

app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.json())
app.use(routes);

// Query params: quase sempre no método GET. Usados para ordenação, filtro, paginação)
// Route params: quase sempre utilizados com PUT e DELETE. (identificar um recurso na alteração ou na remoção)
// Body params: quase sempre utlizado com POST e DELETE. (dados para criação ou alteração de um registro)

app.listen(3333);