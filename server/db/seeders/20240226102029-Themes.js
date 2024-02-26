"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Themes", [
      {
        title: "Животные",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Эльбрус",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Буйволы",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "React",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Vanilla JS",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Themes", null, {});
  },
};
