const Sequelize = require('sequelize')
const sequelize = require('../database/sequelize')
const CollegeFrenchise = require('../models/college_frenchise');

const Brand = sequelize.define("collegeBrands", {
    brand_Name: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(200),
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
})
Brand.sync().then(function () {
    return ''
});
Brand.hasMany(CollegeFrenchise, {
    foreignKey: 'brandId',
    as: 'collegeFrenchises'
});
CollegeFrenchise.belongsTo(Brand, {
    foreignKey: 'brandId',
    as: 'collegeBrands'
});

module.exports = Brand
