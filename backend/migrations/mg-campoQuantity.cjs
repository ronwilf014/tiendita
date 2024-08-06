module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Products', // nombre de la tabla
      'quantity', // nombre del nuevo campo
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
        // otras opciones...
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Products', 'quantity');
  },
};