import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { DISCORD_INVITE_URL } from "../../config/site";

const links = [
    {
        label: "About", href: "#about"
    },
    {
        label: "Features", href: "#features"
    },
    {
        label: "Results", href: "#results"
    },
    {
        label: "Community", href: "#community"
    },
    { label: "Reviews", href: "#reviews" },
];

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.nav
            data-testid="main-navbar"
            initial={{ y: -40, opacity: 0 }
            }
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: 0.6, ease: "easeOut"
            }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "glass-strong py-3"
                    : "bg-transparent backdrop-blur-md py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
                <a href="#hero" data-testid="navbar-logo" className="flex items-center gap-2 group">
                    <div className="relative">
                        <div className="w-9 h-9 rounded-md bg-gradient-to-br from-[#00F0FF] to-blue-600 flex items-center justify-center font-display font-black text-black text-lg">
                            G
                        </div>
                        <div className="absolute inset-0 rounded-md bg-[#00F0FF] blur-lg opacity-40 group-hover:opacity-70 transition-opacity" />
                    </div>
                    <span className="font-display font-black text-white tracking-tight text-lg">
                        GENZ <span className="text-[#FFD700]">TRADE</span>
                    </span>
                </a>

                <div className="hidden md:flex items-center gap-8">
                    {links.map((l) => (
                        <a
                            key={l.label}
                            href={l.href}
                            data-testid={`nav - link - ${l.label.toLowerCase()} `}
                            className="text-sm text-slate-300 hover:text-[#00F0FF] transition-colors duration-200 font-medium"
                        >
                            {l.label}
                        </a>
                    ))}
                </div>

                <a
                    href={DISCORD_INVITE_URL}
                    target="_blank"
                    rel="noreferrer"
                    data-testid="navbar-discord-btn"
                    className="hidden md:flex items-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold px-5 py-2.5 rounded-md text-sm transition-all duration-200 hover:scale-[1.03] shadow-[0_0_15px_rgba(88,101,242,0.35)]"
                >
                    <FaDiscord className="text-base" /> Join Discord
                </a>

                <button
                    data-testid="navbar-menu-toggle"
                    onClick={() => setOpen((v) => !v)}
                    className="md:hidden text-white p-2"
                    aria-label="Toggle menu"
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {open && (
                <div className="md:hidden glass-strong border-t border-white/5 mt-3">
                    <div className="px-6 py-5 flex flex-col gap-4">
                        {links.map((l) => (
                            <a
                                key={l.label}
                                href={l.href}
                                onClick={() => setOpen(false)}
                                data-testid={`mobile - nav - link - ${l.label.toLowerCase()} `}
                                className="text-base text-slate-200 hover:text-[#00F0FF] transition-colors font-medium"
                            >
                                {l.label}
                            </a>
                        ))}
                        <a
                            href={DISCORD_INVITE_URL}
                            target="_blank"
                            rel="noreferrer"
                            data-testid="mobile-navbar-discord-btn"
                            className="bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold px-5 py-3 rounded-md text-sm flex items-center justify-center gap-2"
                        >
                            <FaDiscord /> Join Discord
                        </a>
                    </div>
                </div>
            )}
        </motion.nav>
    );
};