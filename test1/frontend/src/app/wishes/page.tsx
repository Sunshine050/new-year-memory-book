"use client";
import React, { useEffect, useState } from "react";
import { fetchWishes, submitWish, Wish } from "../services/api";

const Wishes = () => {
    const [wishes, setWishes] = useState<Wish[]>([]); // ระบุประเภทข้อมูลเป็น Wish[]
    const [newWish, setNewWish] = useState(""); // เก็บคำอวยพรใหม่ที่ผู้ใช้กรอก

    useEffect(() => {
        const getWishes = async () => {
            try {
                const data = await fetchWishes(); // ดึงข้อมูลคำอวยพรจาก API
                setWishes(data);
            } catch (error) {
                console.error("Failed to fetch wishes:", error);
            }
        };

        getWishes();
    }, []); // useEffect จะทำงานแค่ครั้งแรกที่โหลด component

    const handleSubmit = async () => {
        if (!newWish.trim()) return; // ป้องกันการส่งข้อความว่าง
        try {
            const newWishData = await submitWish(newWish); // ส่งคำอวยพรใหม่
            setWishes((prevWishes) => [...prevWishes, newWishData]); // เพิ่มคำอวยพรใหม่ในรายการ
            setNewWish(""); // ล้าง input
        } catch (error) {
            console.error("Failed to submit wish:", error);
        }
    };

    return (
        <div>
            <h1>Wishes</h1>
            <div>
                <ul>
                    {wishes.map((wish: Wish) => (
                        <li key={wish.id}>{wish.text}</li> // แสดงคำอวยพร
                    ))}
                </ul>
                <input
                    type="text"
                    value={newWish}
                    onChange={(e) => setNewWish(e.target.value)} // เมื่อมีการเปลี่ยนแปลง input
                    placeholder="Enter your wish"
                />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default Wishes;
