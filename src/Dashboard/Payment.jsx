import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import Title from "../SharedComponents/Title";


const stripePromise = loadStripe('pk_test_51OF1GOHUw9AEQwQEYulw5HbopwWcijlpUqETbPM1v7AD08xv2kWdWSp6Cl9O06iiaVJTCDoqef8OqvkeBC8aC0lQ00D4BtI4ft');
console.log(stripePromise)

const Payment = () => {
    return (
        <div>
            <Title title={'---PAYMENT---'} subTitle={'PAY BILL NOW'} />
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;