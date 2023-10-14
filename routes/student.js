const express = require('express');
const Student = require('../models/StudentSchema'); // Import your Student model or database schema here

const studentRoutes = (app) => {
    app.post('/students', async (req, res) => {
        try {
            // Validate and process the request data
            const { name, email, phone, gender, age, education, address, image, studentClass, classRoll, dateOfBirth } = req.body;           

            // Create a new student record in the database
            const newStudent = new Student({
                name,
                email,
                phone,
                gender,
                age,
                education,
                address,
                image, // Assuming you handle the image upload
                studentClass,
                classRoll,
                dateOfBirth, // Assuming you've added dateOfBirth
            });

            // Save the student to the database
            await newStudent.save();

            // Send a success response
            res.status(201).json({ message: 'Student created successfully', student: newStudent });
        } catch (error) {
            // Handle errors and send an error response
            console.error(error);
            res.status(500).json({ error: 'An error occurred while creating the student' });
        }
    });
};

module.exports = studentRoutes;
