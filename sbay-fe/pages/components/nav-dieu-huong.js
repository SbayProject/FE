import {GoSearch} from "react-icons/go";

export default function NavDieuHuong() {
    return (

            <>
                <nav className="container  flex w-full flex-wrap items-center justify-between z-[1] bg-neutral-100 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4" style={{maxWidth:"100%"}}>
                    <div className="flex w-full flex-wrap items-center justify-between px-3">
                        <a className="text-neutral-500 transition duration-200 hover:text-neutral-600 hover:ease-in-out motion-reduce:transition-none dark:text-neutral-200"
                           href="#">
                            Trang chủ / Tin tức
                        </a>
                        <form
                            className="flex w-[32%] items-center justify-between text-neutral-500 transition duration-200 hover:text-neutral-600 hover:ease-in-out motion-reduce:transition-none dark:text-neutral-200">
                            <input
                                type="search"
                                className="relative mr-3 m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none motion-reduce:transition-none dark:border-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="button-addon2"
                            />
                            <select
                                type="search"
                                className="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none motion-reduce:transition-none dark:border-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="button-addon2">
                                <option>Loại 1</option>
                            </select>
                            <div>
                                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold  py-[0.25rem] ml-3 px-3 border border-gray-400 rounded shadow">
                              <span className="input-group-text flex items-center whitespace-nowrap rounded  py-0.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200" id="basic-addon2">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd"/></svg></span>
                                </button>
                            </div>
                        </form>
                    </div>
                </nav>
                <div className="mt-5 container" style={{maxWidth:"100%"}}>
                    <div className="grid-cols-1 sm:grid md:grid-cols-4 ">
                        <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                            <a href="#!">
                                <img
                                    className="rounded-t-lg"
                                    src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                                    alt="Hollywood Sign on The Hill"
                                />
                            </a>
                            <div className="p-6">
                                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                    Card title
                                </h5>
                                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                    This is a longer card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </p>
                            </div>
                        </div>
                        <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                            <a href="#!">
                                <img
                                    className="rounded-t-lg"
                                    src="https://tecdn.b-cdn.net/img/new/standard/city/042.webp"
                                    alt="Palm Springs Road"
                                />
                            </a>
                            <div className="p-6">
                                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                    Card title
                                </h5>
                                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                    This is a longer card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </p>
                            </div>
                        </div>
                        <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                            <a href="#!">
                                <img
                                    className="rounded-t-lg"
                                    src="https://tecdn.b-cdn.net/img/new/standard/city/044.webp"
                                    alt="Skyscrapers"
                                />
                            </a>
                            <div className="p-6">
                                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                    Card title
                                </h5>
                                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                    This is a longer card with supporting text below as a natural lead-in to
                                    additional content.
                                </p>
                            </div>
                        </div>
                        <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                            <a href="#!">
                                <img
                                    className="rounded-t-lg"
                                    src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
                                    alt="Los Angeles Skyscrapers"
                                />
                            </a>
                            <div className="p-6">
                                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                    Card title
                                </h5>
                                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                    This is a longer card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </p>
                            </div>
                        </div><div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                            <a href="#!">
                                <img
                                    className="rounded-t-lg"
                                    src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
                                    alt="Los Angeles Skyscrapers"
                                />
                            </a>
                            <div className="p-6">
                                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                    Card title
                                </h5>
                                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                    This is a longer card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </p>
                            </div>
                        </div><div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                            <a href="#!">
                                <img
                                    className="rounded-t-lg"
                                    src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
                                    alt="Los Angeles Skyscrapers"
                                />
                            </a>
                            <div className="p-6">
                                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                    Card title
                                </h5>
                                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                    This is a longer card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </p>
                            </div>
                        </div><div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                            <a href="#!">
                                <img
                                    className="rounded-t-lg"
                                    src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
                                    alt="Los Angeles Skyscrapers"
                                />
                            </a>
                            <div className="p-6">
                                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                    Card title
                                </h5>
                                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                    This is a longer card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </p>
                            </div>
                        </div><div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                            <a href="#!">
                                <img
                                    className="rounded-t-lg"
                                    src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
                                    alt="Los Angeles Skyscrapers"
                                />
                            </a>
                            <div className="p-6">
                                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                    Card title
                                </h5>
                                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                    This is a longer card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </p>
                            </div>
                        </div><div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                            <a href="#!">
                                <img
                                    className="rounded-t-lg"
                                    src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
                                    alt="Los Angeles Skyscrapers"
                                />
                            </a>
                            <div className="p-6">
                                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                    Card title
                                </h5>
                                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                    This is a longer card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </p>
                            </div>
                        </div><div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                            <a href="#!">
                                <img
                                    className="rounded-t-lg"
                                    src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
                                    alt="Los Angeles Skyscrapers"
                                />
                            </a>
                            <div className="p-6">
                                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                    Card title
                                </h5>
                                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                    This is a longer card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </p>
                            </div>
                        </div><div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                            <a href="#!">
                                <img
                                    className="rounded-t-lg"
                                    src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
                                    alt="Los Angeles Skyscrapers"
                                />
                            </a>
                            <div className="p-6">
                                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                    Card title
                                </h5>
                                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                    This is a longer card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </p>
                            </div>
                        </div><div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                            <a href="#!">
                                <img
                                    className="rounded-t-lg"
                                    src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
                                    alt="Los Angeles Skyscrapers"
                                />
                            </a>
                            <div className="p-6">
                                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                    Card title
                                </h5>
                                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                    This is a longer card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>


        </>
    )
}