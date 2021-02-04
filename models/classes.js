const Sequelize = require('sequelize')
const sequelize = require('../database/sequelize')
const FrenchiseModal = require('../models/college_frenchise');
const ClassTeacherModel = require('../models/class_teacher');
const ClassSubjectModel = require('../models/class_subject');
const StudentModel = require('../models/student');

const Class = sequelize.define("classes", {
    frenchiseId: {
        type: Sequelize.INTEGER(20),
        references: {
            model: FrenchiseModal,
            key: 'id'
        },
    },
    className: {
        type: Sequelize.INTEGER(20)
    }
})

Class.sync().then(function () {
    return ''
});
Class.hasOne(ClassTeacherModel, {
    foreignKey: 'classId',
    as: 'classTeachers'
});
ClassTeacherModel.belongsTo(Class, {
    foreignKey: 'classId',
    as: 'class1'
});

Class.hasMany(ClassSubjectModel, {
    foreignKey: 'classId',
    as: 'classSubjects'
});
ClassTeacherModel.belongsTo(Class, {
    foreignKey: 'classId',
    as: 'classteacher'
});
Class.hasMany(StudentModel, {
    foreignKey: 'classId',
    as: 'students'
});
StudentModel.belongsTo(Class, {
    foreignKey: 'classId',
    as: 'classstudent'
});
module.exports = Class
