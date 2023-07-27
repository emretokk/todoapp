import Add from "./add";
import List from "./list";
import { useState } from "react";

export default function Box() {
    const [todoList, updateTodoList] = useState<any>([]);
    const [inputData, setInputData] = useState<any>("");

    const submitForm = (e: any) => {
        if (!inputData) {
            alert("cant be empty");
            e.preventDefault();
            return;
        }

        const todo = {
            id: Math.floor(Math.random() * 1000),
            value: inputData,
        };

        e.preventDefault();
        updateTodoList((oldList: any) => [...oldList, todo]);
        setInputData("");
    };

    const taskDone = (key: number) => {
        const newTodoList = todoList.filter((item: any) => item.id !== key);
        updateTodoList(newTodoList);
    };

    return (
        <div className="w-2/3 h-3/4 relative bg-secondary mx-auto my-auto rounded-xl text-textColor">
            <Add
                submitForm={submitForm}
                inputData={inputData}
                setInputData={setInputData}
            />
            <List todoList={todoList} taskDone={taskDone} />
        </div>
    );
}
