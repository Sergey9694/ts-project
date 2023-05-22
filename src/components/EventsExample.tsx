import { FC, useRef, useState } from "react";

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>("");
    const [isDrag, setIsDrag] = useState<boolean>(false); // тру -занесли в квадрат, false - вышли за пределы
    const inputRef = useRef<HTMLInputElement>(null);

    // типизация onChange
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    // типизация onClick
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        // console.log(value);
        console.log(inputRef.current?.value);
    };
    // начало перемещения эл-та
    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log("DRAG");
    };
    // находимся внутри эл-та
    const dragWithpreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
    };
    // вышли за пределы эл-та
    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    };

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
        console.log("DROP");
    };

    return (
        <div>
            <input
                value={value}
                onChange={changeHandler}
                type="text"
                placeholder="Управляемый"
            />
            <input ref={inputRef} type="text" placeholder="Неуправляемый" />
            <button onClick={clickHandler}>Нажми</button>
            <div
                onDrag={dragHandler}
                draggable
                style={{ width: 200, height: 200, background: "red " }}
            ></div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithpreventHandler}
                style={{
                    width: 200,
                    height: 200,
                    background: isDrag ? "blue " : "red",
                    marginTop: 15,
                }}
            ></div>
        </div>
    );
};

export default EventsExample;
