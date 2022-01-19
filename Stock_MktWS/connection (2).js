const {Sequelize} =require('sequelize');


const sequelize=new Sequelize({
    host:'localhost',
    database:'stockmarketdb',
    username:'root',
    password:'1234',
    port:3306,
    dialect:'mysql'
});

//Testing the MySQL connection

try{
    sequelize.authenticate();
    console.log('Connection is established successfully')
}catch(error){
    console.log('Error in connecting to the database')
}

module.exports=sequelize;