import { MouseEvent } from 'react';

interface Props {
    innerText: String,
    onClick?: (e: MouseEvent<HTMLButtonElement>) => any,
    type: "button" | "submit" | "reset"
};

export const btnDefaultStyle: string = "shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"

const Button = ({ innerText, onClick, type }: Props) => {

    return (
        <button
            className={btnDefaultStyle}
            onClick={onClick}
            type={type}
        >
            {innerText}
        </button>
    );
};

export default Button;