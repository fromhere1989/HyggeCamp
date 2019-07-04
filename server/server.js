const express = require ('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../dist')));


//Сервер
app.listen(80, function() {
  console.log('On port 1234')
});
