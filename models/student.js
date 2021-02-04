const Sequelize = require('sequelize')
const sequelize = require('../database/sequelize')
const ClassModel = require('../models/classes')
const Student = sequelize.define("students", {
    classId: {
        type: Sequelize.INTEGER(20),
        references: {
            model: ClassModel,
            key: 'id'
        }
    },
    name: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    roll_no: {
        type: Sequelize.INTEGER(20),
        allowNull: false
    }
})

Student.sync().then(function () {
    return ''
});

module.exports = Student
