import { useState } from 'react';

export default function App() {
    const colors = [
        'bg-red-500',
        'bg-blue-500',
        'bg-green-500',
        'bg-yellow-500',
        'bg-purple-500',
        'bg-pink-500',
        'bg-indigo-500',
        'bg-teal-500',
        'bg-orange-500'
    ];

    const colorNames = [
        'Red',
        'Blue',
        'Green',
        'Yellow',
        'Purple',
        'Pink',
        'Indigo',
        'Teal',
        'Orange'
    ];

    const [buttonStates, setButtonStates] = useState(
        Array(9).fill({ disabled: false, colorIndex: null })
    );
    const [currentColorIndex, setCurrentColorIndex] = useState(0);

    const handleClick = (clickedIndex) => {
        setButtonStates(prev => {
            return prev.map((state, index) => {
                if (index === clickedIndex) {
                    return {
                        disabled: true,
                        colorIndex: currentColorIndex
                    };
                }
                return state;
            });
        });

        setCurrentColorIndex(prev => (prev + 1) % colors.length);
    };

    return (
        <div className="min-h-screen p-8 bg-gray-100">
            <h1 className="text-3xl font-bold text-center mb-8">
                Color Sequence
            </h1>

            <div className="text-center mb-6">
                <p className="font-semibold mb-2">Next color to assign:</p>
                <div className="flex items-center justify-center gap-2">
                    <span className={`w-8 h-8 rounded-full ${colors[currentColorIndex]} border-2 border-black`} />
                    <span className="font-medium">{colorNames[currentColorIndex]}</span>
                </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
                {buttonStates.map((state, index) => (
                    <button
                        key={index}
                        onClick={() => handleClick(index)}
                        disabled={state.disabled}
                        className={`h-20 w-20 rounded-lg shadow-md transition-all
                       ${state.colorIndex !== null ? colors[state.colorIndex] : 'bg-gray-300'}
                       hover:bg-gray-400 disabled:hover:bg-none
                       disabled:cursor-not-allowed flex items-center justify-center
                       text-white font-bold`}
                    >
                        {state.colorIndex !== null ? colorNames[state.colorIndex] : `Btn ${index}`}
                    </button>
                ))}
            </div>
        </div>
    );
}