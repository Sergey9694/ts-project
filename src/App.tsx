import Card, { CardVariant } from "./components/Card";

import EventsExample from "./components/EventsExample";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <div>
                    <Link to="/users">Пользователи</Link>
                    <Link to="/todos">Список дел</Link>
                </div>

                <Routes>
                    <Route path="/users" element={<UsersPage />}></Route>
                    <Route path="/todos" element={<TodosPage />}></Route>
                    <Route path="/users/:id" element={<UserItemPage />}></Route>
                    <Route path="/todo/:id" element={<TodoItemPage />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
        // <div>
        //     <EventsExample />
        //     <Card width="200px" height="200px" variant={CardVariant.primary}>
        //         <button>Кнопка</button>
        //     </Card>
        // </div>
    );
};

export default App;
