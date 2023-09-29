import React from "react";
import Header from "@/pages/components/layout-view/header";
import Footer from "@/pages/components/layout-view/footer";
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