const Sequelize = require('sequelize')
const sequelize = require('../database/sequelize')
const BrandModel = require('../models/college_brand');
const ClassModel = require('../models/classes')
const Frenchise = sequelize.define("collegeFrenchises", {
    brandId: {
        type: Sequelize.INTEGER(20),
        references: {
            model: BrandModel,
            key: 'id'
        }
    },

    name: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    city: {
        type: Sequelize.STRING(20)
    },
    state: {
        type: Sequelize.STRING(20)
    },
    phone_no: {
        type: Sequelize.INTEGER(20)
    },
})

Frenchise.sync().then(function () {
    return ''
});

Frenchise.hasMany(ClassModel, {
    foreignKey: 'frenchiseId',
    as: 'classes'
});
ClassModel.belongsTo(Frenchise, {
    foreignKey: 'frenchiseId',
    as: 'collegeFrenchises'
});

module.exports = Frenchise
