import React, {useEffect, useState} from "react";
import Link from "next/link";
import {useMediaQuery} from 'react-responsive';

const LayoutAdmin = ({children}) => {
    const isMobile = useMediaQuery({maxWidth: 768});
    const [role, setRole] = useState('');
    useEffect(() => {
        const role = localStorage.getItem('role')
        setRole(role)
    }, [])
    return (
        <div className="min-h-screen flex flex-col">
            <div
                className="xl:container xl:max-w-full md:w-full lg:max-w-full sm:max-w-full flex-grow  mx-auto lg:mx-auto py-[15vh] flex">
                {!isMobile && (
                    <ul className="lag:hidden py-15 w-1/5 h-full">
                        {role === "ROLE_EDITOR" ? (
                            <li className="mb-2">
                                <Link href="/components/admin-management/manage-post"
                                      className="hover:text-gray-400 py-3 px-2 block">
                                    Quản lý bài viết
                                </Link>
                            </li>) : ''}
                        {role === "ROLE_ADMIN" ? (
                            <>
                                <li className="mb-2">
                                    <Link href="/components/admin-management/manage-editor"
                                          className="hover:text-gray-400 py-3 px-2 block">
                                        Quản lý nhân viên
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="/components/admin-management/manage-typePost"
                                          className="hover:text-gray-400 py-3 px-2 block">
                                        Quản lý loại bài viết
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="/components/admin-management/manage-post"
                                          className="hover:text-gray-400 py-3 px-2 block">
                                        Quản lý bài viết
                                    </Link>
                                </li>
                            </>
                        ) : ''}
                    </ul>
                )}
                <main className="w-full">{children}</main>
            </div>
        </div>
    );
};

export default LayoutAdmin;