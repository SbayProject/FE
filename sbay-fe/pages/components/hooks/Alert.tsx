import Swal from "sweetalert2";

export const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        cancelButton: 'px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300',
        confirmButton: 'px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 mr-2'
    },
    buttonsStyling: false
})