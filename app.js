var app = require('./app_config.js');

var userController = require('./controllers/userController.js')

var validator = require('validator');

// Primeira Tela
app.get('/', function (req, res) {
    
    res.end('Servidor iniciado!');
});

// Get users no banco
app.get('/users', function (req, res) {

    userController.list(function(resp) {
        res.json(resp);
    });
});

// Get user pelo id 
app.get('/users/:id', function (req, res) {

    var id = validator.trim(validator.escape(req.param('id')));

    userController.user(id, function(resp) {
        res.json(resp);
    });
});

// Post new user no banco
app.post('/users', function (req, res) {

    var fullname = validator.trim(validator.escape(req.param('fullname')));
    var email = validator.trim(validator.escape(req.param('email')));
    var password = validator.trim(validator.escape(req.param('password')));

    userController.save(fullname, email, password, function(resp) {
        res.json(resp);
    });
});

app.put('/users', function (req, res) {
    
    var id = validator.trim(validator.escape(req.param('id')));
    var fullname = validator.trim(validator.escape(req.param('fullname')));
    var email = validator.trim(validator.escape(req.param('email')));
    var password = validator.trim(validator.escape(req.param('password')));

    userController.update(id, fullname, email, password, function(resp) {
        res.json(resp);
    });
});

app.delete('/users/:id', function (req, res) {
    
    var id = validator.trim(validator.escape(req.param('id')));

    userController.delete(id, function(resp) {
        res.json(resp);
    });
});