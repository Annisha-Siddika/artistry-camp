import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useEnrolledClass = () => {
    const { user, loading } = useContext(AuthContext)
   
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: enrolledClasses = [] } = useQuery({
        queryKey: ['enrolledClasses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/payments?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })

    return [enrolledClasses, refetch]

}
export default useEnrolledClass;
