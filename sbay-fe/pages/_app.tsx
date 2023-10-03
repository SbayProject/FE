'use client'
import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import Layout from "@/pages/layout";
import {CounterContextProvider} from "@/pages/components/reactContext/context";

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <CounterContextProvider>
                    <Layout><Component {...pageProps} /></Layout>
            </CounterContextProvider>
        </>

    )
}
