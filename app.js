const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use('/', (req, res, next) =>{
    res.status(404);
    res.send('Page not found');
})
app.listen("3349");