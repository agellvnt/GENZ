import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "FAYTDROP",
        role: "Core Member Batch 1",
        avatar:
            "https://plus.unsplash.com/premium_photo-1738590017220-5820f49608cc?q=80&w=1267&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Dulu entry cuma modal feeling dan FOMO. Setelah masuk GENZ Trade, baru ngerti cara baca liquidity, bias, sama narrative dengan benar. Sekarang trading jauh lebih tenang dan jelas arahnya.",
        pnl: "+₹6.4L",
        period: "in 4 months",
    },
    {
        name: "ENDIK1",
        role: "Core Member Batch 1",
        avatar:
            "https://plus.unsplash.com/premium_photo-1738590017220-5820f49608cc?q=80&w=1267&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Belajar dari YouTube bikin gue makin bingung karena semua ngomong beda. Di GENZ Trade materinya rapih, simpel, dan langsung bisa dipraktekin di market",
        pnl: "+₹2.1L",
        period: "first 6 months",
    },
    {
        name: "MALLARIP",
        role: "Core Member Batch 1",
        avatar:
            "https://plus.unsplash.com/premium_photo-1738590017220-5820f49608cc?q=80&w=1267&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "pakai metode yang diajarin selama di elite, udah bisa entry, arah market sesuai dengan teori, ga asal buy sell,  profit tipis² di cent🔥",
        pnl: "+₹3.8L",
        period: "this quarter",
    },
    {
        name: "QCEM",
        role: "Core Member Batch 1",
        avatar:
            "https://plus.unsplash.com/premium_photo-1738590017220-5820f49608cc?q=80&w=1267&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "No fomo, no asal entry. Sekarang udah bisa trading mandiri. 💯",
        pnl: "+₹1.9L",
        period: "in 5 months",
    },
    {
        name: "CHY",
        role: "F&O Trader · Surat",
        avatar:
            "https://plus.unsplash.com/premium_photo-1738590017220-5820f49608cc?q=80&w=1267&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "ilmu daging wagyu a5 dari mas @Astana dan @farhan 🔥",
        pnl: "+₹4.7L",
        period: "in 8 months",
    },
    {
        name: "PRABOBO",
        role: "Crypto + Equity",
        avatar:
            "https://plus.unsplash.com/premium_photo-1738590017220-5820f49608cc?q=80&w=1267&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "“Masuk GENZ Trade dari zero banget. Sekarang udah ngerti liquidity, narrative, dan market structure dengan cara yang simpel dan mudah dipahami.”",
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
                       apa yang dirasakan oleh <br />
                        <span className="bg-gradient-to-r from-[#FFD700] to-[#00F0FF] bg-clip-text text-transparent">
                           para member kami.
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