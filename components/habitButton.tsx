import { useState } from 'react'

interface Props {
    date: Date
}

const HabitButton = ({ date }: Props) => {
    const [complete, setComplete] = useState(false);

    return (
        <>
            <span>{date.getMonth() + 1}/{date.getDate()}</span>
            <button
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-3"
                onClick={() => setComplete(!complete)}
            >
                { complete ? 'X' : 'O' }
            </button>
        </>
    );
};

export default HabitButton;