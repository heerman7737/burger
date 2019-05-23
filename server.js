// Pull in required dependencies
let express = require('express');
let bodyParser = require('body-parser');
let methodOverride = require('method-override');
let port = process.env.PORT || 3000;

let app = express();
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('_method'));
let exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
let routes = require('./controllers/');

app.use('/', routes);

app.listen(port);