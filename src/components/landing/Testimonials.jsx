import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Aarav Kapoor",
        role: "Options Trader · Mumbai",
        avatar:
            "https://images.unsplash.com/photo-1761959138573-e7785091a829?crop=entropy&cs=srgb&fm=jpg&q=85&w=400",
        text: "Switched from random YouTube signals to GENZ Trade and my equity curve finally looks like a curve and not a heart attack. Mentors are the real deal.",
        pnl: "+₹6.4L",
        period: "in 4 months",
    },
    {
        name: "Priya Sharma",
        role: "Crypto Swing Trader",
        avatar:
            "https://images.unsplash.com/photo-1772989665252-7cb41ae759cc?crop=entropy&cs=srgb&fm=jpg&q=85&w=400",
        text: "I joined as a complete beginner. Six months later I'm managing my own portfolio confidently. The mentorship is what makes this place different.",
        pnl: "+₹2.1L",
        period: "first 6 months",
    },
    {
        name: "Rohan Mehta",
        role: "Intraday Trader · Bangalore",
        avatar:
            "https://images.unsplash.com/photo-1584598788787-e6ce5159df0b?crop=entropy&cs=srgb&fm=jpg&q=85&w=400",
        text: "The pre-market calls alone are worth 10x what most people charge. Tight risk management, clear levels, no fluff.",
        pnl: "+₹3.8L",
        period: "this quarter",
    },
    {
        name: "Ishita Verma",
        role: "Equity Investor · Delhi",
        avatar:
            "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?crop=entropy&cs=srgb&fm=jpg&q=85&w=400",
        text: "Honestly the vibe is what keeps me here. Smart people, zero ego, daily learning. Profit is just a bonus at this point.",
        pnl: "+₹1.9L",
        period: "in 5 months",
    },
    {
        name: "Karan Patel",
        role: "F&O Trader · Surat",
        avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=srgb&fm=jpg&q=85&w=400",
        text: "Blew up my account twice before joining. Took 3 months of discipline inside the community to recover. Now I trade with rules — not feelings.",
        pnl: "+₹4.7L",
        period: "in 8 months",
    },
    {
        name: "Sanya Reddy",
        role: "Crypto + Equity",
        avatar:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=srgb&fm=jpg&q=85&w=400",
        text: "Reviews of my trade journal every week have completely changed my edge. I actually understand WHY I'm taking trades now.",
        pnl: "+₹2.6L",
        period: "this year",
    },
];

export const Testimonials = () => {
    return (
        <section
            id="reviews"
            data-testid="testimonials-section"
            className="relative py-24 lg:py-32 overflow-hidden"
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#00F0FF]/5 blur-[160px]" />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
                <motion.div
                    whileHover={{ scale: 1.03 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mb-14"
                >
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00F0FF]">
                        Member Reviews
                    </span>
                    <h2 className="font-display font-black text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.05] mt-4">
                        Words from <br />
                        <span className="bg-gradient-to-r from-[#FFD700] to-[#00F0FF] bg-clip-text text-transparent">
                            the trading floor.
                        </span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            data-testid={`testimonial-card-${i}`}
                            className="card-glow group relative glass rounded-2xl p-7 hover:border-[#00F0FF]/40 hover:-translate-y-1 transition-all duration-300"
                        >
                            <Quote
                                size={32}
                                className="absolute top-5 right-5 text-[#00F0FF]/15 group-hover:text-[#00F0FF]/40 transition-colors"
                            />

                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, s) => (
                                    <Star
                                        key={s}
                                        size={14}
                                        className="fill-[#FFD700] text-[#FFD700]"
                                    />
                                ))}
                            </div>

                            <p className="text-slate-300 text-sm leading-relaxed mb-6">
                                "{t.text} "
                            </p>

                            <div className="flex items-center justify-between pt-5 border-t border-white/8">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={t.avatar}
                                        alt={t.name}
                                        className="w-10 h-10 rounded-full object-cover border border-white/15"
                                    />
                                    <div>
                                        <div className="text-sm font-semibold text-white">
                                            {t.name}
                                        </div>
                                        <div className="text-xs text-slate-500">{t.role}</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="font-display font-black text-[#FFD700] text-base">
                                        {t.pnl}
                                    </div>
                                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">
                                        {t.period}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};