import logo from '/images/logo.svg'
import iconSun from '/images/icon-sun.svg'
import iconMoon from '/images/icon-moon.svg'
import { useState } from "react"

const Navbar = ({theme, setTheme}) => {
    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
        setIcon(theme === "dark" ? iconMoon : iconSun);
    };

    const [icon, setIcon] = useState(() => {
        if(theme === "dark") {
            return iconSun;
        } else {
            return iconMoon;
        }
    })

    return (
        <nav className="bg-neutral-0 dark:bg-neutral-800 position-fixed mt-5 mx-1 flex flex-row justify-between items-center px-4 py-2 rounded-lg">
            {/* bg-neutral-800 dark:bg-neutral-0 */}
            <div className="">
                <a href="/" className="">
                    <img src={logo} alt="logo" className='w-full'/>
                </a>
            </div>

            <button className='btn icon-background red-outline' aria-label="Toggle theme" onClick={toggleTheme}>
                <img src={icon} alt="" />
            </button>
        </nav>
    );
};

export default Navbar;