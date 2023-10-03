import React, {useState} from "react";
import Modal from "react-modal";
import {useFormik} from "formik";
import * as Yup from "yup";
import { parseISO, isBefore, differenceInYears } from "date-fns";


interface EditorModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: () => void;
}

const AddEditorModal: React.FC<EditorModalProps> = ({
                                                        isOpen,
                                                        onClose,
                                                        onSave,
                                                    }) => {
    Modal.setAppElement("#__next");

    const [image, setImage] = useState<File | null>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(true);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedImage = e.target.files?.[0];
        if (selectedImage) {
            setImage(selectedImage);
            const reader = new FileReader();
            reader.onload = () => {
                setPreviewImage(reader.result as string);
            };
            reader.readAsDataURL(selectedImage);
        }
    };

    const handleRemoveImage = () => {
        setImage(null);
        setPreviewImage(null);
    };

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
            repeatPassword: "",
            gender: "0",
            birthday: "",
            phone: "",
            address: "",
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Username is required"),
            email: Yup.string().email("Invalid email address").required("Email is required"),
            password: Yup.string().required("Password is required"),
            repeatPassword: Yup.string()
                .oneOf([Yup.ref("password"), null], "Passwords must match")
                .required("Confirm password is required"),
            gender: Yup.string().required("Gender is required"),
            birthday: Yup.string()
                .required("Birthday is required")
                .test("is-over-18", "Must be over 18 years old", (value) => {
                    const birthDate = parseISO(value);
                    const currentDate = new Date();
                    const age = differenceInYears(currentDate, birthDate);
                    return age >= 18;
                }),
            phone: Yup.string().matches(/^\d{3}-\d{3}-\d{4}$/, "Invalid phone number").required("Phone number is required"),
            address: Yup.string().required("Address is required"),
        }),
        onSubmit: (values) => {
            console.log("Thêm"+values.email)
            onSave();
        },
    });

    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={onClose}
                contentLabel="Thêm mới biên tập viên"
                overlayClassName="overlay"
                ariaHideApp={false}
            >
                <div
                    className="inset-3em py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0">
                    <div className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                        <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                            <div
                                className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                <h3 className="text-3xl font-semibold">Thêm mới biên tập viên</h3>
                                <button className="modal-close" onClick={onClose}>
                                    &times;
                                </button>
                            </div>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="p-5">
                                    <div className="mb-6">
                                        <label
                                            htmlFor="image"
                                            className="block text-sm font-medium text-gray-500 dark:text-gray-400"
                                        >
                                            Image
                                        </label>
                                        <input
                                            type="file"
                                            name="image"
                                            id="image"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={handleImageChange}
                                        />
                                        {previewImage && (
                                            <>
                                                <img src={previewImage} alt="Preview" className="mt-2"
                                                     style={{maxWidth: 200}}/>
                                                <button
                                                    className="mt-2 text-sm text-red-500 cursor-pointer"
                                                    onClick={handleRemoveImage}
                                                >
                                                    Xóa ảnh
                                                </button>
                                            </>
                                        )}
                                        {!previewImage && (
                                            <label
                                                htmlFor="image"
                                                className="mt-2 cursor-pointer text-blue-500 underline"
                                            >
                                                Chọn ảnh
                                            </label>
                                        )}
                                    </div>
                                    <div className="grid md:grid-cols-3 md:gap-6">
                                        <div className="relative z-0 w-full mb-6 group">
                                            <input
                                                type="text"
                                                name="username"
                                                id="username"
                                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                placeholder=""
                                                required
                                                {...formik.getFieldProps("username")}
                                            />
                                            <label
                                                htmlFor="username"
                                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                            >
                                                {formik.touched.username && formik.errors.username ? formik.errors.username : "UserName"}
                                            </label>
                                        </div>
                                        <div className="relative z-0 w-full mb-6 group">
                                            <input
                                                type="date"
                                                name="birthday"
                                                id="birthday"
                                                max="2000-01-01"
                                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                placeholder=""
                                                required
                                                {...formik.getFieldProps("birthday")}
                                            />
                                            <label
                                                htmlFor="birthday"
                                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                            >
                                                {formik.touched.birthday && formik.errors.birthday ? formik.errors.birthday : "Birthdays"}
                                            </label>
                                        </div>
                                        <div className="relative z-0 w-full mb-6 group">
                                            <select
                                                name="gender"
                                                id="gender"
                                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                placeholder=""
                                                required
                                                {...formik.getFieldProps("gender")}
                                            >
                                                <option value="">Lựa chọn</option>
                                                <option value="0">Nam</option>
                                                <option value="1">Nữ</option>
                                            </select>
                                            <label
                                                htmlFor="gender"
                                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                            >
                                                {formik.touched.gender && formik.errors.gender ? formik.errors.gender : "Gender (0 or 1)"}
                                            </label>
                                        </div>
                                    </div>
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            id="password"
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=""
                                            required
                                            {...formik.getFieldProps("password")}
                                        />
                                        <label
                                            htmlFor="password"
                                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >
                                            {formik.touched.password && formik.errors.password ? formik.errors.password : "Password"}
                                        </label>
                                        <button
                                            type="button"
                                            className="absolute top-3 right-0 px-2 py-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? "Hide" : "Show"}
                                        </button>
                                    </div>

                                    <div className="relative z-0 w-full mb-6 group">
                                        <input
                                            type={showConfirmPassword ? "text" : "password"}
                                            name="repeatPassword"
                                            id="repeatPassword"
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=""
                                            required
                                            {...formik.getFieldProps("repeatPassword")}
                                        />
                                        <label
                                            htmlFor="repeatPassword"
                                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >
                                            {formik.touched.repeatPassword && formik.errors.repeatPassword ? formik.errors.repeatPassword : "Confirm Password"}
                                        </label>
                                        <button
                                            type="button"
                                            className="absolute top-3 right-0 px-2 py-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        >
                                            {showConfirmPassword ? "Hide" : "Show"}
                                        </button>
                                    </div>
                                    <div className="grid md:grid-cols-2 md:gap-6">
                                        <div className="relative z-0 w-full mb-6 group">
                                            <input
                                                type="tel"
                                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                                name="phone"
                                                id="phone"
                                                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 ${formik.touched.phone && formik.errors.phone ? "border-red-500" : ""}`}
                                                placeholder=" "
                                                required
                                                {...formik.getFieldProps("phone")}
                                            />
                                            <label
                                                htmlFor="phone"
                                                className={`peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${formik.touched.phone && formik.errors.phone ? "text-red-500" : ""}`}
                                            >
                                                {formik.touched.phone && formik.errors.phone ? formik.errors.phone : "Phone number (098-456-7890)"}
                                            </label>
                                        </div>
                                        <div className="relative z-0 w-full mb-6 group">
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 ${formik.touched.phone && formik.errors.phone ? "border-red-500" : ""}`}
                                                placeholder=" "
                                                required
                                                {...formik.getFieldProps("email")}
                                            />
                                            <label
                                                htmlFor="email"
                                                className={`peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${formik.touched.phone && formik.errors.phone ? "text-red-500" : ""}`}
                                            >
                                                {formik.touched.email && formik.errors.email ? formik.errors.email : "Email (sbay@sbay.com)"}
                                            </label>
                                        </div>

                                    </div>
                                    <div className="grid md:grid-cols-1 md:gap-6">
                                        <div className="relative z-0 w-full mb-6 group">
                                            <input
                                                type="text"
                                                name="address"
                                                id="address"
                                                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 ${formik.touched.phone && formik.errors.phone ? "border-red-500" : ""}`}
                                                placeholder=" "
                                                required
                                                {...formik.getFieldProps("address")}
                                            />
                                            <label
                                                htmlFor="address"
                                                className={`peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${formik.touched.phone && formik.errors.phone ? "text-red-500" : ""}`}
                                            >
                                                {formik.touched.address && formik.errors.address ? formik.errors.address : "Address (03 Đinh Thị Hoà, Q. Sơn Trà, TP Đà Nẵng)"}
                                            </label>
                                        </div>
                                    </div>
                                    {/*footer*/}
                                    <div
                                        className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={onClose}
                                        >
                                            Close
                                        </button>
                                        <button
                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="submit"
                                        >
                                            Save Changes
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

export default AddEditorModal;
