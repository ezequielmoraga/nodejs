

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

        name: DataTypes.STRING,  //propiedad de tabla (columna) name
        age: DataTypes.INTEGER  //propiedad de tabla (columna) age
    },
    {sequelize, modelName:"User"}
        //el modelName lo podes cambiar para que sea distinto al de la clase ej: tablaUsers
);


sequelize.sync(); //construye tabla vacia!