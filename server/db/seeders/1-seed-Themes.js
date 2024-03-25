'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Themes', [
      {
        title: 'Цитаты Джейсона Стетхема',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Цитаты из фильмов',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Эльбруйволы',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'React SSR',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Vanilla JS',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Themes', null, {});
  },
};
