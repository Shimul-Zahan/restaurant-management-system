import axios from 'axios'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyAuthContext } from '../Context/AuthContext';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
})

const useAxiosSecure = () => {

    console.log('in the axios secure hook')

    const naviagte = useNavigate();
    const { logOut } = useContext(MyAuthContext);


    axiosInstance.interceptors.response.use(function (response) {
        console.log('response')
        return response;
    }, async function (error) {
        const status = error.response.status;
        if (status === 401 || status === 403) {
            await logOut();
            naviagte('/login')
        }
        return Promise.reject(error);
    });

    return axiosInstance;
}

export default useAxiosSecure