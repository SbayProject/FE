import React from "react";
import Header from "@/pages/components/layout-view/header";
import Footer from "@/pages/components/layout-view/footer";
import {Meta} from "@/pages/meta";
// @ts-ignore
export default function Layout({children}) {
    return (
        <>
            <Meta/>
            <Header/>
               <main className="w-full ">
              {children}
              </main>
            <Footer/>
        </>
    )
}