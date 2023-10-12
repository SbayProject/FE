
import React from "react";

export default function InformationEmployees() {
    return (
        <>
            <div className="md:flex block py-40 lg:px-20 px-10 bg-secondary-100 ">
                <div className="lg:ml-44">
                    <h1 className="text-3xl lg:mt-[10%] mt-[-10%] font-bold lg:text-center text-center">Thông tin cá nhân</h1>
                    <div className="mt-4 flex justify-center ">
                        <img className="rounded-full "
                             src="data:image/jpeg;base64,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"/>
                    </div>
                </div>
                <div className="lg:mt-14 mt-5 lg:ml-40 block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 lg:w-[45%]">
                    <div className="border-t-2 border-neutral-100  dark:border-neutral-600 dark:text-neutral-50">
                        <h5 className="ml-2.5 text-[1.085rem]  text-start px-0.5 py-0.5 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    Họ và tên
                        </h5>
                        <p className="ml-3 mt-[-4px] text-start text-base text-neutral-600 dark:text-neutral-200">
                            Huỳnh Đức Định
                        </p>
                    </div>
                    <div className="border-t-2 border-neutral-100  dark:border-neutral-600 dark:text-neutral-50">
                        <h5 className="ml-2.5 text-[1.085rem] text-start px-0.5 py-0.5 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                          Ngày sinh
                        </h5>
                        <p className="ml-3 mt-[-4px] text-start text-base text-neutral-600 dark:text-neutral-200">
                           09-08-2002
                        </p>
                    </div>
                    <div className="border-t-2 border-neutral-100  dark:border-neutral-600 dark:text-neutral-50">
                        <h5 className="ml-2.5 text-[1.085rem] text-start px-0.5 py-0.5 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            Giới tính
                        </h5>
                        <p className="ml-3 mt-[-4px] text-start text-base text-neutral-600 dark:text-neutral-200">
                            Nam
                        </p>
                    </div>
                    <div className="border-t-2 border-neutral-100  dark:border-neutral-600 dark:text-neutral-50">
                        <h5 className="ml-2.5 text-[1.085rem] text-start px-0.5 py-0.5 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                           Số điện thoại
                        </h5>
                        <p className="ml-3 mt-[-4px] text-start text-base text-neutral-600 dark:text-neutral-200">
                          0245-555-888
                        </p>
                    </div>
                    <div className="border-t-2 border-neutral-100  dark:border-neutral-600 dark:text-neutral-50">
                        <h5 className="ml-2.5 text-[1.085rem] text-start px-0.5 py-0.5 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                           Email
                        </h5>
                        <p className="ml-3 mt-[-4px] text-start text-base text-neutral-600 dark:text-neutral-200">
                        heeyeon0982002@gmail.com
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}