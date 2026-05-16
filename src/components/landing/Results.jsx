import { motion } from "framer-motion";
import { TrendingUp, ArrowUpRight } from "lucide-react";

const DASHBOARD_IMG = "https://static.prod-images.emergentagent.com/jobs/b11163da-a0e0-419a-82f8-db0252672867/images/4bf5cf08490b104ec7ba45a25bb8569b5850f96860bd2ea4a03399ce1686a741.png";

const trades = [
    { ticker: "BANKNIFTY 48500 CE", pnl: "+₹86,400", pct: "+142%", entry: "₹120", exit: "₹290" },
    { ticker: "SOL/USDT", pnl: "+₹1,12,000", pct: "+38%", entry: "$132.40", exit: "$182.70" },
    { ticker: "RELIANCE 2800 PE", pnl: "+₹42,300", pct: "+94%", entry: "₹85", exit: "₹165" },
    { ticker: "BTC/USDT Long", pnl: "+₹2,40,500", pct: "+18%", entry: "$58,200", exit: "$68,650" },
    { ticker: "NIFTY 23800 CE", pnl: "+₹64,800", pct: "+120%", entry: "₹70", exit: "₹154" },
    { ticker: "TATAMOTORS Swing", pnl: "+₹38,200", pct: "+22%", entry: "₹920", exit: "₹1,122" },
];

export const Results = () => {
    return (
        <section
            id="results"
            data-testid="results-section"
            className="relative py-24 lg:py-32 overflow-hidden"
        >
            <div className="absolute inset-0 grid-bg grid-bg-fade opacity-25" />
            <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[#FFD700]/8 blur-[140px]" />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
                <motion.div
                    whileHover={{ scale: 1.03 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14"
                >
                    <div className="max-w-2xl">
                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FFD700]">
                            Winning Trades
                        </span>
                        <h2 className="font-display font-black text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.05] mt-4">
                            Real members. <br />
                            <span className="bg-gradient-to-r from-[#FFD700] to-[#00F0FF] bg-clip-text text-transparent">
                                Real profits.
                            </span>
                        </h2>
                    </div>
                    <p className="text-sm text-slate-400 max-w-md">
                        A small snapshot from the last few weeks. Posted live in Discord by our
                        members — no edits, no scams, no faked screenshots.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Big dashboard card */}
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 relative rounded-2xl overflow-hidden border border-white/10 bg-[#0C0E14] min-h-[420px] group"
                    >
                        <img
                            src={DASHBOARD_IMG}
                            alt="Trading dashboard with profits"
                            className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/40 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#050507]/60 to-transparent" />

                        <div className="relative z-10 h-full flex flex-col justify-end p-8 lg:p-10 min-h-[420px]">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-4 w-fit">
                                <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
                                <span className="text-xs font-bold uppercase tracking-widest text-[#00F0FF]">
                                    This Month
                                </span>
                            </div>
                            <div className="font-display font-black text-white text-5xl sm:text-6xl mb-2 text-glow-gold">
                                <span className="text-[#FFD700]">+₹84.2L</span>
                            </div>
                            <div className="text-base text-slate-300 max-w-md">
                                Combined verified member P&amp;L across options, crypto, and equity
                                positions for November alone.
                            </div>
                        </div>
                    </motion.div>

                    {/* Top trade stat cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            data-testid="result-card-best"
                            className="glass rounded-2xl p-6 border border-[#FFD700]/30 hover:border-[#FFD700]/60 transition-all"
                        >
                            <div className="text-xs uppercase tracking-widest text-[#FFD700] font-bold mb-3">
                                Best Single Trade
                            </div>
                            <div className="font-display font-black text-white text-3xl mb-1">
                                +312%
                            </div>
                            <div className="text-sm text-slate-400">
                                BANKNIFTY CE — 30-min hold
                            </div>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            data-testid="result-card-streak"
                            className="glass rounded-2xl p-6 border border-[#00F0FF]/30 hover:border-[#00F0FF]/60 transition-all"
                        >
                            <div className="text-xs uppercase tracking-widest text-[#00F0FF] font-bold mb-3">
                                Win Streak
                            </div>
                            <div className="font-display font-black text-white text-3xl mb-1">
                                14 / 16
                            </div>
                            <div className="text-sm text-slate-400">
                                profitable signal calls last week
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Profit ticker cards */}
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                    {trades.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            data-testid={`trade-row-${i}`}
                            className="group bg-[#0C0E14] border border-white/8 rounded-lg p-5 hover:border-[#00F0FF]/40 transition-all"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div className="text-sm font-semibold text-white truncate pr-2">
                                    {t.ticker}
                                </div>
                                <TrendingUp
                                    size={16}
                                    className="text-[#00F0FF] flex-shrink-0 mt-0.5"
                                />
                            </div>
                            <div className="flex items-end justify-between">
                                <div>
                                    <div className="font-display font-black text-[#FFD700] text-xl">
                                        {t.pnl}
                                    </div>
                                    <div className="text-xs text-slate-500 mt-1">
                                        {t.entry} → {t.exit}
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 text-[#00F0FF] text-sm font-bold">
                                    {t.pct}
                                    <ArrowUpRight size={14} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div> */}
            </div>
        </section>
    );
};
