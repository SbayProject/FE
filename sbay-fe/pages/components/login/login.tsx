import Link from "next/link";
import React, {useEffect} from "react";

export default function Login() {
    return(
        <>
            <section className="bg-gray-50 dark:bg-gray-900 mt-10"
                     style={{backgroundImage:"url(/img/maybaylogin.jpg)",backgroundSize:"100vw"}}>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Đăng nhập tại đây
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Tên tài khoản
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Tên đăng nhập"
                                    />
                                </div>
                                <div>
                                    <label
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                       Mật khẩu
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                aria-describedby="remember"
                                                type="checkbox"
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                            />
                                        </div>
                                        <div className="ml-3 text-sm" >
                                            <label
                                                style={{cursor:"pointer"}}
                                                className="text-gray-500 dark:text-gray-300"
                                            >
                                                Ghi nhớ đăng nhập
                                            </label>
                                        </div>
                                    </div>
                                    <Link
                                        href="#"
                                        className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                                        style={{textDecoration:"none"}}
                                    >
                                        Quên Mật khẩu/ Tài khoản
                                    </Link>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                   Đăng nhập
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                   Bạn vẫn chưa có tài khoản?{" "}
                                    <Link
                                        href="#"
                                        className="font-medium text-primary-600 hover:underline dark:text-primary-500" style={{textDecoration:"none"}}
                                    >
                                        Đăng ký
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}