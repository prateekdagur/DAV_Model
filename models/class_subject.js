const Sequelize = require('sequelize')
const sequelize = require('../database/sequelize')
const ClassModel = require('../models/classes')
const TeacherModel = require('../models/subject_teacher')

const ClassSubject = sequelize.define("classSubjects", {
    classId: {
        type: Sequelize.INTEGER(20),
        references: {
            model: ClassModel,
            key: 'id'
        }
    },
    subjectName: {
        type: Sequelize.STRING(20),
        allowNull: false
    }
})
ClassSubject.sync().then(function () {
    return ''
});

ClassSubject.hasOne(TeacherModel, {
    foreignKey: 'subjectId',
    as: 'subjectTeachers'
});
TeacherModel.belongsTo(ClassSubject, {
    foreignKey: 'subjectId',
    as: 'classSubjects'
});


module.exports = ClassSubject
