import axios from "axios";
import { FC, useEffect, useState } from "react";
import { IUser } from "../types/types";
import { useParams, useNavigate } from "react-router-dom";

interface UserItemPageParams {
    id: string;
    [key: string]: string | undefined;
}

const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null);

    const params = useParams<UserItemPageParams>();
    const navigate = useNavigate(); //обратно к списку пользователей

    useEffect(() => {
        fetchUser();
    }, []);

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>(
                `https://jsonplaceholder.typicode.com/users/${params.id}`
            );
            setUser(response.data);
        } catch (error) {
            alert(error);
        }
    }
    return (
        <div>
            <button onClick={() => navigate("/users")}>Назад</button>
            <h1>Страница пользователя {user?.name}</h1>
            <div>{user?.email}</div>
            <div>
                {user?.address.city} {user?.address.street}{" "}
                {user?.address.zipcode}
            </div>
        </div>
    );
};

export default UserItemPage;
