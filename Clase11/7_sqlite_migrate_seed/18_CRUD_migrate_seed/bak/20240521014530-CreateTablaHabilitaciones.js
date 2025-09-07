'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable(
      'Habilitaciones',
     { id_chofer: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    id_vehiculo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    }
  },
     {
      sync: {force:true} //Forzar sincronicacion: definicion modelos  migracion y base datos
    }
    );


  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable('Habilitaciones');
  }
};
