const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 3000;
const configDB =  {
  host: "db",
  user: "root",
  password: "root",
  database: "db"
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const mysql = require("mysql");
const connection = mysql.createConnection(configDB);

app.get('/', (req, res) => {
  connection.query('select * from users', (err, results) => {
    if (err) throw new Error(err);

    if (!results.length) {
      res.status(400).send("Nenhum usuário registrado");
    }

    const userName = results[0].name;

    res.send(`<h1>Full Cycle Rocks!!</h1>\n\nO nome do usuário registrado é ${userName}`);
  })

})

app.listen(port, () => {
  console.log(`Node app is running on port ${port}`)
})