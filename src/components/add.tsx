import { LiaCircle } from "react-icons/lia";

export default function Add(props: any) {
    return (
        <div className=" w-11/12 h-10 absolute left-1/2 bottom-4 -translate-x-1/2 mx-auto bg-primary rounded-xl flex items-center">
            <form
                className="w-full h-full flex items-center"
                onSubmit={props.submitForm}
            >
                <label htmlFor="add" className="hover:cursor-text ml-2">
                    <LiaCircle size={25} />
                </label>
                <input
                    id="add"
                    type="text"
                    className="w-full h-4/6 rounded-xl ml-2 mr-4 px-2 text-textColor bg-primary border-2 border-textColor"
                    value={props.inputData}
                    onChange={(e) => props.setInputData(e.target.value)}
                ></input>
            </form>
        </div>
    );
}
