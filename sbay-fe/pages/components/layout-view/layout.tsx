"use client"
import Header from "@/pages/components/layout-view/header";
import Footer from "@/pages/components/layout-view/footer";
import React from "react";

// @ts-ignore
export default function Layout({children}) {
    return (
        <>
            <Header/>
            <main className="w-full">
                {children}
            </main>
            <Footer/>
        </>
    )
}