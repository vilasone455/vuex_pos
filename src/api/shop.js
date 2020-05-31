import HttpRequest from './http_request'
import Swal from 'sweetalert2';

class ShopProvider extends HttpRequest{

    checkout(data){

        Swal.fire(
            'Check out!',
            'Loading!',
        )
        Swal.showLoading();
      
       return this.create("/checkout" , data).then(rs=>{
           Swal.close();

           Swal.fire({
            title: 'Checkout',
            text: "Sucess",
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#5cb85c',
            cancelButtonColor: '#0275d8',
            confirmButtonText: 'Print Bill',
            cancelButtonText : "Done"
          });

        return rs;
       })
    }
}

export default ShopProvider