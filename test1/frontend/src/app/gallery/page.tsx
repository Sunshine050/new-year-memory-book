"use client";

import React, { useEffect, useState } from "react";
import { fetchGallery } from "../services/api";

// กำหนดชนิดข้อมูลสำหรับ `img` ใน `images`
interface Image {
    url: string;
    title: string;
}

const Gallery = () => {
    const [images, setImages] = useState<Image[]>([]); // ใช้ประเภท `Image[]`

    useEffect(() => {
        const getGallery = async () => {
            try {
                const data = await fetchGallery();
                setImages(data);
            } catch (error) {
                console.error("Failed to fetch gallery data:", error);
            }
        };

        getGallery();
    }, []);

    return (
        <div>
            <h1>Gallery</h1>
            <div className="gallery">
                {images.length > 0 ? (
                    images.map((img, index) => (
                        <div key={index} className="gallery-item">
                            <img src={img.url} alt={img.title} />
                            <p>{img.title}</p>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default Gallery;
