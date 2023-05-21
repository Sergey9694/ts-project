import { FC } from "react";
import { IUser } from "../types/types";
import UserItem from "./UserItem";

interface UsersListProps {
    users: IUser[];
}

const UsersList: FC<UsersListProps> = ({ users }) => {
    return (
        <div>
            {users.map((user) => (
                <UserItem user={user} key={user.id} />
            ))}
        </div>
    );
};

export default UsersList;
