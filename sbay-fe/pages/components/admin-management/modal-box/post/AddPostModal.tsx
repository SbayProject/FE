import React, {useState} from "react";
import Modal from "react-modal";
import {useFormik} from "formik";
import * as Yup from "yup";
import * as AdminPostService from "../../../../service/adminPostService";
import {storage} from "../../../../../firebase";
import {getDownloadURL, ref, uploadBytesResumable} from "@firebase/storage";
import LoadingHidden from "../../../hooks/LoadingHidden";

interface PostModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: () => void;
    typePost: any;
}

const AddPostModal: React.FC<PostModalProps> = ({
                                                    isOpen,
                                                    onClose,
                                                    typePost
                                                }) => {
    Modal.setAppElement("#__next");

    const [firebaseImg, setImg] = useState(null);
    const [image, setImageFile] = useState();
    const [imageUrl, setImageUrl] = useState();

    const handleFileSelect = (event, setFile, setFileUrl) => {
        const file = event.target.files[0];
        if (file) {
            setFile(file);
        }
    };

    const handleFileUpload = async () => {
        return new Promise((resolve, reject) => {
            const file = image;
            if (!file) return reject("No file selected");
            const newName = "sbay_news_topvn" + Date.now() + Math.random() * 1000 + "_" + file.name;
            const storageRef = ref(storage, `files/${newName}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    console.log(`Upload progress: ${progress}%`);
                },
                (error) => {
                    reject(error);
                },
                async () => {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    resolve(downloadURL);
                }
            );
        });
    };

    const handleRemoveImage = () => {
        setImg(null);
        setImageFile(null);
    };

    const handleImageFileSelect = (event) => {
        handleFileSelect(event, setImageFile, setImageUrl);
    };

    const handleImageFileUpload = async () => {
        return handleFileUpload(image, setImageFile, setImageUrl);
    };

    const formik = useFormik({
        initialValues: {
            title: "",
            content: "",
            typePostId: "",
            image: "",
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Title is required"),
            content: Yup.string().required("Content is required"),
            typePostId: Yup.string().required("TypePost is required"),
        }),
        onSubmit: async (values, {resetForm}) => {
            await LoadingHidden(4000);
            const results = await handleImageFileUpload();
            const imageUrl = results;
            console.log(values.typePostId)
            let newPost = {
                ...values, image: imageUrl, typePost: {"id": parseInt(values.typePostId)}
            };
            const handleSaveModal = async () => {
                try {
                    await AdminPostService.createPosts(newPost);
                } catch (error) {
                    console.error(error);
                }
            };
            handleSaveModal();
            resetForm();
            onClose();
        }
    });

    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={onClose}
                contentLabel="Thêm mới bài viết"
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
                                <h3 className="text-3xl font-semibold">Thêm mới bài viết</h3>
                                <button className="modal-close" onClick={onClose}>
                                    &times;
                                </button>
                            </div>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="p-5">
                                    <div className="mb-3 text-center ">
                                        <label
                                            htmlFor="image"
                                            className="text-center block text-sm font-medium text-gray-500 dark:text-gray-400"
                                        >
                                            Image
                                        </label>
                                        <input
                                            type="file"
                                            name="image"
                                            id="image"
                                            accept="image/*"
                                            className="hidden m-auto"
                                            onChange={(event) => {
                                                handleImageFileSelect(event);
                                            }}
                                        />
                                        {image && (
                                            <>
                                                <img src={URL.createObjectURL(image)} alt="Loading..."
                                                     className="mt-2 m-auto"
                                                     style={{maxWidth: 150}}/>
                                                <button
                                                    className="ext-center mt-2 text-sm text-red-500 cursor-pointer"
                                                    onClick={handleRemoveImage}
                                                >
                                                    Xóa ảnh
                                                </button>
                                            </>
                                        )}
                                        {!image && (
                                            <>
                                                <img src="\assets\defaut-img\human.png" alt="Loading..."
                                                     className="mt-2 m-auto"
                                                     style={{maxWidth: 150}}/>
                                                <label
                                                    htmlFor="image"
                                                    className="mt-2 cursor-pointer text-blue-500 underline"
                                                >
                                                    Chọn ảnh
                                                </label>
                                            </>
                                        )}
                                    </div>

                                    <div className="grid md:grid-cols-2 md:gap-6">
                                        <div className="grid grid-cols-1 gap-[1rem]">
                                            <div className="relative w-full md:h-auto">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    className="dark:border-gray-600 border-gray-300 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-dark  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                                                    placeholder=""
                                                    readOnly
                                                    {...formik.getFieldProps("name")}
                                                />
                                            </div>
                                        </div>
                                        <div className="relative z-0 w-full mb-3 group">
                                            <select
                                                name="typePostId"
                                                id="typePostId"
                                                className={`${formik.touched.typePostId && formik.errors.typePostId ? "text-red-500 border-red-500" : "dark:border-gray-600 border-gray-300"} block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-dark  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 `}
                                                placeholder=""
                                                required
                                                {...formik.getFieldProps("typePostId")}
                                            >
                                                <option value="">Chọn Thể Loại</option>
                                                {typePost?.map((list, index) => (
                                                    <option key={index} value={list?.id}>
                                                        {list?.name}
                                                    </option>
                                                ))}
                                            </select>
                                            <label
                                                htmlFor="typePostId"
                                                className={` ${formik.touched.typePostId && formik.errors.typePostId ? "text-red-500" : "text-gray-500 dark:text-gray-400"} peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                                            >
                                                {formik.touched.typePostId && formik.errors.typePostId ? formik.errors.typePostId : "TypePost"}
                                            </label>
                                        </div>
                                    </div>
                                        <div className="relative z-0 w-full mb-3 group">
                                            <input
                                                type="text"
                                                name="title"
                                                id="title"
                                                className={`${formik.touched.title && formik.errors.title ? "text-red-500 border-red-500" : "dark:border-gray-600 border-gray-300"} block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-dark  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 `}
                                                placeholder="Nhập tiêu đề bài viết"
                                                required
                                                {...formik.getFieldProps("title")}
                                            />
                                            <label
                                                htmlFor="title"
                                                className={` ${formik.touched.title && formik.errors.title ? "text-red-500" : "text-gray-500 dark:text-gray-400"} peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                                            >
                                                {formik.touched.title && formik.errors.title ? formik.errors.title + "" : "Tiêu đề bài viết"}
                                            </label>
                                        </div>
                                        <div className="relative z-0 w-full mb-3 group">
                                            <textarea
                                                name="content"
                                                id="content"
                                                className={`${formik.touched.content && formik.errors.content ? "text-red-500 border-red-500" : "dark:border-gray-600 border-gray-300"} block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-dark  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 `}

                                                placeholder="Nhập nội dung tin tức" rows="15"
                                                required
                                                {...formik.getFieldProps("content")}
                                            />
                                            <label
                                                htmlFor="content"
                                                className={` ${formik.touched.content && formik.errors.content ? "text-red-500" : "text-gray-500 dark:text-gray-400"} peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                                            >
                                                {formik.touched.content && formik.errors.content ? formik.errors.content : "Nội dung bài viết"}
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
                                            Close
                                        </button>
                                        <button
                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="submit"
                                        >
                                            Add new Post
                                        </button>
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

export default AddPostModal;
