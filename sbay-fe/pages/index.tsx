import Image from 'next/image'
import {Inter} from 'next/font/google'
import Link from "next/link";
// import dynamic from "next/dynamic";
import NavDieuHuong from "@/pages/components/nav-dieu-huong";
import Footer from "@/pages/components/footer";
import Header from "@/pages/components/header";
import dynamic from "next/dynamic";
const DynamicHeader=dynamic(()=>import('./components/header'),{ssr:false})


const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <>
         <DynamicHeader/>
            <NavDieuHuong/>
            <Footer/>
        </>


)
}
