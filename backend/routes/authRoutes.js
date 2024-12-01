const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

// เส้นทางการลงทะเบียนผู้ใช้
router.post('/register', authController.register);

// เส้นทางการเข้าสู่ระบบผู้ใช้
router.post('/login', authController.login);

// เส้นทางดึงข้อมูลผู้ใช้ทั้งหมด
router.get('/users', authController.getAll);

// เส้นทางดึงข้อมูลผู้ใช้ตาม id
router.get('/users/:id', authController.getById);

module.exports = router;
