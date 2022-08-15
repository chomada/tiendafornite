import Swal from 'sweetalert2'


export const alertConfirmationSuccess = ()=>{
  Swal.fire({
    title: 'Compra exitosa',
    icon: 'success',
    timer: 2000
  })
}
