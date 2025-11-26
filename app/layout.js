import "./globals.css";
import Navbar from "../components/Navbar";
import { CartProvider } from "../context/CartContext";

export const metadata = {
  title: "MyShop",
  description: "Modern ecommerce frontend for portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-50">
        <CartProvider>
          <Navbar />
          <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
