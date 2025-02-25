import { useMutation } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CreateUserRequest = {
    auth0Id: string;
    email: string;
};

export const useCreateUser = () => {
    const { getAccessTokenSilently } = useAuth0();

    const createMyUserRequest = async (user: CreateUserRequest) => {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(`${API_BASE_URL}/api/my/user`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),

        });

        if (!response.ok){
            throw new Error("Failed to create user");
        }
    };

    const { 
        mutateAsync: createUser, 
        isLoading, 
        isError, 
        isSuccess,
     } = useMutation(createMyUserRequest);

     return {
        createUser,
        isLoading,
        isError,
        isSuccess,
     };
};

type updateMyUserRequest = {
    name: string;
    addressLine1: string;
    city: string;
    country: string;
};

export const useUpdateMyser = () => {
    const { getAccessTokenSilently } = useAuth0();

    const updateMyUserRequest = async (formData: updateMyUserRequest)=> {
        const accessToken = await getAccessTokenSilently();

        const response = await fetch(`${API_BASE_URL}/api/my/user`,{
            method: "PUT",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
            
        if(!response.ok){
            throw new Error("Failed to update user")
        }

        return response.json();
    };

    const { 
        mutateAsync: updateUser, 
        isLoading, 
        isSuccess, 
        isError, 
        error, 
        reset,
     } = userMutation(updateMyUserRequest);

     return { updateUser, isLoading };
};