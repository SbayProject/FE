import Link from "next/link";
import React, {Suspense, useEffect, useState} from "react";
import moment from "moment";
import {Field, Form, Formik} from "formik";
import {ListGetAllTypePost, ListGetTypePostSearch} from "@/pages/service/TypePostService";
import SearchPostError from "@/pages/error/searchPostError";
import {useContext} from 'react';
import CounterContext from "@/pages/components/reactContext/context";
import ImageNav from "@/pages/components/layout-view/imageNav";
import Loading from "@/pages/loading";

export default function NavCard() {
    const [typePost, setTypePost] = useState([]);
    const [title, setTitle] = useState('');
    const {counter, setCounter} = useContext(CounterContext);
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState();
    const GetAllListPost = async () => {
        // @ts-ignore
        if (counter && counter[0] && counter[0].typePost?.id && title) {
            // @ts-ignore
            const res = await ListGetTypePostSearch(counter[0]?.typePost?.id, title, 0);
            setCounter(res)
            setTotalPage(res.totalPages)
            console.log(res.totalPages)
        } else {
        }
    }
    //@ts-ignore
    const loadMore = async (page) => {
        //@ts-ignore
        const res = await ListGetTypePostSearch(counter[0]?.typePost?.id, title, page);
        setCounter(res.totalPages);
        setTotalPage(res.totalPages)
        //@ts-ignore
        setPage((prevState) => prevState + 1)
        //@ts-ignore
        setCounter(() => [...counter, ...res])
    }
    // @ts-ignore
    const GetAllListTypePost = async () => {
        const res = await ListGetAllTypePost();
        setTypePost(res);
    }
    useEffect(() => {
        GetAllListPost();
    }, [title])

    useEffect(() => {
        GetAllListTypePost();
    }, [])

    if (!typePost) {
        return null;
    }
    if (!counter) {
        return null;
    }
    // @ts-ignore
    return (
        <>
            <ImageNav/>
            <Suspense fallback={<Loading/>}>
            <nav
                className="container  flex w-full flex-wrap items-center justify-between  bg-neutral-100 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4"
                style={{maxWidth: "100%"}}>
                <div className="flex w-full flex-wrap items-center justify-between px-3">
                    <span
                        className="text-neutral-500 transition duration-200 hover:text-neutral-600 hover:ease-in-out motion-reduce:transition-none dark:text-neutral-200"
                    >
                       <Link href="/components/home-news/post_news" className="hover:text-danger-600"
                             style={{cursor: "pointer"}}>Trang chủ/ </Link><Link href="/components/home-news/post_news"
                                                                                 className="hover:text-danger-600"
                        //@ts-ignore
                                                                                 style={{cursor: "pointer"}}>Tin tức/ </Link>
                        <Link href="/components/home-news/post_news"
                              className="hover:text-danger-600"
                            //@ts-ignore
                              style={{cursor: "pointer"}}>{counter[0]?.typePost?.name
                        }</Link>
                    </span>
                    <Formik
                        initialValues={{
                            title: '',
                        }}
                        onSubmit={async (values) => {
                            const searchPost = async () => {
                                // @ts-ignore
                                setTitle(values.title.trim());
                                // @ts-ignore
                                const res = await ListGetTypePostSearch(counter[0]?.typePost?.id, values.title, 0);
                                setCounter(res)
                            }
                            searchPost()
                        }}>
                        <Form
                            className="flex w-[22%] items-center justify-between text-neutral-500 transition duration-200 hover:text-neutral-600 hover:ease-in-out motion-reduce:transition-none dark:text-neutral-200">
                            <Field
                                type="search"
                                className="relative block w-[12vw] min-w-0 flex-auto rounded-lg border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none motion-reduce:transition-none dark:border-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                placeholder="Tên bài viết"
                                name="title"
                                aria-label="Search"
                                aria-describedby="basic-addon2"
                            />
                            <div>
                                <button
                                    className="bg-white rounded-lg hover:bg-gray-100 text-gray-800 font-semibold  py-[0.25rem] ml-3 px-3 border border-gray-400 shadow">
                              <span
                                  className="input-group-text flex items-center whitespace-nowrap rounded  py-0.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                                  id="basic-addon2">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                          className="h-5 w-5">
                    <path fillRule="evenodd"
                          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                          clipRule="evenodd"/></svg></span>
                                </button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </nav>
            {counter == 0 ? <SearchPostError/> : (
                <div className="mt-5 container mb-12" style={{maxWidth: "100%"}}>
                    <div className="grid-cols-1 sm:grid md:grid-cols-4 "
                        //@ts-ignore
                    >{counter.map((list, index) => (
                        //@ts-ignore
                        <Link key={index} href={`/components/home-news/${list.id}`}>
                            <div
                                className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0"
                            >
                                <div>
                                    <img
                                        className="rounded-t-lg md:h-44"
                                        //@ts-ignore
                                        src={list?.image}
                                        style={{width: "100%"}}
                                        alt=""
                                    />
                                </div>
                                <div className="py-2 px-6 text-base text-neutral-600 dark:text-neutral-200">
                                    <p
                                        // @ts-ignore
                                    >{list?.createDate === "" ? "" : moment(list?.createDate, 'YYYY/MM/DD').format('DD-MM-YYYY')}</p>
                                </div>
                                <div className="px-6">

                                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"
                                        //@ts-ignore
                                    >{list?.title}
                                    </h5>
                                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"
                                        //@ts-ignore
                                    >
                                    </h5>
                                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200"
                                       style={{
                                           overflow: 'hidden',
                                           whiteSpace: 'nowrap',
                                           textOverflow: 'ellipsis'
                                       }}
                                        // @ts-ignore
                                    >{list?.content}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                    </div>


                        <div className="text-center"
                        //@ts-ignore
                            >{page === totalPage - 1 ? ('') : (
                            <button onClick={() => loadMore(page + 1)}
                                    className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-10 ">
                                Xem thêm các tin tức
                            </button>
                            )}
                        </div>
                </div>)}
            </Suspense>
        </>
    )
}