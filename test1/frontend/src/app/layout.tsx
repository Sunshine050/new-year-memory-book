
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export const metadata = {
  title: 'My Website',
  description: 'This is my website description',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <main className="flex-1 p-5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
