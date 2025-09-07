

const{Sequelize,Model,DataTypes}=require('sequelize');// tenes que tener instalada sequelize
//multiasignacion definiendo 3 objetos a la vez.


//definir conexion a la DB
const options={loggin: false};//para no hacer login
const sequelize = new Sequelize("sqlite:db.sqlite",options);
//tipo sqlite
//archivo db.sqlite en el mismo directorio
//optiones

class User extends Model{}
User.init(
    {//estructura de tabla

        name: {
            type: DataTypes.STRING,  
            unique:{msg: "Ya existe ese nombre"},
            allowNull: false, //no es valido nombre nulo
            validate :{
                isAlphanumeric: {args: true,msg: "nombre invalido"}
            }
        },
        age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            isINt: true,
            min:{args: [0],msg: "edad menor q 0"},
            max:{args: [140],msg: "edad mayor a 140"}
        }
        }
    },
    {sequelize, modelName:"User"}
        //el modelName lo podes cambiar para que sea distinto al de la clase ej: tablaUsers
);


sequelize.sync(); //construye tabla vacia!