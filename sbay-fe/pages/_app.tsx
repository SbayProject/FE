
import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import Layout from "@/pages/components/home-news/layoutHome";
import {CounterContextProvider} from "@/pages/components/reactContext/context";
import {ToastContainer} from "react-toastify";
import React from "react";
import Post_news from "./components/home-news/post_news";

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <CounterContextProvider>
                    <Layout><Component {...pageProps|| <Post_news />} />
                        <ToastContainer style={{marginTop:"3.96%"}}/>
                    </Layout>
            </CounterContextProvider>
        </>

    )
}
