import { useUpdateMyser } from "../api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

const UserProfilePage = () => {
    const { updateUser, isLoading} = useUpdateMyser();

        return <UserProfileForm onSave={updateUser} isLoading={isLoading} />;
};

export default UserProfilePage;