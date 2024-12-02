"use client"; // ใช้สำหรับ React 18 Client-Side Rendering

import { useState } from "react";

export default function Home() {
  const [wish, setWish] = useState("");
  const [wishes, setWishes] = useState<string[]>([]);

  const handleAddWish = () => {
    if (wish.trim()) {
      setWishes([...wishes, wish]);
      setWish("");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-300 via-red-500 to-yellow-500 p-5">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full text-center">
        <h1 className="text-3xl text-pink-600 font-extrabold mb-6">🌟 เขียนคำอวยพรปีใหม่ 🌟</h1>
        <textarea
          className="w-full h-36 mb-6 p-4 border-2 border-gray-300 rounded-xl shadow-md text-lg font-sans resize-none focus:outline-none focus:ring-2 focus:ring-pink-500"
          placeholder="เขียนคำอวยพรที่นี่..."
          value={wish}
          onChange={(e) => setWish(e.target.value)}
        />
        <button
          className="px-8 py-3 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-500 transition duration-300 transform hover:scale-105"
          onClick={handleAddWish}
        >
          เพิ่มคำอวยพร
        </button>
        <div className="mt-8 text-left">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">คำอวยพรทั้งหมด:</h2>
          <ul className="list-none p-0 m-0">
            {wishes.map((w, index) => (
              <li key={index} className="bg-white p-4 mb-3 rounded-xl shadow-md text-gray-700 text-lg hover:bg-gray-100 transition duration-200">
                🎉 {w}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
