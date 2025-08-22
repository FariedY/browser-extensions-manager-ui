import List from "../components/List.jsx";
import Navbar from "../components/Navbar.jsx";
import Title from "../components/Title.jsx";
import { useEffect, useState } from "react";

const ExtensionsList = () => {
    // State to manage the theme
    const [theme, setTheme] = useState(() => {
        if (localStorage.theme) {
            return localStorage.theme;
        }
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return "dark";
        }
        return "light";
    });

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        }
    }, [theme])

    const [extensions, setExtensions] = useState([]);
    const [filter, setFilter] = useState("all");
    const [recentlyToggled, setRecentlyToggled] = useState(new Set());

    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((data) => setExtensions(data));
    }, [])

    // Improved filtering logic that considers recently toggled items
    const filteredExtensions = extensions.filter(ext => {
        if (filter === "all") return true;
        
        // If extension was recently toggled, show it for a brief moment
        if (recentlyToggled.has(ext.name)) {
            return true;
        }
        
        if (filter === "active") return ext.isActive;
        if (filter === "inactive") return !ext.isActive;
        return false;
    })

    // Enhanced handleToggle that manages recently toggled state
    const handleToggle = (extensionName) => {
        setExtensions((prevExtensions) =>
            prevExtensions.map((ext) =>
                ext.name === extensionName ? { ...ext, isActive: !ext.isActive } : ext
            )
        );

        // Add to recently toggled set
        setRecentlyToggled(prev => new Set([...prev, extensionName]));

        // Remove from recently toggled set after 1 second
        setTimeout(() => {
            setRecentlyToggled(prev => {
                const newSet = new Set(prev);
                newSet.delete(extensionName);
                return newSet;
            });
        }, 1000);
    };

    const handleRemove = (extensionName) => {
        // Filter array untuk membuat array baru tanpa ekstensi yang dihapus
        setExtensions((prevExtensions) =>
            prevExtensions.filter((ext) => ext.name !== extensionName)
        );
    };

    return (
        <main className="position-absolute flex flex-col gap-10 min-h-screen w-[90%] sm:w-5/6 max-w-7xl mx-auto">
            <Navbar theme={theme} setTheme={setTheme} />
            <Title filter={filter} setFilter={setFilter} />
            <List 
                filteredExtensions={filteredExtensions} 
                setExtensions={setExtensions}
                handleToggle={handleToggle}
                handleRemove={handleRemove}
            />
        </main>
    );
};

export default ExtensionsList;