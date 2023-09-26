import Link from "next/link";
// Initialization for ES Users
import {initTE, Ripple,} from "tw-elements";
import {useEffect, useState} from "react";
import {ListGetAllTop4NewPost} from "@/pages/service/PostService";

initTE({ Ripple });
export default function Detail() {
    const [newPost,setNewPost]=useState([])
    const GetListAllTop4NewPost =async () => {
      const res=await ListGetAllTop4NewPost();
      setNewPost(res)
    }
    useEffect(()=>{
        GetListAllTop4NewPost()
    },[])
    if (!newPost){
        return null
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // }, [])
    return (
        <>

            <nav className="container flex w-full flex-wrap items-center justify-between z-1 bg-neutral-100 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4" style={{maxWidth: "100%"}}>
                <div className="flex w-full flex-wrap items-center justify-between px-3">
                    <a className="text-neutral-500 transition duration-200 hover:text-neutral-600 hover:ease-in-out motion-reduce:transition-none dark:text-neutral-200"
                       href="#">
                        Trang chủ / Tin tức / ...
                    </a>
                </div>
            </nav>
            <div className="container grid grid-cols-4 gap-4 bg-neutral-100 mt-3" style={{maxWidth:"100%"}}>

                <div className="ml-3 mt-5">
                    <p className="justify-center items-center text-neutral-600 dark:text-neutral-200">
                        09-08-2023
                    </p>
                </div>
                <div className="col-span-3  mt-5">
                    <h1 className="flex text-neutral-900 dark:text-neutral-200 text-2xl">
                        Quy trình khi tuyển được đại lý mới
                    </h1>
                    <div className="mt-6">
                            <p>ok</p>
                    </div>
                </div>
            </div>
            <div className="mt-5 container  bg-neutral-100" style={{maxWidth: "100%"}}>
                <h6 className="ml-3 py-6 flex justify-center font-semibold uppercase md:justify-start text-2xl">
                    CÁC BÀI VIẾT CÓ LIÊN QUAN
                </h6>
                <div className="grid-cols-1 sm:grid md:grid-cols-4 ">
                    {newPost.map((list,index)=>(
                        <div key={index} className="mx-3 mt-5 md:mb-10 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                            <Link href="/components/home-news/detail">
                                <img
                                    className="rounded-t-lg md:h-44"
                                    style={{width: "100%"}}
                                    // @ts-ignore
                                    src={list.image}
                                    alt=""
                                />
                            </Link>
                            <div className="p-6">
                                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"
                                    // @ts-ignore
                                >
                                    {list.title}
                                </h5>
                                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200"
                                   style={{
                                       overflow: 'hidden',
                                       whiteSpace: 'nowrap',
                                       textOverflow: 'ellipsis'
                                   }}
                                >
                                    {list.content}
                                </p>
                            </div>
                        </div>

                    ))}
                </div>
            </div>

        </>
    )
}