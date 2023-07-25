import { LiaCircle } from "react-icons/lia";

export default function Add() {
    return (
        <div className=" w-11/12 h-10 absolute left-1/2 bottom-4 -translate-x-1/2 mx-auto bg-primary rounded-xl flex items-center">
            <LiaCircle size={30} className="ml-2" />
            <div className="ml-2 mr-4 h-full grow">
                <form className="h-full flex items-center">
                    <input
                        type="text"
                        className="w-full h-4/6 rounded-xl px-4 text-textColor bg-primary border-2 border-textColor"
                    ></input>
                </form>
            </div>
        </div>
    );
}
