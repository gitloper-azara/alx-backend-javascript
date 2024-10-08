const express = require('express');
const routes = require('./routes/index');

const port = 1245;
const app = express();

app.use('/', routes);
app.use('/students', routes);
app.use('/students/:major', routes);

app.listen(port);

export default app;
