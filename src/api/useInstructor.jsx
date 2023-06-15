import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useInstructor = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { data: isInstructor, isLoading: isInstructorLoading, isError: isInstructorError, error: instructorError } = useQuery(
    ['isInstructor', user?.email],
    async () => {
      const res = await axiosSecure.get(`${import.meta.env.VITE_API_URL}/users/instructor/${user?.email}`);
      return res.data.instructor;
    },
    {
      enabled: !loading,
    }
  );

  return [isInstructor, isInstructorLoading, isInstructorError, instructorError];
};

export default useInstructor;
