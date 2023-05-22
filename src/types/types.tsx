export interface IAddress {
    street: string;
    city: string;
    zipcode: string;
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    address: IAddress;
}

// Интерфейс для эл-та из списка дел
export interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}
