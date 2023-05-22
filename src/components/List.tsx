import { FC, ReactNode } from "react";

interface ListProps<T> {
    items: T[]; // массив любых элементов
    renderItem: (item: T) => ReactNode; // пропс - компонент для отрисовки
}

export default function List<T>(props: ListProps<T>) {
    return <div>{props.items.map(props.renderItem)}</div>;
}
