require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');
const routes = require('./routes');
const db = require('./config/db');
const methodOverride = require('method-override');

const app = express();
const port = 3001;
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());
app.use(methodOverride('_method'));

// app.use(morgan("combined"));
app.engine(
  'hbs',
  handlebars.engine({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
    },
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

routes(app);

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
