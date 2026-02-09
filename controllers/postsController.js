
//importo lista posts da posts.js
const listaPosts = require('../data/postsList')

function index(req, res) {
    res.json({ numeroPosts: listaPosts.length, listaPosts });
    // copiamo la logica dell'index
}

function show(req, res) {
    res.send('Dettagli del post ' + req.params.id);
}

function store(req, res) {
    res.send('Creazione nuovo post');
}

function update(req, res) {
    res.send('Modifica integrale del post ' + req.params.id);
}

function modify(req, res) {
    res.send('Modifica parziale del post ' + req.params.id);
}

function destroy(req, res) {
    res.send('Eliminazione del post ' + req.params.id);
}

// esportiamo tutto
module.exports = { index, show, store, update, destroy, modify }