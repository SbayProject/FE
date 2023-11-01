import React from "react";
import { useRouter } from 'next/router';
import Header from "@/pages/components/layout-view/header";
import Footer from "@/pages/components/layout-view/footer";
import { Meta } from "@/pages/meta";
import Post_news from "./post_news";

export default function LayoutHome({ children }) {
    const router = useRouter();
    const defaultContent = router.pathname === '/'||router.pathname==='' ? <Post_news /> : null;

    return (
        <>
            <Meta />
            <Header />
            <main className="w-full h-full ">
                {defaultContent || children }
            </main>
            <Footer />
        </>
    );
}
