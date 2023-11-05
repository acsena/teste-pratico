const Sequelize = require ('sequelize');
const sequelize = new Sequelize( 'railway', 'root', '-3BCcCe6bhHcDF-3FGB25Ada6ed5BbD4', {
    host: "viaduct.proxy.rlwy.net",
    dialect: 'mysql'
})

sequelize.authenticate()

