import React, { useEffect, useState } from "react";
import Layout from "../../components/layout-admin/LayoutAdmin";
import { Formik, Form, Field } from "formik";
import moment from "moment";
// import { useUserContext } from "../user-information/UserContext";
import * as AdminPostService from "../../service/adminPostService";
import * as Swal from "sweetalert2";
import * as Alert from "../../components/hooks/Alert";

const ManagePost = () => {
  const [posts, setPost] = useState([]);
  const [typePosts, setTypePost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");

  const toggleStatus = async (postStatus) => {
    try {
      await AdminPostService.browsePost(postStatus);
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
    }
    findAllListPost();
  };
  useEffect(() => {
    document.title = "Quản lý bài viết"; // Thay đổi title

    window.scrollTo(0,0)
}, []);

  const findAllTypePost = async () => {
    const result = await AdminPostService.typePost();
    setTypePost(result.data);
    setIsLoading(false);
  };
  const findAllListPost = async () => {
    const result = await AdminPostService.findAllPosts(null,null,0);
    setPost(result);
    setIsLoading(false);
  };
  useEffect(() => {
    findAllListPost();
    findAllTypePost();
  }, []);

  const handleDeleteUser = (id: any) => {};

  return (
    <Layout>
      <div className="bg-white p-6 shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Quản lý bài viết</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <Formik
                initialValues={{
                  title: "",
                  type: "",
                }}
                onSubmit={async (values) => {
                  const searchPost = async () => {
                    setTitle(values.title);
                    setType(values.type);
                    const res = await AdminPostService.findAllPosts(
                      values.type,
                      values.title,
                      0
                    );
                    setPost(res);
                  };
                  searchPost();
                }}
              >
                <Form className="flex  w-2/5 items-center justify-between text-neutral-500 transition duration-200 hover:text-neutral-600 hover:ease-in-out motion-reduce:transition-none dark:text-neutral-200">
                  <Field
                    type="search"
                    className="relative mr-3 block min-w-[25vw] flex-auto rounded-lg border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none motion-reduce:transition-none dark:border-neutral-500 dark:text-neutral-500 dark:placeholder:text-neutral-500 dark:focus:border-primary"
                    placeholder="Tên bài viết"
                    name="title"
                  />
                  <Field
                    style={{ cursor: "pointer" }}
                    as="select"
                    name="type"
                    className=" border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[12vw]  py-[0.43rem] hover:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="">Chọn Thể Loại</option>
                    {typePosts?.map((list, index) => (
                      <option key={index} value={list?.name}>
                        {list?.name}
                      </option>
                    ))}
                  </Field>
                  <div>
                    <button
                      type="submit"
                      className="bg-white rounded-lg border border-gray-500 hover:bg-gray-700 text-black-800 font-semibold  py-[0.25rem] ml-3 px-3 border border-darker border-dark-400 shadow"
                    >
                      <span
                        className="input-group-text flex items-center whitespace-nowrap rounded  py-0.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-600"
                        id="basic-addon2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </Form>
              </Formik>
              <table className="md-flex w-full text-sm text-left text-black-500 dark:text-black-400">
                <thead className="text-xs text-black-700 uppercase dark:text-black-400">
                  <tr>
                    <th scope="col" className="px-3 py-1">
                      STT
                    </th>
                    <th scope="col" className="px-3 py-1">
                      Tiêu đề
                    </th>
                    <th scope="col" className="px-3 py-1">
                      Ngày đăng
                    </th>
                    <th scope="col" className="px-3 py-1">
                      Trạng thái
                    </th>
                    <th scope="col" className="px-3 py-1">
                      Thao tác
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {posts?.map((post, index) => (
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
                        {post.title}
                      </td>
                      <td
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                      >
                        {moment(post.createDate, "YYYY/MM/DD").format(
                          "DD/MM/YYYY"
                        )}
                      </td>

                      <td
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                      >
                        {post.public ? (
                          <button
                            className={`center px-4 py-2 bg-green-500 text-white text-center rounded hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300`}
                          >
                            Đã duyệt
                          </button>
                        ) : (
                          <button
                            className={`center px-4 py-2 bg-red-500 text-white text-center rounded hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300`}
                            onClick={() =>
                              Alert.swalWithBootstrapButtons
                                .fire({
                                  icon: "warning",
                                  title: "Xác nhận duyệt",
                                  html: `Bài viết <span style="color: red">${post.title}</span> không?`,
                                  showCancelButton: true,
                                  cancelButtonText: "Không",
                                  confirmButtonText: "Có",
                                  reverseButtons: true,
                                })
                                .then((res) => {
                                  if (res.isConfirmed) {
                                    toggleStatus(post);
                                    Swal.fire({
                                      icon: "success",
                                      title: "Duyệt thành công !",
                                      timer: 2000,
                                    });
                                  }
                                })
                            }
                          >
                            Duyệt bài viết
                          </button>
                        )}
                      </td>

                      <td className="px-6 py-4">
                        <button
                          className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2"
                          onClick={() => {
                            // Xử lý sự kiện sửa người dùng
                          }}
                        >
                          Sửa
                        </button>
                        <button
                          className="bg-red-500 text-white px-2 py-1 rounded-md"
                          onClick={() => handleDeleteUser(post.id)}
                        >
                          Xóa
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
              <div className="py-2">
                <nav className="block">
                  <ul className="flex pl-0 rounded list-none flex-wrap">
                    <li>
                      <a href="#pablo"
                         className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-rose-500 bg-white text-rose-500">
                        <i className="fas fa-chevron-left -ml-px"></i>
                        <i className="fas fa-chevron-left -ml-px"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#pablo"
                         className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-rose-500 bg-white text-rose-500">
                        <i className="fas fa-chevron-left -ml-px"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#pablo"
                         className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-rose-500 text-white bg-rose-500">
                        1
                      </a>
                    </li>
                    <li>
                      <a href="#pablo"
                         className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-rose-500 bg-white text-rose-500">
                        2
                      </a>
                    </li>
                    <li>
                      <a href="#pablo"
                         className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-rose-500 bg-white text-rose-500">
                        3
                      </a>
                    </li>
                    <li>
                      <a href="#pablo"
                         className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-rose-500 bg-white text-rose-500">
                        4
                      </a>
                    </li>
                    <li>
                      <a href="#pablo"
                         className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-rose-500 bg-white text-rose-500">
                        5
                      </a>
                    </li>
                    <li>
                      <a href="#pablo"
                         className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-rose-500 bg-white text-rose-500">
                        <i className="fas fa-chevron-right -mr-px"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#pablo"
                         className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-rose-500 bg-white text-rose-500">
                        <i className="fas fa-chevron-right -mr-px"></i>
                        <i className="fas fa-chevron-right -mr-px"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ManagePost;
