
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Sparkles } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { DISCORD_INVITE_URL } from "../../config/site";

const HERO_BG =
    "https://static.prod-images.emergentagent.com/jobs/b11163da-a0e0-419a-82f8-db0252672867/images/d18aaa453954de00b8938c7d8e14be339de3aef28dec61124353f0f0c6a684c1.png";

const tickerItems = [
    { sym: "BTC/USDT", val: "+12.4%", up: true },
    { sym: "SOL/USDT", val: "+8.7%", up: true },
    { sym: "NIFTY", val: "+1.9%", up: true },
    { sym: "ETH/USDT", val: "+5.3%", up: true },
    { sym: "BANKNIFTY", val: "+2.4%", up: true },
    { sym: "XAU/USD", val: "+3.1%", up: true },
    { sym: "TSLA", val: "+6.8%", up: true },
    { sym: "AAPL", val: "+2.2%", up: true },
];

export const Hero = () => {
    return (
        <section
            id="hero"
            data-testid="hero-section"
            className="relative min-h-screen w-full overflow-hidden pt-32 pb-20 flex items-center"
        >
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${HERO_BG})` }}
            />
            {/* Overlays */}
            <div className="absolute inset-0 bg-[#050507]/75" />
            <div className="absolute inset-0 grid-bg grid-bg-fade opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050507] via-transparent to-[#050507]" />

            {/* Floating glow orbs */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#00F0FF]/20 blur-[120px] animate-pulse-glow" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[#FFD700]/15 blur-[120px] animate-pulse-glow" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
                <motion.div
                    whileHover={{ scale: 1.03 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex flex-col items-start max-w-4xl"
                >
                    {/* Overline badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 group">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F0FF]" />
                        </span>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00F0FF]">
                            Live · 700+ active Traders
                        </span>
                    </div>

                    {/* Headline */}
                    <h1
                        data-testid="hero-headline"
                        className="font-display font-black text-white text-4xl sm:text-5xl lg:text-7xl leading-[1.02] tracking-tighter mb-6"
                    >
                        Trade Smarter. <br />
                        Move Faster. <br />
                        <span className="bg-gradient-to-r from-[#00F0FF] via-blue-300 to-[#FFD700] bg-clip-text text-transparent text-glow-blue">
                            Win Bigger.
                        </span>
                    </h1>

                    {/* Subhead */}
                    <p className="text-base sm:text-lg text-slate-300 max-w-2xl mb-10 leading-relaxed font-body">
                        Gabung bareng komunitas trading Gen-Z Indonesia yang fokus belajar bareng, sharing setup, market breakdown harian, dan live session rutin buat bantu member{" "}
                        <span className="text-[#FFD700] font-semibold">berkembang</span>{" "}
                        step by step.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <a
                            href={DISCORD_INVITE_URL}
                            target="_blank"
                            rel="noreferrer"
                            data-testid="hero-join-discord-btn"
                            className="card-glow group inline-flex items-center justify-center gap-3 bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold px-8 py-4 rounded-md transition-all duration-200 hover:scale-[1.03] shadow-[0_0_25px_rgba(88,101,242,0.5)]"
                        >
                            <FaDiscord className="text-xl" />
                            Join Discord Community
                            <ArrowRight
                                size={18}
                                className="card-glow group-hover:translate-x-1 transition-transform"
                            />
                        </a>
                        <a
                            href="#results"
                            data-testid="hero-results-btn"
                            className="inline-flex items-center justify-center gap-2 bg-transparent border border-white/15 hover:border-[#FFD700]/60 text-white font-semibold px-8 py-4 rounded-md transition-all duration-200 hover:bg-white/[0.03]"
                        >
                            <Sparkles size={16} className="text-[#FFD700]" />
                            See Winning Trades
                        </a>
                    </div>

                    {/* Stat strip */}
                    <div className="grid grid-cols-3 gap-6 sm:gap-12 w-full max-w-2xl">
                        {[
                            { k: "700+", v: "Active Members" },
                            { k: "₹100++", v: "Member Elite" },
                            { k: "94%", v: "Kepuasan Member" },
                        ].map((s, i) => (
                            <div key={i} data-testid={`hero-stat-${i}`}>
                                <div className="font-display font-black text-2xl sm:text-3xl text-white">
                                    {s.k}
                                </div>
                                <div className="text-xs uppercase tracking-widest text-slate-400 mt-1">
                                    {s.v}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Ticker */}
            {/* <div className="absolute bottom-0 left-0 right-0 border-y border-white/5 glass-strong overflow-hidden z-10">
                <div className="flex animate-ticker whitespace-nowrap py-3">
                    {[...tickerItems, ...tickerItems, ...tickerItems].map((t, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-2 px-6 text-sm font-body"
                        >
                            <span className="text-slate-300 font-medium">{t.sym}</span>
                            <TrendingUp size={14} className="text-[#00F0FF]" />
                            <span className="text-[#00F0FF] font-bold">{t.val}</span>
                            <span className="text-white/10 ml-4">•</span>
                        </div>
                    ))}
                </div>
            </div> */}
        </section>
    );
};