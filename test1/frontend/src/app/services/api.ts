// ตั้งค่า BASE URL สำหรับ backend
const BASE_URL = "http://localhost:3000"; // เปลี่ยน URL ตาม backend ของคุณ

// ดึงข้อมูลแกลเลอรี (Gallery Page)
export const fetchGallery = async () => {
    try {
        const response = await fetch(`${BASE_URL}/gallery`);
        if (!response.ok) {
            throw new Error("Failed to fetch gallery");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching gallery:", error);
        throw error;
    }
};

export interface Wish {
    id: number;
    text: string;
}

// ฟังก์ชัน fetchWishes
export const fetchWishes = async (): Promise<Wish[]> => {
    try {
        const response = await fetch(`${BASE_URL}/wishes`);
        if (!response.ok) {
            throw new Error("Failed to fetch wishes");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching wishes:", error);
        throw error;
    }
};

// ฟังก์ชัน submitWish
export const submitWish = async (wish: string): Promise<Wish> => {
    try {
        const response = await fetch(`${BASE_URL}/wishes/request`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text: wish }), // ใช้ key 'text'
        });
        if (!response.ok) {
            throw new Error("Failed to submit wish");
        }
        return await response.json();
    } catch (error) {
        console.error("Error submitting wish:", error);
        throw error;
    }
};

// การเข้าสู่ระบบ (Login Page)
export const loginUser = async (username: string, password: string) => {
    try {
        const response = await fetch(`${BASE_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });
        if (!response.ok) {
            throw new Error("Login failed");
        }
        return await response.json();
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
};

// การลงทะเบียน (Register Page)
export const registerUser = async (username: string, password: string) => {
    try {
        const response = await fetch(`${BASE_URL}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });
        if (!response.ok) {
            throw new Error("Registration failed");
        }
        return await response.json();
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
};
