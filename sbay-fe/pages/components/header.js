// Initialization for ES Users
import {Collapse, Ripple, initTE,} from "tw-elements";
initTE({ Collapse, Ripple });
import Link from "next/link";
import Image from "next/image";
import Logo_Header from "../../public/img/logo-sbay-header.png";
import {useEffect} from "react";
export default function Header() {

            return  (
                <>
                    <header className="">
                        {/* Navigation bar */}
                        <nav
                            className="border-gray-200 px-4 lg:px-6 py-2.5 lg:h-20  z-40 sticky top-0
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
                                    {/* Hamburger menu button */}
                                    <button
                                        className="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
                                        type="button"
                                        data-te-collapse-init=""
                                        data-te-target="#nava-Sbay"
                                        aria-controls="nava-Sbay"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation">
                                        {/* Hamburger menu icon */}
                                        <span className="[&>svg]:w-5">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-7 w-7"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
            </svg>
          </span>
                                    </button>
                                </div>
                                {/* Navigation links */}
                                <div className="!visible hidden grow basis-[100%] justify-between items-center lg:!flex lg:basis-auto mt-0 lg:ml-32"
                                     id="nava-Sbay"
                                     data-te-collapse-item=""
                                >
                                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 md:bg">
                                        <li>
                                            <a href="#"
                                               className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                                Vé máy bay</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                               className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Tour
                                                du lịch</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                               className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Sản
                                                phẩm</a>
                                        </li>
                                        <li>
                                            <a href=""
                                                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Tin
                                                tức</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                               className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Tin
                                                khuyến mãi</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                               className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Giới
                                                thiệu</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        {/* Hero section with background image, heading, subheading and button */}
                        <div
                            className="relative overflow-hidden bg-cover bg-no-repeat"
                            style={{
                                backgroundPosition: "50%",
                                backgroundImage: 'url("https://tecdn.b-cdn.net/img/new/slides/146.webp")',
                                height: 350
                            }}
                        >
                            <div
                                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
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


                </>
            )
        // }

    // }, []);

}