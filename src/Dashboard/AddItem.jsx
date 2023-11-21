import React from 'react'
import { useForm } from 'react-hook-form'
import { ImSpoonKnife } from 'react-icons/im'
import Title from '../SharedComponents/Title'
import useAxiosPublic from '../Hooks/useAxiosPublic'
import useAxiosSecure from '../Hooks/useAxiosSecure'

const image_hosting_key = '2a1ab39aa56966736a54ddc45ca1cfc8'
// console.log(image_hosting_key)
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItem = () => {

    const axiosInstance = useAxiosPublic();
    const { register, handleSubmit } = useForm()
    const onSubmit = async (data) => {
        console.log(data.file[0])
        // send image to the imgbb adree
        const imageFile = { image: data.file[0] };
        const image = await axiosInstance.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data',
            }
        });
        // const result = await image.data.data.display_url;
        const axiosInstance = useAxiosSecure();
        if (image.success.success) {
            const foodItem = {
                name: data.name,
                recipe: data.details,
                image: image.data.data.display_url,
                price: data.price,
                category: data.category
            }
            const data = axiosInstance.post('')
        }
    }

    return (
        <div>
            <Title title={'---Ad an item---'} subTitle={'ADD ITEM HERE'} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full my-6">
                    <label className="label font-bold text-lg">
                        <span className="label-text">Recipe name*</span>
                    </label>
                    <input {...register("name", { required: true })} type="text" placeholder="Recipe Name" className="input input-bordered w-full" />
                </div>
                <div className='flex justify-start items-center gap-10 mb-6'>
                    <div className='form-control w-full'>
                        <label className="label font-bold text-lg">
                            <span className="label-text">Category*</span>
                        </label>
                        <select {...register("category", { required: true })} className="select select-bordered w-full">
                            <option disabled selected>Select a category?</option>
                            <option value='salad'>Salad</option>
                            <option value='pizza'>Pizza</option>
                            <option value='soup'>Soup</option>
                            <option value='desserts'>Desserts</option>
                            <option value='drinks'>Drinks</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-bold text-lg">
                            <span className="label-text">Price*</span>
                        </label>
                        <input {...register("price", { required: true })} type="number" placeholder="Recipe price" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="form-control mb-6">
                    <label className="label font-bold text-lg">
                        <span className="label-text">Recipe Details*</span>
                    </label>
                    <textarea {...register("details", { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe details here"></textarea>
                </div>
                <div className='mb-6'>
                    <input {...register("file", { required: true })} type="file" className="file-input bg-gray-100 w-full max-w-xs" />
                </div>

                <button type='submit' className="btn text-white bg-[#D1A054]">Add Item <ImSpoonKnife className='text-2xl ml-2' /> </button>
            </form>
        </div>
    )
}

export default AddItem