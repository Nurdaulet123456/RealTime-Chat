const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const authRoute = require('./routers/auth')

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());


app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.use('/auth', authRoute)

app.listen(PORT, () => console.log('listening on port ' + PORT));