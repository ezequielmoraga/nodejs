
//Modelo y carga de datos iniciales
const{Sequelize,Model,DataTypes}=require('sequelize');

const options={loggin: false};//para no hacer login //super borrador en desarrollo
const sequelize = new Sequelize("sqlite:dblogistica.sqlite",options);//especifico tipo de DDBB

class Choferes extends Model{}
Choferes.init(
   {//estructura de tabla
       id_chofer:   {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,//aca agregamos que esta es primaryKey
    },
       nombre:      DataTypes.STRING,  
       apellido:    DataTypes.STRING,
       dni:         DataTypes.STRING,
       licencia:    DataTypes.STRING,
       edad:        DataTypes.INTEGER,
       
   },
   {
    timestamps: false,
    sequelize, modelName:"Choferes"
    }    
);

class Vehiculos extends Model{}
Vehiculos.init(
   {//estructura de tabla
       id_vehiculo: {
        type: DataTypes.INTEGER ,
        allowNull: false,
        primaryKey: true,//aca agregamos que esta es primaryKey
    },  
       patente:      DataTypes.STRING,  
       carga_util:    DataTypes.REAL,
       licencia_minima:    DataTypes.STRING,
       en_uso:        DataTypes.INTEGER,
   },
   
   {
    timestamps: false,
    sequelize, modelName:"Vehiculos"
    }
);

//Podria ser un alias de  relacion , pero no se puede llenar con bulkCreate sino.
const Habilitaciones = sequelize.define('Habilitaciones', {
    id_chofer: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    id_vehiculo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    }
},
{
    timestamps: false,
    sequelize, modelName:"Habilitaciones"
    }
);

Choferes.belongsToMany(Vehiculos,{
    as:'Puede conducir',//nombre de la relacion de ida
    foreignKey: 'id_chofer',// extranjera de origen
    otherKey:'id_vehiculo',//extranjera de llegada
    through:'Habilitaciones' //Nombre de la tabla intermedia
});

Vehiculos.belongsToMany(Choferes,{
    as:'Puede ser conducido por',//nombre de la relacion de ida
    foreignKey: 'id_vehiculo',// extranjera de origen
    otherKey:'id_chofer',//extranjera de llegada
    through:'Habilitaciones' //Nombre de la tabla intermedia
});

//para poder importar los modelos desde otro archivo
module.exports = sequelize;

//NO SE CARGAN MAS LOS VALORES PARA DEBUG ACA!!!! se hace npm run seed
