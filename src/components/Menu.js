import React from 'react'
import recipes from '../recipe';
import moped from "../assets/moped.png";
import Swal from 'sweetalert2'; // Import the 'Swal' object from the 'sweetalert2' library
const Menu = () => {
    const handleOrder = (id) => {
        console.log(id, "id is clicked");
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, place order!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Order has been placed!",
                text: "Your order is being processed",
                icon: "success"
              });
            }
          });
    }
    return(
        <div className='menu-container'> 
            <div className='menu-header'>
                <h2>This weeks specials!</h2>
                <button>Order Menu</button>
            </div>
            <div className='cards'>
                {recipes.map(recipe=><div key={recipe.id} className='menu-items'>
                    <img src={recipe.image} alt=''/>
                    <div className='menu-content'>
                        <div className='heading'>
                            <h5>{recipe.title}</h5>
                            <p>{recipe.price}</p>
                        </div>
                        <p>{recipe.description}</p>
                        <button className='orderBtn' onClick={()=> handleOrder(recipe.id)}>Order Now <img src={moped} style={{width:'15px', height:'10.54px', paddingLeft:'5px'}} alt="moped icon"/></button>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Menu