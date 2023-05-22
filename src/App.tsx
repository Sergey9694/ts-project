import { useEffect, useState } from "react";
import Card, { CardVariant } from "./components/Card";
import { IUser } from "./types/types";
import axios from "axios";
import List from "./components/List";
import UserItem from "./components/UserItem";

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
            <List
                items={users}
                renderItem={(user: IUser) => (
                    <UserItem user={user} key={user.id} />
                )}
            />
        </div>
    );
};

export default App;
