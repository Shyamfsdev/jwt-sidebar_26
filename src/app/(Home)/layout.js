"use client";
import { Inter } from "next/font/google";
import "../globals.css";
import { useRouter } from "next/navigation";
import MiniDrawer from "./Sidebar/page";
import { useEffect } from "react";
import Cookies from "js-cookie";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    // Check if the user is authenticated
    const token = Cookies.get('Tokensss');

    if (!token) {
      // Redirect to /auth if not authenticated
      router.push('/auth');
    }
  }, [router]);

  // The content will be rendered only if the user is authenticated
  // For now, we render the MiniDrawer and children if a token exists
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Render children only if authenticated */}
        {/* You might need additional logic to handle loading states */}
        {Cookies.get('Tokensss') ? <MiniDrawer>{children}</MiniDrawer> : null}
      </body>
    </html>
  );
}

