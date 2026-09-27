import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PlanProvider } from "@/context/PlanContext";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
    title: "FitLog",
    description: "Workout Library",
};

export default function RootLayout({ children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="min-h-screen flex flex-col">
                <PlanProvider>
                    <Navbar />
                    <main className="flex-1">
                        {children}
                    </main>
                    <Footer />
                    <Toaster position="top-center" />
                </PlanProvider>
            </body>
        </html>
    );
}