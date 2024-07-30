import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Learn Intercepting Routes",
    description: "Learn Intercepting Routes",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${inter.className} bg-white`}>
        <div>
            <Navbar/>
        </div>
        <main className="flex min-h-screen flex-col mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 max-h-full ">
            {children}
        </main>
        </body>
        </html>
    );
}
