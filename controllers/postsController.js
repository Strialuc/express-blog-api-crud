
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
    //recupero l'id dall'URL e lo trasformo in un numero con parse int
    const id = parseInt(req.params.id)
    //metodo find per trovare il post usando id
    const post = listaPosts.find((pst) => pst.id === id)
    //valido che il post esista
    if (!post) {
        return res.status(404).json({
            error: 'not found - errore 404',
            message: 'prodotto non trovato'
        });
    }
    //rimuovo post con metodo splice 
    listaPosts.splice(listaPosts.indexOf(post), 1);
    // forziamo status secondo convenzioni REST che chiude anche function
    res.sendStatus(204)
}

// esportiamo tutto
module.exports = { index, show, store, update, destroy, modify }