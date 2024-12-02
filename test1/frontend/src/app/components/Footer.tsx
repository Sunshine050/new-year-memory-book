export default function Footer() {
    return (
      <footer className="text-center p-6 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 mt-10 border-t-4 border-white">
        <p className="text-white text-lg font-semibold tracking-wide">
          © 2024 My Website | All rights reserved.
        </p>
        <div className="mt-4">
          <a 
            href="https://www.example.com" 
            className="text-white text-sm font-medium hover:text-yellow-300 transition duration-300"
          >
            Privacy Policy
          </a>
          <span className="mx-2 text-white">|</span>
          <a 
            href="https://www.example.com"
            className="text-white text-sm font-medium hover:text-yellow-300 transition duration-300"
          >
            Terms of Service
          </a>
        </div>
      </footer>
    );
  }
  