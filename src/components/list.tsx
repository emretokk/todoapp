import Todo from "./todo";

export default function List(props: any) {
    return (
        <div className="absolute w-11/12 h-[28.5rem] left-1/2 -translate-x-1/2 top-4 bg-primary rounded-xl flex flex-col items-center pt-1 overflow-y-auto">
            {props.todoList.map((todo: any) => (
                <Todo
                    mykey={todo.id}
                    data={todo.value}
                    taskDone={props.taskDone}
                />
            ))}
        </div>
    );
}
