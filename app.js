/*
/order/new => shows a form which will allow customers to create a
new burger. There should be a checklist of all available ingredients
and a "submit order" button. Clicking on the "submit order" button
should submit the customer's order WITHOUT refreshing the page. i.e.,
with an AJAX $.post request.

/orders will show a list of all the pending orders. There should be a
"completed" button beside each order that does another $.post request to your
server and completes the order. Clicking this button should also remove this
order from the list of orders in the browser (again, without refreshing the page).
*/

var express = require('express')
  , mongoose = require('mongoose')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , ingredient = require('./routes/ingredient')
  , order = require('./routes/order');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

mongoose.connect('mongodb://localhost/burgers');

app.get('/', routes.index);
app.get('/ingredient/new', ingredient.new);
app.post('/ingredient/create', ingredient.create);
app.get('/order/new', order.new);
app.get('/orders', order.orders);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
