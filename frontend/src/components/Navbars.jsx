
import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
];

function Navbar() {
    const [open, setOpen] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setOpen(false); // close menu on mobile
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-primary text-white z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-accent">MyPortfolio</h1>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-6">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="hover:text-accent transition duration-200"
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button onClick={() => setOpen(!open)}>
                        {open ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <nav className="md:hidden bg-primary px-4 pb-4 space-y-2">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="block w-full text-left hover:text-accent transition duration-200"
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
            )}
        </header>
    );
}

export default Navbar;
