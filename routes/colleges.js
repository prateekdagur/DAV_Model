const express = require('express')
const CollegeBrand = require('../models/college_brand')
const ClassModel = require('../models/classes')
const ClassTeacherModel = require('../models/class_teacher');
const ClassSubjectModel = require('../models/class_subject');
const SubjectTeacherModel = require('../models/subject_teacher')
const CollegeFrenchise = require('../models/college_frenchise');
const StudentModel = require('../models/student');
const router = express.Router()

router.post('/brand', async function (req, res) {
    try {
        let createBrand = await CollegeBrand.create({
            brand_Name: req.body.brand_Name,
            email: req.body.email

        })
        res.send(createBrand)
    }
    catch (err) {
        res.status(500).send(err.message)
    }
})
router.post('/frenchise', async function (req, res) {
    try {
        let createClass = await CollegeFrenchise.create({
            brandId: req.body.brandId,
            name: req.body.name,
            city: req.body.city,
            state: req.body.state,
            phone_no: req.body.phone_no
        })
        res.send(createClass)
    }
    catch (err) {
        res.status(500).send(err.message)
    }
})
router.post('/class', async function (req, res) {
    try {
        let createClass = await ClassModel.create({
            frenchiseId: req.body.frenchiseId,
            className: req.body.className,
        })
        res.send(createClass)
    }
    catch (err) {
        res.status(500).send(err.message)
    }
})
router.post('/class_teacher', async function (req, res) {
    try {
        console.log(req.body)
        let createClassTeacher = await ClassTeacherModel.create({
            classId: req.body.classId,
            teacherName: req.body.teacherName
        })
        res.send(createClassTeacher)
    }
    catch (err) {
        res.status(500).send(err.message)
    }
})
router.post('/class_subject', async function (req, res) {
    try {
        let createClassSubject = await ClassSubjectModel.create({
            classId: req.body.classId,
            subjectName: req.body.subjectName
        })
        res.send(createClassSubject)
    }
    catch (err) {
        res.status(500).send(err.message)
    }
})
router.post('/subject_teacher', async function (req, res) {
    try {
        let createSubjectTeacher = await SubjectTeacherModel.create({
            subjectId: req.body.subjectId,
            teacherName: req.body.teacherName
        })
        res.send(createSubjectTeacher)
    }
    catch (err) {
        res.status(500).send(err.message)
    }
})
router.post('/student', async function (req, res) {
    try {
        let createStudent = await StudentModel.create({
            classId: req.body.classId,
            name: req.body.name,
            roll_no: req.body.roll_no
        })
        res.send(createStudent)
    }
    catch (err) {
        res.status(500).send(err.message)
    }
})
router.get('/frenchise_with_brand', async function (req, res) {
    try {
        const data = await CollegeBrand.findAll({
            include: [
                {
                    model: CollegeFrenchise, as: "collegeFrenchises",
                    include: [
                        {
                            model: ClassModel, as: "classes",
                            include: [
                                {
                                    model: ClassTeacherModel, as: "classTeachers",
                                }],
                            include: [
                                {
                                    model: ClassSubjectModel, as: "classSubjects",
                                    include: [
                                        {
                                            model: SubjectTeacherModel, as: "subjectTeachers"
                                        }
                                    ]
                                }
                            ],
                            include: [
                                {
                                    model: StudentModel, as: "students"
                                }
                            ]
                        }
                    ]
                }
            ]
        })
        res.status(200).send({ data })
    }
    catch (err) {
        res.status(500).send(err.message)
    }
})
router.get('/classwith', async function (req, res) {
    try {
        const classall = await CollegeFrenchise.findAll({
            include: [
                {
                    model: ClassModel, as: "classes"
                },
            ]
        });
        res.send(classall);
    }
    catch (err) {
        res.status(500).send(err.message)
    }
})
router.get('/brand', async function (req, res) {
    try {
        var brandFrenchise = await CollegeBrand.findAll();
        res.send(brandFrenchise);
    }
    catch (err) {
        res.status(500).send(err.message)
    }
})
router.get('/class', async function (req, res) {
    try {
        var brandFrenchise = await ClassModel.findAll();
        res.send(brandFrenchise);
    }
    catch (err) {
        res.status(500).send(err.message)
    }
})
router.get('/classteacher', async function (req, res) {
    try {
        var brandFrenchise = await ClassTeacherModel.findAll();
        res.send(brandFrenchise);
    }
    catch (err) {
        res.status(500).send(err.message)
    }
})
router.get('/barefrenchise', async function (req, res) {
    try {
        var brandFrenchise = await CollegeFrenchise.findAll();
        res.send(brandFrenchise);
    }
    catch (err) {
        res.status(500).send(err.message)
    }
})
module.exports = router