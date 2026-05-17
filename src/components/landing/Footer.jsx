import { FaDiscord, FaTwitter, FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";
import { DISCORD_INVITE_URL } from "../../config/site";

export const Footer = () => {
    return (
        <footer
            data-testid="main-footer"
            className="relative pt-20 pb-8 border-t border-white/8 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-9 h-9 rounded-md bg-gradient-to-br from-[#00F0FF] to-blue-600 flex items-center justify-center font-display font-black text-black text-lg">
                                G
                            </div>
                            <span className="font-display font-black text-white tracking-tight text-lg">
                                GENZ <span className="text-[#FFD700]">TRADE</span>
                            </span>
                        </div>
                        <p className="text-sm text-slate-400 max-w-sm leading-relaxed mb-6">
                            mentorship, and real winning trades — every single trading day.
                        </p>
                        <div className="flex items-center gap-3">
                            {[
                                { i: <FaDiscord />, href: DISCORD_INVITE_URL, key: "discord" },
                                { i: <FaTwitter />, href: "#", key: "twitter" },
                                { i: <FaInstagram />, href: "#", key: "instagram" },
                                { i: <FaTelegram />, href: "#", key: "telegram" },
                                { i: <FaYoutube />, href: "#", key: "youtube" },
                            ].map((s) => (
                                <a
                                    key={s.key}
                                    href={s.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    data-testid={`footer-social-${s.key}`}
                                    className="w-10 h-10 rounded-md border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#00F0FF] hover:border-[#00F0FF]/40 transition-all"
                                >
                                    {s.i}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="text-xs uppercase tracking-widest text-[#FFD700] font-bold mb-4">
                            Explore
                        </div>
                        <ul className="space-y-3 text-sm">
                            {["About", "Features", "Results", "Community", "Reviews "].map((l) => (
                                <li key={l}>
                                    <a
                                        href={`#${l.toLowerCase()}`}
                                        className="text-slate-400 hover:text-white transition-colors"
                                    >
                                        {l}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <div className="text-xs uppercase tracking-widest text-[#FFD700] font-bold mb-4">
                            Connect
                        </div>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a
                                    href={DISCORD_INVITE_URL}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-slate-400 hover:text-[#00F0FF] transition-colors"
                                >
                                    Discord
                                </a>
                            </li>
                            <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Contact</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Press Kit</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Disclaimer</a></li>
                        </ul>
                    </div>
                </div>

                {/* Massive type */}
                {/* <div className="overflow-hidden -mx-6 lg:-mx-12 mb-10">
                    <div className="font-display font-black text-white/[0.20] tracking-tighter text-center select-none leading-none" style={{ fontSize: "clamp(72px, 16vw, 220px)" }}>
                        GENZ TRADE
                    </div>
                </div> */}

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/8">
                    <div className="text-xs text-slate-500">
                        © {new Date().getFullYear()} GENZ Trade. All rights reserved.
                    </div>
                    <div className="text-xs text-slate-500 max-w-2xl text-center sm:text-right">
                        Disclaimer: Trading involves risk. Past performance is not indicative of
                        future results. Not SEBI-registered investment advice.
                    </div>
                </div>
            </div>
        </footer>
    );
};