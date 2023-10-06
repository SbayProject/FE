import React, {useState} from "react";
// import { UserProvider, useUserContext } from "../user-information/UserContext";
import Link from "next/link";
import {useMediaQuery} from 'react-responsive';

const Layout = ({children}) => {

// const { userInfo } = useUserContext();
    const [menuOpen, setMenuOpen] = useState(false);
    const isMobile = useMediaQuery({maxWidth: 768});
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
// <UserProvider>

        <div className="min-h-screen flex flex-col">
            <header className="bg-red-500 text-white py-4 flex items-center justify-between">
                <div className="w-1/5 px-4 flex items-center">
                    <div className="text-2xl font-bold mr-4">Trang Quản lý</div>
                </div>

                <div className="flex items-center mr-5">
                    <img
                        // src={userInfo?.image}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREgfas-Y_Vw3ggRjLe4zFKRYAh3jHHrmQssr3Wa6WeboOtAB58W7c40xvo5kSQZdCOi1w&usqp=CAU"
                        alt="Avatar"
                        className="w-10 h-10 rounded-full mr-2"
                    />
                    <span className="mr-5">
 Tiến Đạt</span>
                </div>
            </header>

            {/* Main content và phần menu */}

            <div className="flex-grow container mx-auto py-8 flex">
                {/* Menu */}
                {/* Menu cho tablet và desktop */}
                {!isMobile && (
                    <ul className="w-1/5 h-full">
                        <li className="mb-2">
                            <Link href="/components/admin-management/manage-editor"
                                  className="hover:text-gray-400 py-3 px-2 block"
                            >
                                Quản lý nhân viên
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/components/admin-management/manage-post"
                                  className="hover:text-gray-400 py-3 px-2 block">
                                Quản lý bài viết
                            </Link>
                        </li>
                        <li className="mb-2">
                        <Link href="/components/admin-management/manage-typePost"
                            className="hover:text-gray-400 py-3 px-2 block">
                                Quản lý thể loại bài viết
                            </Link>
                        </li>
                    </ul>
                )}
                <nav
                    className={` dark:text-black relative ${isMobile ? 'fixed top-0 right-0 h-full w-64 bg-white z-50 transition-transform transform' : ''} ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    {/* Icon menu cho mobile */}
                    {isMobile && (
                        <div className="md:hidden">
                            <button onClick={toggleMenu}
                                    className="text-red-500 hover:text-gray-400 p-2 md:justify-end">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className={`w-6 h-6 ${menuOpen ? 'transform rotate-180' : ''}`}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                            <div
                                className={`${menuOpen ? 'block' : 'hidden'} w-[250px] bg-white w-full h-full transition-transform transform`}
                                >
                                <ul className=" flex flex-col items-end">
                                    <li className="mb-2">
                                        <Link href="/components/admin-management/manage-editor"
                                              className="hover:text-gray-400 py-2 px-4 block"
                                              onClick={closeMenu}
                                        >
                                            Quản lý nhân viên
                                        </Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link href="/components/admin-management/manage-post"
                                              className="hover:text-gray-400 py-2 px-4 block"
                                              onClick={closeMenu}>
                                            Quản lý bài viết
                                        </Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link href="#" className="hover:text-gray-400 py-2 px-4 block"
                                              onClick={closeMenu}>
                                            Quản lý thể loại bài viết
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}


                </nav>


                {/* Main content */}
                <main className="w-full">{children}</main>
            </div>

            <footer className="bg-red-500 text-white py-4 flex justify-between items-center">
                {/* Thông tin công ty và năm bản quyền */}
                <div>&copy; 2023 Sbay Group</div>
            </footer>
        </div>
// </UserProvider>
    );
};

export default Layout;