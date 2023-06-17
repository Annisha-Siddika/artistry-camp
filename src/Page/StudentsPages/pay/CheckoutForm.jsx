import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext } from "react";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { FaHandHoldingUsd } from 'react-icons/fa'
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../api/useAxiosSecure";
import { useEffect } from "react";


const CheckoutForm = ({selectedClass, price}) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure()
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])

    const handleSubmit = async(event) =>{
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');
            
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        console.log('payment intent', paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: selectedClass.length,
                classIds: selectedClass.map(item => item._id),
                classInfo: selectedClass,
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertResult.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Confirmed',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
        }
    }
    

    return (
        <>
        <form className="w-2/3 mx-auto mt-20 md:pl-10 pr-5 py-10 text-gray-800 rounded-xl bg-gray-500 overflow-x-auto" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              fontWeight: '600',
              color: '#f6e7ff',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#dd3607',
            },
          },
        }}
      />
      <div className="flex justify-center mt-20">
      <button className="btn bg-emerald-500 hover:bg-emerald-600 text-white" type="submit" disabled={!stripe || !clientSecret || processing}>
        Pay <FaHandHoldingUsd/>
      </button>
      </div>
    </form>
    {
        cardError && <Toaster/>
    }
                {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}

        </>
    );
};

export default CheckoutForm;