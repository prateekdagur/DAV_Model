const Sequelize = require('sequelize')
const sequelize = require('../database/sequelize')
const ClassSubjectModel = require('../models/class_subject')
const SubjectTeacher = sequelize.define("subjectTeachers", {
    subjectId: {
        type: Sequelize.INTEGER(20),
        references: {
            model: ClassSubjectModel,
            key: 'id'
        }
    },
    teacherName: {
        type: Sequelize.STRING(20),
        allowNull: false
    }
})

SubjectTeacher.sync().then(function () {
    return ''
});


module.exports = SubjectTeacher
