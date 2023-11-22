import React, { useState } from 'react'
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error);
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod)
            setError('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement className='mt-20'
                options={{
                    style: {
                        base: {
                            fontSize: '20px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-xl w-20 btn-primary my-4" type="submit" disabled={!stripe}>
                Pay
            </button>
            <p className="text-red-600">{error}</p>
            {/* {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>} */}
        </form>
    )
}

export default CheckoutForm