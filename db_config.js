var db_string = 'mongodb://localhost:27017/aula_restful';
//var db_string = 'mongodb://leandrodlm:9696879654@ds153412.mlab.com:53412/aula_restful';

var mongoose = require('mongoose').connect(db_string);

var db = mongoose.connection;

//mongoose.connect('mongodb://localhost/advisorDemoTestDB', { useMongoClient: true })

db.on('error', console.error.bind(console, 'Error ao conectar no banco'));

db.once('open', function () {
    var userSchema = mongoose.Schema({
        fullname: String,
        email: String,
        password: String,
        created_at: Date
    });

    exports.User = mongoose.model('User', userSchema);
});