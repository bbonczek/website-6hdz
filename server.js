const express = require("express");
const aboutUsRouter = require('./src/backend/routers/aboutUsRouter');

let app = express();

app.set('port', (process.env.PORT || 3001));

app.use(express.static('public'));

app.use('/api', aboutUsRouter);

app.listen(app.get('port'), () => {
    console.log(`App listening on port ${app.get('port')}`);
});





