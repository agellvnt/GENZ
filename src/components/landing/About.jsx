
import { motion } from "framer-motion";
import { Target, Users, Zap } from "lucide-react";

const ABOUT_IMG =
    "https://static.prod-images.emergentagent.com/jobs/b11163da-a0e0-419a-82f8-db0252672867/images/3eb914df1ae00b3ec1eab1734cf64b5351499fee7d3fbc42463c109959fe9d71.png";

export const About = () => {
    return (
        <section
            id="about"
            data-testid="about-section"
            className="relative py-24 lg:py-32 overflow-hidden"
        >
            <div className="absolute inset-0 grid-bg grid-bg-fade opacity-30" />
            <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-[#00F0FF]/8 blur-[120px]" />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image */}
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-br from-[#00F0FF]/30 to-[#FFD700]/20 blur-2xl rounded-3xl opacity-50" />
                        <div className="relative rounded-2xl overflow-hidden border border-white/10">
                            <img
                                src={ABOUT_IMG}
                                alt="GENZ Trade community trading setup"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent" />
                        </div>

                        {/* Floating glass card */}
                        <div className="absolute -bottom-6 -right-6 glass rounded-xl p-5 hidden sm:block">
                            <div className="text-xs uppercase tracking-widest text-[#FFD700] font-bold mb-1">
                                Est. 2022
                            </div>
                            <div className="font-display font-black text-white text-2xl">
                                3+ Years
                            </div>
                            <div className="text-xs text-slate-400">building winners</div>
                        </div>
                    </motion.div>

                    {/* Text */}
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="order-1 lg:order-2"
                    >
                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00F0FF]">
                            About GENZ Trade
                        </span>
                        <h2
                            data-testid="about-heading"
                            className="font-display font-black text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.05] mt-4 mb-6"
                        >
                            Built by traders. <br />
                            <span className="bg-gradient-to-r from-[#FFD700] to-[#00F0FF] bg-clip-text text-transparent">
                                For the next generation.
                            </span>
                        </h2>
                        <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-10">
                            GENZ Trade is not just another Discord group screaming  "buy now". We're a
                            high-signal community of options, crypto, and equity traders sharing
                            real setups, real entries, and real exits — every trading day.
                        </p>

                        <div className="space-y-5">
                            {[
                                {
                                    icon: <Target size={20} />,
                                    title: "Sharp Setups, Zero Noise",
                                    desc: "Curated trade ideas with clear entry, SL, and target levels.",
                                },
                                {
                                    icon: <Users size={20} />,
                                    title: "Mentorship That Cares",
                                    desc: "Mentors who answer your DMs and review your trade logs.",
                                },
                                {
                                    icon: <Zap size={20} />,
                                    title: "Live Sessions Daily",
                                    desc: "Pre-market plans, mid-day reviews, and post-market analysis.",
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    data-testid={`about-feature-${i}`}
                                    className="flex items-start gap-4 group"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 rounded-md border border-[#00F0FF]/30 bg-[#00F0FF]/5 flex items-center justify-center text-[#00F0FF] group-hover:bg-[#00F0FF]/10 transition-colors">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className="font-display font-bold text-white text-base mb-1">
                                            {item.title}
                                        </div>
                                        <div className="text-sm text-slate-400">{item.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};