const User = require('../models/user');
const bcrypt = require('bcryptjs');

// การลงทะเบียนผู้ใช้ใหม่ (Sign Up)
exports.register = (req, res) => {
    const { email, password, name } = req.body;

    // ตรวจสอบว่า email นี้มีอยู่ในระบบหรือไม่
    User.findByEmail(email, (err, existingUser) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        if (existingUser) return res.status(400).json({ message: 'Email already exists' });

        // ถ้า email ยังไม่เคยถูกใช้งาน ก็สร้างบัญชีใหม่
        User.create(email, password, name, (err) => {
            if (err) return res.status(500).json({ message: 'Error creating user' });
            res.status(201).json({ message: 'User created successfully' });
        });
    });
};

// การเข้าสู่ระบบ (Login)
exports.login = (req, res) => {
    const { email, password } = req.body;

    User.findByEmail(email, (err, user) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        if (!user) return res.status(400).json({ message: 'Invalid email or password' });

        // ตรวจสอบรหัสผ่าน
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) return res.status(500).json({ message: 'Server error' });
            if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

            // ไม่ใช้ token
            res.status(200).json({ message: 'Login successful', user });
        });
    });
};

// ดึงข้อมูลผู้ใช้ทั้งหมด (Get All Users)
exports.getAll = (req, res) => {
    User.getAll((err, users) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        res.status(200).json({ message: 'Users retrieved successfully', users });
    });
};

// ดึงข้อมูลผู้ใช้ตาม id (Get User by ID)
exports.getById = (req, res) => {
    const userId = req.params.id; // รับค่า id จาก URL parameter

    User.findById(userId, (err, user) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json({ message: 'User retrieved successfully', user });
    });
};
