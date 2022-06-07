const fs = require('fs');
const path = require('path');

// Student data modeling
const students_json = fs.readFileSync(path.join(__dirname, '../data/student.json'))
const student_obj = JSON.parse(students_json)

// Get last id
const getLastId = () => {
    return student_obj[0].id + 1 
}

// Get all students
const getAllStudent = (req, res) => {
    
    res.status(200).json(student_obj)
}

// Get single student
const getSingleStudent = (req, res) => {

    let username = req.params.username
    res.status(200).json(student_obj.find(data => data.uName == username))
}

// Create student
const createStudent = (req, res) => {

    student_obj.unshift({ id:getLastId(), ...req.body })

    fs.writeFileSync(path.join(__dirname, '../data/student.json'), JSON.stringify(student_obj))
    res.status(200).json({ message : 'Student add successfully'})
}

// Edit student
const editStudent = (req, res) => {
    let id = req.params.id

    if ( student_obj.some(data => data.id == id)) {
        let index = student_obj.findIndex(data => data.id == id)
        student_obj[index] = { id:id, ...req.body }

        fs.writeFileSync(path.join(__dirname, '../data/student.json'), JSON.stringify(student_obj))
        res.status(200).json({ message : 'Student edit successfully'})
    } else {

        res.status(400).json({ message : 'Student not founds'})
    }
}

// Delete student
const deleteStudent = (req, res) => {
    let id = req.params.id

    if( student_obj.some(data => data.id == id) ){
        let students = student_obj.filter(data => data.id != id)

        fs.writeFileSync(path.join(__dirname, '../data/student.json'), JSON.stringify(students))
        res.status(200).json({ message : 'Student delete successfully'})
    }else{
        res.status(400).json({ message : 'Data not found'})
    }
}
    

module.exports = { getAllStudent, getSingleStudent, createStudent, editStudent, deleteStudent }