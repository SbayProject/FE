import React, {useEffect, useState} from "react";
import Layout from "../layout-admin/LayoutAdmin";
import * as AdminTypePostService from "../../service/adminTypePostService";
import ReactPaginate from "react-paginate";
import {BiSolidEdit} from "react-icons/bi";
import {MdPersonAddAlt} from "react-icons/md";
import * as Swal from "sweetalert2";
import * as Alert from "../../components/hooks/Alert";
import {RiDeleteBin6Line} from "react-icons/ri";

const ManageTypePost = () => {
    const [typePosts, setTypePost] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [currentItems, setCurrentItems] = useState(typePosts);
    const [typePostEdit, setTypePostEdit] = useState(null);
    const [newType, setNewType] = useState("");
    const [editMode, setEditMode] = useState(null);
    const itemsPerPage = 5;

    useEffect(() => {
        document.title = "Quản lý loại bài viết"; // Thay đổi title
        window.scrollTo(0, 0);
        fetchData("").then(() => {
            loadCurrentPageData(0).then(() => {
                // You can add any post-loading logic here if needed.
            });
        });
    }, []);

    const loadCurrentPageData = (page) => {
        return new Promise((resolve) => {
            const startIndex = page * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const itemsToDisplay = typePosts.slice(startIndex, endIndex);
            setCurrentItems(itemsToDisplay);
            resolve();
        });
    };

    const fetchData = async (name) => {
        try {
            const response = await AdminTypePostService.findAllTypePosts(name);
            setTypePost(response);
            setIsLoading(false);
            const totalPages = Math.ceil(response.length / itemsPerPage);
            setTotalPages(totalPages);
            setCurrentPage(0);
            await loadCurrentPageData(0);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const totalPages = Math.ceil(typePosts?.length / itemsPerPage);
        setTotalPages(totalPages);
        loadCurrentPageData(currentPage);
    }, [currentPage]);

    const handleDeleteUser = async (data) => {
        try {
            await AdminTypePostService.remove(data);
            Swal.fire({
                icon: "success",
                title: "Xóa thành công !",
                timer: 3000,
            });
            await fetchData("");
        } catch (error) {
            console.error(error);
        }
    };

    const handlePageClick = async (selectedPage) => {
        await loadCurrentPageData(selectedPage.selected);
        setCurrentPage(0);
    };

    const handleEdit = (index) => {
        setEditMode(index);
    };

    const handleSaveEdit = async (data, index) => {

        try {
            await AdminTypePostService.updateTypePost({name: data, id: index});
            Swal.fire({
                icon: "success",
                title: "Cập nhật thành công !",
                timer: 3000,
            });
            setTypePostEdit(null);
            setEditMode(null);
            await fetchData("");
        } catch (error) {
            console.error(error);
        }
    };

    const handleCancelEdit = () => {
        setEditMode(null);
    };


    const handleAddType = async () => {
        try {
            await AdminTypePostService.createTypePosts({name: newType});
            Swal.fire({
                icon: "success",
                title: "Thêm mới thành công !",
                timer: 3000,
            });
            setNewType("");
            await fetchData("");
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <Layout>

            <div className="bg-white p-6 shadow-md">
                <h2 className="text-2xl uppercase font-semibold mb-4">
                    Quản lý thể loại bài viết
                </h2>
                <div className="flex justify-between items-center mb-4">
                    <div>

                    </div>
                    <div className="flex items-center w-150vw md:w-full">
                        <input
                            type="text"
                            className="w-full py-2 px-3 leading-none rounded-lg border border-solid border-neutral-300 bg-clip-padding text-neutral-700 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Điền tên thể loại"
                            value={newType}
                            onChange={(e) => setNewType(e.target.value)}
                        />
                        <button
                            className="flex bg-pink-500 text-white active:bg-pink-600 font-bold uppercase whitespace-nowrap text-sm text-wap px-4 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none ml-2 ease-linear transition-all duration-150"
                            onClick={handleAddType}
                            type="button"
                        >
                            <MdPersonAddAlt size="20"/> Thêm mới thể loại
                        </button>
                    </div>

                </div>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <div>
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left text-black-500 dark:text-black-400">
                                <thead className="text-xs text-black-700 uppercase dark:text-black-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        STT
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Tên thể loại
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Thao tác
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {currentItems?.map((data, index) => (
                                    <tr
                                        key={index}
                                        className="bg-white border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-400"
                                    >
                                        <td
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap `dark:text-black`"
                                        >
                                            {index + 1}
                                        </td>
                                        <td
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                                        >
                                            {editMode === index ? (
                                                <div className="flex items-center">
                                                    <input
                                                        type="text"
                                                        className="w-full py-2 px-3 leading-none rounded-lg border border-solid border-neutral-300 bg-clip-padding text-neutral-700 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                                                        value={typePostEdit}
                                                        onChange={(e) => setTypePostEdit(e.target.value)}
                                                    />
                                                    <button
                                                        className="bg-green-500 text-white font-bold px-3 py-1 rounded-full hover:bg-green-700 mr-2"
                                                        onClick={() => handleSaveEdit(typePostEdit, data.id)}
                                                    >
                                                        Save
                                                    </button>
                                                    <button
                                                        className="bg-red-500 text-white font-bold px-3 py-1 rounded-full hover:bg-red-700"
                                                        onClick={handleCancelEdit}
                                                    >
                                                        Close
                                                    </button>

                                                </div>
                                            ) : (
                                                data.name
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            {editMode === index ? null : (
                                                <>
                                                    <button
                                                        type="button"
                                                        id="editt"
                                                        className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2"
                                                        onClick={() => handleEdit(index)}
                                                    >
                                                        <BiSolidEdit size="20"/>
                                                    </button>

                                                    <button
                                                        id="deleeete"
                                                        className="bg-red-500 text-white px-2 py-1 rounded-md"
                                                        onClick={() =>
                                                            Alert.swalWithBootstrapButtons.fire({
                                                                icon: "warning",
                                                                title: "Xác nhận xóa",
                                                                html: `Bạn có muốn xoá bài viết <span style="color: red">${data.name}</span> không?`,
                                                                showCancelButton: true,
                                                                cancelButtonText: "Không",
                                                                confirmButtonText: "Có",
                                                                reverseButtons: true,
                                                            }).then((res) => {
                                                                if (res.isConfirmed) {
                                                                    handleDeleteUser(data);
                                                                }
                                                            })
                                                        }
                                                    >
                                                        <RiDeleteBin6Line size="20"/>
                                                    </button>
                                                </>
                                            )}

                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            <div className="flex justify-center mt-4 mb-4">
                                <ReactPaginate
                                    breakLabel="..."
                                    nextLabel=">"
                                    onPageChange={handlePageClick}
                                    pageCount={totalPages}
                                    pageRangeDisplayed={itemsPerPage}
                                    marginPagesDisplayed={1}
                                    previousLabel="<"
                                    containerClassName="pagination flex space-x-2"
                                    pageLinkClassName={`first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-rose-500 text-rose-500 transition-colors duration-300 hover:bg-rose-500 hover:text-white 
                                    `}
                                    nextLinkClassName={`first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-rose-500 text-white bg-rose-500 transition-colors duration-300 hover:bg-white hover:text-rose-500
                                    `}
                                    previousLinkClassName={`first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-rose-500 text-white bg-rose-500 transition-colors duration-300 hover:bg-white hover:text-rose-500
                                    `}
                                    activeClassName="active:bg-white active:text-rose-500"
                                    disabledClassName="d-none"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default ManageTypePost;