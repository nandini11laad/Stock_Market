const Sequelize=require('sequelize')
const connection=require('./connection')

const db={}

db.RegisterMaster=connection.define('RegisterMaster',{
    RID:{
        type:Sequelize.BIGINT,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    Name:{
        type:Sequelize.STRING
    },
    Email:{
        type:Sequelize.STRING
    },
    Username:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    Password:{
        type:Sequelize.STRING
    },
    Cpassword:{
        type:Sequelize.STRING
    },
    ClientID:{
        type:Sequelize.STRING
    }
},{
    timestamps:false,
    freezeTableName:true,
    hasTrigger:true
});

db.Sector=connection.define('Sector',{
    SID:{
        type:Sequelize.BIGINT,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    Sname:{
        type:Sequelize.STRING
    }  
},{
    timestamps:false,
    freezeTableName:true
});

db.Company=connection.define('Company',{
    CID:{
        type:Sequelize.BIGINT,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    Cname:{
        type:Sequelize.STRING
    }
},{
    timestamps:false,
    freezeTableName:true
});

db.TransactionMaster=connection.define('TransactionMaster',{
    TID:{
        type:Sequelize.BIGINT,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    Nshares:{
        type:Sequelize.BIGINT
    },
    Rate:{
        type:Sequelize.BIGINT
    },
    NetAmt:{
        type:Sequelize.BIGINT
    }
},{
    timestamps:false,
    freezeTableName:true,
    hasTrigger:true
});

db.Sector=db.Sector.hasMany(db.TransactionMaster,{as:"Sector" ,foreignKey:"SID"})
db.Company=db.Company.hasMany(db.TransactionMaster,{as:"Company" ,foreignKey:"CID"})
db.RegisterTransaction=db.RegisterMaster.hasMany(db.TransactionMaster,{as:"RegisterTransaction",foreignKey:"RID"})

module.exports=db;