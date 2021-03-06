'use strict'
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Manufacturer', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
			},
			email: {
				type: Sequelize.STRING,
			},
			password: {
				type: Sequelize.STRING,
			},
			address: {
				type: Sequelize.STRING,
			},
			city: {
				type: Sequelize.STRING,
			},
			CNIC: {
				type: Sequelize.STRING,
			},
			factory_id: {
				type: Sequelize.INTEGER,
			},
			stripeAccountId: {
				type: Sequelize.STRING,
			},
			ntn: {
				type: Sequelize.STRING,
			},
			isApproved: {
				type: Sequelize.BOOLEAN,
				defaultValue: false,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		})
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Manufacturer')
	},
}
