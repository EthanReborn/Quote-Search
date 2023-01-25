import { ReactNode } from "react";

interface FormInputProps {
    label: string | number; //string or number 
    children?: ReactNode;
    type?: string;
}

function random(min: number, max: number){

}

//props is the only argument passed in
//if arg to function is object, can break out keys and values
//type default is "text"

export const FormInput = ({label, type = "text"}: FormInputProps) => { //same as writing "function"
    return (
        <div className="flex-input">
            <label>
                {label} 
                {/* everything in curly brace needs to be javascript */}
                <br></br>
                <input type={type} />
            </label>
        </div>
    );
}
