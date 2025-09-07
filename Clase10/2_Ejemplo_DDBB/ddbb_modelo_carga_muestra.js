const {Sequelize,Model,DataTypes} = require('sequelize');

const options ={logging: false}; //explicar

const sequelize = new Sequelize("sqlite:db.sqlite",options);


class User extends Model{}


User.init(
{
    name: {
        type: DataTypes.STRING,
        unique:{msg:"Ya exite el nom,bre"},
        allowNull: false,
        validate:{
            isAlphanumeric:{args: true,msg:"invalido"}
        }
    },
    age:
    {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            isInt: true,
            min:{args: [0],msg:"Edad menor q 0"},
            max:{args: [140],msg:"Edad mayor q 140"}
        }
    }
},
{sequelize}  //podria poner un modelName

);



//()();  funcion inmediatamente ejecutada

//async para tener promesas y await dentro

(async()=>{

    try{
        //Como el sync() es promesificado, hay que poner el await para que espere a que siga

        await sequelize.sync(); //inicializa el modelo en la base de datos
        let count = await User.count();//consulto cuantos registros hay

        //si no hay agreo los registros
        if(count===0)
        {
            let c = await User.bulkCreate([
                {name: 'Peter',age:"22"},
                {name: 'Jorge',age:"33"},
                {name: 'Juan',age:"44"}
            ]);//relleno con datos
            process.stdout.write(`BBDD creada con ${c.length} elementos\n\n`);
        }
        else
        {
            process.stdout.write(`BBDD ya existe y tiene ${count} elementos\n\n`);
        };
    
    
        let users = await User.findAll();
        //traigo un array con todos los registros
        //lo itero con foreach iterando con u y muestro todo
        users.forEach(u=>
            console.log(`${u.name} tiene ${u.age} años`)
        );
    
    
    
    }catch(err)
    {
    console.log(err);
    };
    
    
    
    
    })();


    //para borrar la db, elimina el db.sqlite