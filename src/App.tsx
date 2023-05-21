import { useEffect, useState } from "react";
import Card, { CardVariant } from "./components/Card";
import UsersList from "./components/UsersList";
import { IUser } from "./types/types";
import axios from "axios";

const App = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>(
                "https://jsonplaceholder.typicode.com/users"
            );
            setUsers(response.data);
        } catch (error) {
            alert(error);
        }
    }

    return (
        <div>
            <Card width="200px" height="200px" variant={CardVariant.primary}>
                <button>Кнопка</button>
            </Card>
            <UsersList users={users} />
        </div>
    );
};

export default App;
