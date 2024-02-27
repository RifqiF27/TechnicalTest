"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const products = [
      {
        merk: "Toyota",
        type: "SUV",
        stock: 100,
        price: 220000000,
        description: "sun roof",
      },
      {
        merk: "Suzuki",
        type: "SUV",
        stock: 100,
        price: 234000000,
        description: "sun roof",
      },
    ];

    const data = products.map((el) => {
      el.createdAt = el.updatedAt = new Date()
      return el
    })
  
    await queryInterface.bulkInsert("Products", data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
