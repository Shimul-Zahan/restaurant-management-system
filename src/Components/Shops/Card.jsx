import React, { useContext } from 'react'
import { MyAuthContext } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useCarts from '../../Hooks/useCarts';

const Card = ({ item }) => {

    const { _id, image, name, recipe, price } = item;
    const { user } = useContext(MyAuthContext);
    const navigate = useNavigate();
    const axiosInstance = useAxiosSecure();
    const {refetch} = useCarts();

    const addToCart = async (food) => {
        const email = user?.email;
        const cartItem = {
            menuId: _id,
            userEmail: email,
            name,
            image,
            recipe,
            price
        }
        if (user && email) {
            const res = await axiosInstance.post('/cart', cartItem)
            const data = await res.data.acknowledged
            if (data) {
                Swal.fire({
                    title: "Congratulations!",
                    text: "Your item successfully added to the cart!",
                    icon: "success"
                });
                refetch();
            }
        } else {
            Swal.fire({
                title: "Are you sure?",
                text: "You want to sign in? ",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, sign in!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login');
                }
            });
        }
    }

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="" /></figure>
            <div className="card-body space-y-2">
                <h2 className="text-2xl font-bold text-center">{name}</h2>
                <p className='text-center'>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => addToCart(item)} className="btn btn-primary">ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}

export default Card