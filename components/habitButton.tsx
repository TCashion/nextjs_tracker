import { useState } from 'react'

const HabitButton = () => {
    const [complete, setComplete] = useState(false);

    return (
        <button
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-3"
            onClick={() => setComplete(!complete)}
        >
            { complete ? 'X' : 'O' }
        </button>
    );
};

export default HabitButton;