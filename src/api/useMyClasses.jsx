import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useMyClasses = () => {
    const { user, loading } = useContext(AuthContext)
   console.log(user.email)
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: myclasses = [] } = useQuery({
        queryKey: ['myclasses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/classes/myclasses?email=${user?.email}`)
            return res.data;
        },
    })

    return [myclasses, refetch]

}
export default useMyClasses;
