import { LiaCircle, LiaCheckSolid } from "react-icons/lia";
import { useState } from "react";

export default function Todo(props: any) {
    const [onIcon, setOnIcon] = useState(false);
    return (
        <div className="w-11/12 relative min-h-[40px] my-1 rounded-xl text-textColor bg-secondary flex items-center px-4">
            <div
                className="hover:cursor-pointer relative mr-2"
                onMouseEnter={() => setOnIcon(true)}
                onMouseLeave={() => setOnIcon(false)}
                onClick={() => {
                    props.taskDone(props.mykey);
                }}
            >
                <LiaCheckSolid
                    size={13}
                    className={onIcon ? "absolute ml-[6px] mt-[6px]" : "hidden"}
                />
                <LiaCircle size={25}></LiaCircle>
            </div>
            {props.data}
        </div>
    );
}
