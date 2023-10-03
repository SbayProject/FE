import React, {Suspense} from "react";
import Header from "@/pages/components/layout-view/header";
import Footer from "@/pages/components/layout-view/footer";
import {Meta} from "@/pages/components/meta";
import ImageNav from "@/pages/components/layout-view/imageNav";
import Loading from "@/pages/loading";

// @ts-ignore
export default function Layout({children}) {
    return (
        <>
            <Meta/>
            <Header/>

            <Suspense fallback={<Loading/>}>
               <main className="w-full">
              {children}
              </main>
            </Suspense>
            <Footer/>
        </>
    )
}