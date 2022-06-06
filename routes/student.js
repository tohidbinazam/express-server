const express = require('express')
const router = express.Router()

const { getAllStudent, getSingleStudent, createStudent, editStudent, deleteStudent } = require('../controllers/studentController')

// router.get('/', getAllStudent)
// router.post('/', createStudent)
// router.patch('/:id', editStudent)
// router.delete('/:id', deleteStudent)


router.get('/:username', getSingleStudent)
router.route('/').get(getAllStudent).post(createStudent)
router.route('/:id').patch(editStudent).delete(deleteStudent)

module.exports = router