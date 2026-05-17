import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { DISCORD_INVITE_URL } from "../../config/site";

export const DiscordCTA = () => {
    return (
        <section
            id="join"
            data-testid="discord-cta-section"
            className="relative py-24 lg:py-32 overflow-hidden"
        >
            {/* Background effects */}
            <div className="absolute inset-0 grid-bg grid-bg-fade opacity-50" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#5865F2]/15 blur-[120px] animate-pulse-glow" />
            <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-[#00F0FF]/15 blur-[100px]" />
            <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-[#FFD700]/12 blur-[100px]" />

            <div className="relative max-w-5xl mx-auto px-6 lg:px-12">
                <motion.div
                    whileHover={{ scale: 1.03 }}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative glass-strong rounded-3xl border border-white/10 p-10 md:p-16 text-center overflow-hidden"
                >
                    {/* Tracing border glow */}
                    <div className="absolute inset-0 rounded-3xl pointer-events-none">
                        <div className="absolute inset-0 rounded-3xl border border-[#00F0FF]/20" />
                    </div>

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FFD700]/30 bg-[#FFD700]/5 mb-8">
                        <Sparkles size={14} className="text-[#FFD700]" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFD700]">
                            We Waiting for you guys
                        </span>
                    </div>

                    <h2
                        data-testid="discord-cta-heading"
                        className="font-display font-black text-white text-4xl sm:text-5xl lg:text-6xl tracking-tighter leading-[1.02] mb-6"
                    >
                        Ready to trade with <br />
                        <span className="bg-gradient-to-r from-[#00F0FF] via-blue-200 to-[#FFD700] bg-clip-text text-transparent">
                           100++ winners?
                        </span>
                    </h2>

                    <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                       satu kali bayar untuk seumur hidup. Bergabunglah dengan komunitas kami di Discord dan dapatkan akses instan ke edukasi, mentorship langsung, dan hasil nyata yang dibagikan langsung oleh anggota kami — setiap hari.
                    </p>

                    <a
                        href={DISCORD_INVITE_URL}
                        target="_blank"
                        rel="noreferrer"
                        data-testid="discord-cta-join-btn"
                        className="card-glow group inline-flex items-center justify-center gap-3 bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold px-10 py-5 rounded-md text-lg transition-all duration-200 hover:scale-[1.04] shadow-[0_0_40px_rgba(88,101,242,0.5)]"
                    >
                        <FaDiscord className="text-2xl" />
                        Join Discord
                        <ArrowRight
                            size={20}
                            className="card-glow group-hover:translate-x-1 transition-transform"
                        />
                    </a>

                    <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 mt-10 pt-8 border-t border-white/8">
                        {[
                            "700++ active members",
                            "Daily Outlook",
                            "Mentorship Session",
                            "Verified results",
                        ].map((b, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-2 text-sm text-slate-400"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
                                {b}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};