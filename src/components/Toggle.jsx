import React, { useState } from 'react'

const Toggle = ({ setDarkTheme }) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = (e) => {
        e.preventDefault();
        setDarkMode(!darkMode);
        setDarkTheme(!darkMode);
        document.body.classList.toggle("dark");
    }

    return (
        <label
            onClick={(e) => toggleTheme(e)}
            className="relative h-6 w-11 cursor-pointer rounded-full bg-gray-200 transition [-webkit-tap-highlight-color:_transparent] dark:bg-zinc-800"
        >
            <input type="checkbox" id="AcceptConditions" className="peer sr-only" />

            <span
                className="absolute inset-y-0 start-0 m-1 size-4 rounded-full bg-white transition-all dark:start-5 dark:bg-zinc-700"
            ></span>
        </label>
    )
}

export default Toggle