import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useSelectedClass from "../../../api/useSelectedClass";

const stripePromise = loadStripe(`${import.meta.env.VITE_PK}`);

const Payment = () => {
    const [selectedClass] = useSelectedClass()
    const total = selectedClass.reduce((sum, item) => sum + parseFloat(item.price), 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div className="w-full min-h-[calc(100vh-40px)] md:pl-20 pr-5 py-10 text-gray-800 rounded-xl bg-gray-50' overflow-x-auto">
            <h2 className="text-xl font-semibold text-fuchsia-900">$Payment Process....</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm selectedClass={selectedClass} price={price} />
            </Elements>
        </div>
    );
};

export default Payment;