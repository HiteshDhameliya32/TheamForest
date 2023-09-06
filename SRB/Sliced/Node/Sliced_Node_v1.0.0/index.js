const express = require('express')



const app = express();
const port = 7000;

app.use(express.json())
app.set('view engine', 'ejs');
// app.use('/api/auth', require('./routes/auth.js'));
// app.use('/api/accountmaster', require('./routes/accountMaster.js'));
// app.use('/api/accountgroupmaster', require('./routes/accountGroupMaster.js'));
// app.use('/api/party', require('./routes/party.js'));
// app.use('/api/utilities', require('./routes/Utilities'));
// app.use('/api/transaction', require('./routes/transaction'));


app.get('/', function (req, res) {
  res.render('Sample.html');
});


app.listen(port, () => {
    console.log(`This app is listening at http://localhost:${port}`)
})




