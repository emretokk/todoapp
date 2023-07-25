import React from "react";
import Add from "./add";

export default function Box() {
    return (
        <div className="w-2/3 h-3/4 relative bg-secondary mx-auto my-auto rounded-xl text-textColor">
            <Add />
        </div>
    );
}
