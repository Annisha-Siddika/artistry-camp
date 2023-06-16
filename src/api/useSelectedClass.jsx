import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useSelectedClass = () => {
    const { user, loading } = useContext(AuthContext)
   
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: selectedClass = [] } = useQuery({
        queryKey: ['selectedClass', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/selected?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })

    return [selectedClass, refetch]

}
export default useSelectedClass;
