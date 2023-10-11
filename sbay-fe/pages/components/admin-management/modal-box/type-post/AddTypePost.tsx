import React from "react";
import Modal from "react-modal";
import {useFormik} from "formik";
import * as Yup from "yup";
import * as AdminTypePostService from "../../../../service/adminTypePostService";
import LoadingHidden from "../../../hooks/LoadingHidden";

interface PostModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AddTypePostModal: React.FC<PostModalProps> = ({
                                                    isOpen,
                                                    onClose,
                                                }) => {
    Modal.setAppElement("#__next");

    const formik = useFormik({
        initialValues: {
            name: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Title is required"),
        }),
        onSubmit: async (values, {resetForm}) => {

            console.log(values.typePostId)
            const handleSaveModal = async () => {
                try {
                    await AdminTypePostService.createTypePosts(values);
                } catch (error) {
                    console.error(error);
                }
            await LoadingHidden(handleSaveModal(),null);

            resetForm();
            onClose();
        }
    });

    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={onClose}
                contentLabel="Thêm mới thể loại bài viết"
                overlayClassName="overlay"
                ariaHideApp={false}
            >
                <div
                    className="modal overflow-auto min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none"
                >
                    <div
                        className="absolute py-3 px-6 bg-cover  bg-center opacity-80 inset-0 z-0"
                        style={{
                            backgroundImage: `url('/assets/defaut-img/bg-admin.jpg')`,
                        }}>
                        <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">
                            <div
                                className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                <h3 className="text-3xl font-semibold">Thêm mới thể loại bài viết</h3>
                                <button className="modal-close" onClick={onClose}>
                                    &times;
                                </button>
                            </div>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="p-5">
                                    <div className="grid md:grid-cols-2 md:gap-6">
                                        <div className="relative z-0 w-full mb-3 group">
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                className={`${formik.touched.name && formik.errors.name ? "text-red-500 border-red-500" : "dark:border-gray-600 border-gray-300"} block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-dark  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 `}
                                                placeholder="Nhập tên thể loại bài viết"
                                                required
                                                {...formik.getFieldProps("name")}
                                            />
                                            <label
                                                htmlFor="name"
                                                className={` ${formik.touched.name && formik.errors.name ? "text-red-500" : "text-gray-500 dark:text-gray-400"} peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                                            >
                                                {formik.touched.name && formik.errors.name ? formik.errors.name + "" : "Tiêu đề bài viết"}
                                            </label>
                                        </div>

                                        {/*footer*/}
                                        <div
                                            className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                            <button
                                                className="text-red-500 background-transparent font-bold uppercase p-[0.2rem] py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={onClose}
                                            >
                                                Thoát
                                            </button>
                                            <button
                                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="submit"
                                            >
                                                Thêm mới
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default AddTypePostModal;
