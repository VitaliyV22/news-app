const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize(`postgres://u5cscrfgen43ac:p4d984ac03175524bd61cff987de5a0c6079c6e9b0445d4f8d0a906bad57f099d@
c97r84s7psuajm.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/d193alfvsccdin`, {dialect: "postgres",dialectOptions: {
    ssl: {
        require: true,
        rejectUnauthorized: false
    }
 },})

//checking if connection is done
    sequelize.authenticate().then(() => {
        console.log(`Database connected to heroku`)
    }).catch((err) => {
        console.log(err)
    })

    const db = {}
    db.Sequelize = Sequelize
    db.sequelize = sequelize

//connecting to model
db.users = require('./userModel') (sequelize, DataTypes)

//exporting the module
module.exports = db