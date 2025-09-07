const { Sequelize, Model, DataTypes } = require('sequelize');

const Op = Sequelize.Op;
const options = { logging: false};
const sequelize = new Sequelize("sqlite:db.sqlite", options);

class User extends Model {}

User.init(
    { name: DataTypes.STRING,
    age: DataTypes.INTEGER
    },
    { sequelize, modelName:"User"}
);


(async () => {
    try {
        await sequelize.sync();
        let count = await User.count();
        if (count===0) {
            let c = await User.bulkCreate([
            { name: 'Pit', age: 22},
            { name: 'Eva', age: 23},
            { name: 'Pat', age: 30}
        ]);
        console.log(` DB created with ${c.length} elems`);
    } else { console.log(` DB exists & has ${count} elems`); };

    let x = (await User.findAll({ where: { name: {[Op.substring]: 'a'}}}))[1].age;

    } catch (err) { console.log(err) };
})();