import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('nodemvc', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

try {
    sequelize.authenticate()
    console.log('Conectamos ao bd!')
} catch(e) {
    console.log('Não foi possivel conectar!')
    console.log(e)
}