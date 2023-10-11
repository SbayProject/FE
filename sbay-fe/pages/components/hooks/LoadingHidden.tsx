import * as Swal from "sweetalert2";

const LoadingHidden = async (start,end) => {
    Swal.fire({
        html: `
      <div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50">
        <div class="loader"></div>
      </div>
    `,
        timer: 4000,
        title: "Vui lòng đợi chúng tôi xử lí trong vòng vài giây",
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        didOpen: async (start) => {
            await start;
            await Swal.showLoading();
        },
        willClose: async (end) => {
            await end;
            // Thêm xử lý khi SweetAlert2 đóng (nếu cần thiết).
        }
    });
};

export default LoadingHidden;
