import Link from "next/link";
import Image from "next/image";
import Logo_Header from "../../../public/img/logo-sbay-header.png";
import React, {useEffect, useState} from "react";

import {AiOutlineCloseCircle, AiOutlineMenu} from "react-icons/ai";
import {ListGetAllTypePost} from "@/pages/service/TypePostService";
import {Formik} from "formik";
import {ListGetAllPost} from "@/pages/service/PostService";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [typePost, setTypePost] = useState([]);

    const [type, setType] = useState('');



    const GetListAllTypePost = async () => {
        const res = await ListGetAllTypePost();
        setTypePost(res);
    }

    useEffect(() => {
        GetListAllTypePost();
    }, [])

    if (!typePost) {
        return null;
    }
    const handleModalOpen = (b: boolean) => {
        setMobileMenuOpen(false);
    };
    // @ts-ignore
    return <>
        <header className="">
            {/* Navigation bar */}
            <nav className="border-gray-200 px-4 lg:px-6 py-2.5 lg:h-20  z-40 fixed top-0
                flex w-full items-center justify-between bg-white text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start"
                data-te-navbar-ref="">
                <div className="mx-auto max-w-screen-xl
                flex w-full flex-wrap items-center justify-between px-3">
                    <Link href="" className="flex items-center">
                        <Image src={Logo_Header} className="mr-3 h-12 sm:h-10"
                               alt=""/>
                    </Link>
                    <div className="flex mt-0 items-center lg:order-2">
                        <Link type="button" href="#"
                              className={`bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow block`}>Đăng
                            nhập
                        </Link>
                    </div>
                    <div className="flex items-center">
                        {mobileMenuOpen ? <AiOutlineCloseCircle onClick={() => {
                                setMobileMenuOpen(!mobileMenuOpen)
                            }} size={30} className="md:hidden block" style={{cursor: "pointer"}}/> :
                            <AiOutlineMenu onClick={() => {
                                setMobileMenuOpen(!mobileMenuOpen)
                            }} size={30} className="md:hidden block" style={{cursor: "pointer"}}/>
                        }
                    </div>
                    {/* Navigation links */}
                    <div className="!visible hidden grow basis-[100%] justify-center items-center lg:!flex lg:basis-auto mt-0 lg:ml-32"
                        id="nava-Sbay" data-te-collapse-item="">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 md:bg">
                            <li>
                                <a href="#"
                                   className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                   Trang chủ</a>
                            </li>
                            <li>
                                <Formik initialValues={{
                                    type:''
                                }} onSubmit={(values)=>{
                                    // @ts-ignore
                                    setType(values.type)
                                    const SearchTypePost =async () => {
                                      const  res= ListGetAllPost(values.type,null,0)
                                    }
                                }}>
                                </Formik>
                                <Link href="/components/home-news/nav-card"
                                      className="flex py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700
                                      relative justify-center items-center rounded  group
                                      ">Tin tức
                                    <span className="">
                                        <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                  strokeWidth={2} d="m1 1 4 4 4-4"/></svg></span>
                                    <div className=" absolute hidden top-full min-w-full w-max shadow-md mt-1 rounded group-hover:block">
                                            <ul  className="text-left border bg-white rounded ml-32">
                                                {typePost.map((list,index)=>(
                                                <li  key={index} className="hover:text-danger-600 px-4 py-1 border-b"
                                                    // @ts-ignore
                                                >{list.name}</li>
                                                ))}
                                            </ul>

                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Hero section with background image, heading, subheading and button */}
            <div
                className="relative overflow-hidden mt-16 bg-cover bg-no-repeat"
                style={{
                    backgroundPosition: "50%",
                    backgroundImage: 'url("https://tecdn.b-cdn.net/img/new/slides/146.webp")',
                    height: 350
                }}
            >
                <div
                    className="absolute bottom-0 left-0 right-0 top-0  h-full w-full overflow-hidden bg-fixed"
                    style={{backgroundColor: "rgba(0, 0, 0, 0.75)"}}
                >
                    <div className="flex h-full items-center justify-center">
                        <div className="px-6 text-center text-white md:px-12">
                            <h5 className="mb-8 text-3xl font-bold">Sbay</h5>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div
            className={`md:hidden flex mt-2 flex-col w-[70%] z-50 h-screen fixed bg-neutral-300 text-white top-[60px] ${mobileMenuOpen ? `left-[0]` : `left-[-100%]`}`}>
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 md:bg">
                <li>
                    <a href="#"
                       onClick={() => {
                           handleModalOpen(true)
                       }}
                       className="block py-2 pr-4 pl-3 text-gray-800 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                       Trang chủ</a>
                </li>

                <li>
                    <Link href="/components/home-news/nav-card"
                          onClick={() => {
                              handleModalOpen(true)
                          }}
                          className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Tin
                        tức</Link>
                </li>
            </ul>
        </div>
    </>


}