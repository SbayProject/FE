import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useFormik } from "formik";
import {DetailPost} from "../../../../service/postService";

interface InformationEditor {
    isOpen: boolean;
    onClose: () => void;
    onSave: (values: any) => void;
    editorToDetail: [];
}

const DetailEditorModal: React.FC<InformationEditor> = ({
                                                            isOpen,
                                                            onClose,
                                                            editorToDetail,
                                                        }) => {
    Modal.setAppElement("#__next");

    const [modalIsOpen, setModalIsOpen] = useState(isOpen);
    const [avatarUrl, setAvatarUrl] = useState();

    const PostDetail = async () => {
        const res = await DetailPost(idPost)
        await GetListTheSameKind(res?.typePost.id)
        console.log(res)
        setDetail(res)

    }

    useEffect(() => {
        setModalIsOpen(isOpen);
        if (editorToDetail) {
            console.log(editorToDetail)

            formik.setValues({
                name: editorToDetail?.name ||"",
                username: editorToDetail?.users?.username || "",
                email: editorToDetail?.email || "",
                gender: editorToDetail?.gender || "",
                birthday: editorToDetail?.birthday || "",
                phoneNumber: editorToDetail?.phoneNumber || "",
                address: editorToDetail?.address || "",
                image: editorToDetail?.image || ""
            });

            // Set hình ảnh xem trước nếu có
            if (editorToDetail?.image) {
                setAvatarUrl(editorToDetail?.image);
            }
        }
    }, [editorToDetail]);
    const formik = useFormik({
        initialValues: {
            name: "",
            birthday: "",
            gender: "",
            phoneNumber: "",
            email: "",
            address: "",
            image: "",
            username: "",
        },onSubmit(){}})
    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={onClose}
                contentLabel="Thông tin tập viên"
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
                                <h3 className="text-3xl font-semibold"> Chi tiết bài viết</h3>
                                <button className="modal-close" onClick={onClose}>
                                    &times;
                                </button>
                            </div>
                            <div className="col-span-2 mb-4  mt-5 border-2 container">
                                <h1 className="flex text-neutral-900 mt-4 dark:text-neutral-200 text-4xl"
                                    // @ts-ignore
                                >{detail.title}
                                </h1>
                                <div className="mt-6">
                                    <p className="mb-4">
                                        <article
                                            className="prose prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600"
                                            // @ts-ignore
                                        >{detail.content}
                                        </article>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default DetailEditorModal;
