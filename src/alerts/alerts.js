
import Swal from 'sweetalert2'


export const AlertSuccess = ()=>{
  Swal.fire({
    title: 'Compra exitosa',
    icon: 'success',
    // timer: 2000
  })
}


export const AlertConfirmation = () => {
  return (
    Swal.fire({
      title: 'ya pasaron 48 hs desde que nos agrego en el juego?',
      
      // text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí!'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('confirm')
        
      }
    })
  )
}


