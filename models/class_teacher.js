const Sequelize = require('sequelize')
const sequelize = require('../database/sequelize')
const ClassModel = require('../models/classes')
const ClassTeacher = sequelize.define("classTeachers", {
    classId: {
        type: Sequelize.INTEGER(20),
        references: {
            model: ClassModel,
            key: 'id'
        }
    },
    teacherName: {
        type: Sequelize.STRING(20),
        allowNull: false
    }

},

)

ClassTeacher.sync().then(function () {
    return ''
});


module.exports = ClassTeacher
