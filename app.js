const express = require('express')
const app = express();

// app.get('/',(req,res)=>{
//     res.send('Estoy probando mi primer node')
// })
app.use('/', require('./router'));

app.set('view engine', 'ejs');
app.listen(5000,() => {
    console.log('SERVER corriendo en el puerto http://localhost:5000');
})