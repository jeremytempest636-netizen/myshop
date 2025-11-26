import "./globals.css";
import { CartProvider } from "../context/CartContext";
import { AuthProvider } from "../context/AuthContext";
import { ProductsProvider } from "../context/ProductsContext";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "MyShop",
  description: "Mini Shopee Frontend with Admin & User",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <CartProvider>
            <ProductsProvider>
              <Navbar />
              <main className="mx-auto min-h-screen max-w-6xl px-4 pb-12 pt-6">
                {children}
              </main>
            </ProductsProvider>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
