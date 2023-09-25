import Link from "next/link";
import Logo_Header from "../../public/img/logo-sbay-header.png";
import Logo_Header_Img from "../../public/img/maybaay.jpg";
import Image from "next/image";
import {FiMenu} from "react-icons/fi";
import {AiOutlineClose} from "react-icons/ai";
import {useState} from "react";
// Initialization for ES Users
import {Dropdown, Ripple, initTE,
} from "tw-elements";

initTE({ Dropdown, Ripple });
export default function Header() {
    const [toggle, setToggle] = useState(false)

    return (
        <>
            <header>
                <nav className="border-gray-200 px-4 lg:px-6 py-2.5 h-20 dark:bg-gray-800 bg-amber-100">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <Link href="" className="flex items-center">
                            <Image src={Logo_Header} className="mr-3 h-12 sm:h-10"
                                   alt=""/>
                        </Link>
                        <div className="flex mt-2 items-center lg:order-2">
                            <Link type="button" href="#"
                                  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ">Đăng nhập
                            </Link>
                        </div>

                        <div className={`md:hidden flex-col w-[70%] justify-between items-center lg:flex ${!toggle ?`block`:`hidden`}`}>
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
                                    <a href="#"
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
            </header>
            <div>
                <div className="relative" data-te-dropdown-ref="">
                    <button
                        className="flex items-center whitespace-nowrap rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        type="button"
                        id="dropdownMenuButton1"
                        data-te-dropdown-toggle-ref=""
                        aria-expanded="false"
                        data-te-ripple-init=""
                        data-te-ripple-color="light"
                    >
                        Dropdown button
                        <span className="ml-2 w-2">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
      >
        <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
        />
      </svg>
    </span>
                    </button>
                    <ul
                        className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                        aria-labelledby="dropdownMenuButton1"
                        data-te-dropdown-menu-ref=""
                    >
                        <li>
                            <a
                                className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                href="#"
                                data-te-dropdown-item-ref=""
                            >
                                Action
                            </a>
                        </li>
                        <li>
                            <a
                                className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                href="#"
                                data-te-dropdown-item-ref=""
                            >
                                Another action
                            </a>
                        </li>
                        <li>
                            <a
                                className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                href="#"
                                data-te-dropdown-item-ref=""
                            >
                                Something else here
                            </a>
                        </li>
                    </ul>
                </div>

                {/*<Image src={Logo_Header_Img} width={600} />*/}
            </div>
        </>
    )
}