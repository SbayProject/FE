import Link from "next/link";
// Initialization for ES Users
import {initTE, Ripple,} from "tw-elements";
import {useEffect, useState} from "react";
import {DetailPost, ListGetAllTop4NewPost} from "@/pages/service/PostService";
import {useParams} from "next/navigation";
import moment from "moment/moment";
import {useRouter} from "next/router";
// @ts-ignore
import ReactHtmlParser from 'react-html-parser';
import {FcCalendar} from "react-icons/fc";
import Image from "next/image";

initTE({Ripple});
export default function IdPost() {
    const [newPost, setNewPost] = useState([]);
    const [detail, setDetail] = useState();
    const [content, setContent] = useState();
    const router = useRouter();
    const {idPost} = router.query;
    console.log(idPost)
    const GetListAllTop4NewPost = async () => {
        const res = await ListGetAllTop4NewPost();
        setNewPost(res)
    }

    const PostDetail = async () => {
        const res = await DetailPost(idPost)
        // @ts-ignore
        await setDetail(res)

    }


    useEffect(() => {
        GetListAllTop4NewPost()
        PostDetail()
    }, [idPost])
    if (!newPost) {
        return null;
    }
    if (!detail) {
        return null;
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // }, [])
    return (
        <>
            <nav
                className="container flex w-full flex-wrap items-center justify-between bg-neutral-100 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4"
                style={{maxWidth: "100%"}}>
                <div className="flex w-full flex-wrap items-center justify-between px-3">
                    <span
                        className=" text-neutral-500 transition duration-200  motion-reduce:transition-none dark:text-neutral-200"
                    ><Link href="/components/home-news/nav-card" className="hover:text-danger-600"
                           style={{cursor: "pointer"}}>Trang chủ /</Link><Link href="/components/home-news/nav-card"
                                                                               className="hover:text-danger-600"
                                                                               style={{cursor: "pointer"}}>Tin tức / </Link><span
                        className="hover:text-danger-600" style={{cursor: "pointer"}}
                        // @ts-ignore
                    >{detail.title}</span>
                    </span>
                </div>
            </nav>
            <div className="container grid grid-cols-4 gap-4 bg-neutral-100 mt-3 " style={{maxWidth: "100%"}}>

                <div className="ml-3 mt-5">
                    <p className="justify-center text-neutral-600 dark:text-neutral-200"
                        // @ts-ignore
                    ><div className="flex"><FcCalendar size={20} style={{marginTop: "0.9px"}}/>&nbsp;{detail?.createDate === "" ? "" : moment(detail?.createDate, 'YYYY/MM/DD').format('DD-MM-YYYY')}</div>
                        <hr/>
                    </p>
                </div>
                <div className="container col-span-3 mb-4  mt-5 border-2">
                    <h1 className="flex text-neutral-900 mt-4 dark:text-neutral-200 text-3xl"
                        // @ts-ignore
                    >{detail.title}
                    </h1>
                    <div className="mt-6">
                        <p className="mb-4"
                            // @ts-ignore
                        >{ReactHtmlParser(detail.content)}</p>
                    </div>
                </div>
                {/*<div>*/}
                {/*    <img*/}
                {/*        // @ts-ignore*/}
                {/*        src={detail.image}/>*/}
                {/*</div>*/}
            </div>
            <div className="mt-5 container  bg-neutral-100" style={{maxWidth: "100%"}}>
                <h6 className="ml-3 py-6 flex justify-center font-semibold uppercase md:justify-start text-2xl">
                    CÁC BÀI VIẾT CÓ LIÊN QUAN
                </h6>
                <div className="grid-cols-1 sm:grid md:grid-cols-4 ">
                    {newPost.map((list, index) => (
                        <div key={index}
                             className="mx-3 mt-5 md:mb-10 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0"
                            // @ts-ignore
                        ><Link href={`/components/home-news/${list.id}`}>
                            <Image
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
                                >{list.title}
                                </h5>
                                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200"
                                   style={{
                                       overflow: 'hidden',
                                       whiteSpace: 'nowrap',
                                       textOverflow: 'ellipsis'
                                   }}
                                    // @ts-ignore
                                >{list.content}
                                </p>
                            </div>
                        </div>

                    ))}
                </div>
            </div>

        </>
    )
}