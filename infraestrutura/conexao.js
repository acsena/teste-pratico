const mysql = require('mysql'); //chamando a dependencia do mysql

const conexao = mysql.createConnection({
    host: '${{RAILWAY_TCP_PROXY_DOMAIN}}',
    port: 16812,
    user: "root",
    password: '{{MYSQL_ROOT_PASSWORD}}',
    database: 'railway',
});

module.exports = conexao; //exportar a conexao com o banco