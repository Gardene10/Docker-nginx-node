const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)

app.get('/', (req, res) => {
    connection.query('SELECT name FROM people', (error, results, fields) => {
        if (error) throw error;
        const names = results.map(result => result.name).join(', ');
        res.send(`<h1>Full Cycle Rocks!</h1><p>Lista de nomes cadastrados: ${names}</p>`);
    });
});

app.listen(port, () => {
    console.log('Rodando na porta: ' + port)
});
 

















 