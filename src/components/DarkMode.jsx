'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md'

const DarkMode = () => {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setmounted] = useState(false)
    const currentTheme = theme == 'system' ? systemTheme : theme
    useEffect(() => {
        setmounted(true)
    }, [])
    return (
        <div>
            {
                mounted && (currentTheme == "dark" ?
                    <MdLightMode onClick={() => setTheme("light")}
                        className='text-xl hover:text-blue-400 cursor-pointer'
                    /> : <MdDarkMode onClick={() => setTheme("dark")}
                        className='text-xl hover:text-blue-400 cursor-pointer'
                    />
                )}
        </div>
    )
}

export default DarkMode