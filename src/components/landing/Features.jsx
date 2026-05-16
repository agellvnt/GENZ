
import { motion } from "framer-motion";
import {
    LineChart,
    Radio,
    GraduationCap,
    BarChart3,
    Shield,
    Bell,
} from "lucide-react";

const features = [
    {
        icon: <LineChart size={22} />,
        title: "Daily Trade Signals",
        desc: "Curated long/short setups with entry, stop-loss, and target levels delivered in real time.",
        accent: "blue",
    },
    {
        icon: <Radio size={22} />,
        title: "Live Trading Sessions",
        desc: "Tune into pre-market, intraday, and post-market sessions hosted by senior traders.",
        accent: "gold",
    },
    {
        icon: <GraduationCap size={22} />,
        title: "1-on-1 Mentorship",
        desc: "Personal trade reviews, psychology coaching, and roadmap planning from active mentors.",
        accent: "blue",
    },
    {
        icon: <BarChart3 size={22} />,
        title: "Daily Market Analysis",
        desc: "Detailed breakdowns of indices, options chains, FII/DII data, and global cues.",
        accent: "blue",
    },
    {
        icon: <Shield size={22} />,
        title: "Risk Management Tools",
        desc: "Position sizing calculators and risk-reward planners shared inside the community.",
        accent: "gold",
    },
    {
        icon: <Bell size={22} />,
        title: "Instant Alerts",
        desc: "Push notifications the moment a high-conviction setup is live — never miss a move.",
        accent: "blue",
    },
];

const Card = ({ f, i }) => {
    const isGold = f.accent === "gold";
    const ring = isGold ? "#FFD700" : "#00F0FF";

    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            data-testid={`feature-card-${i}`}
            className="card-glow group relative p-7 bg-[#0C0E14] border border-white/8 rounded-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            style={{
                boxShadow: "0 0 0 rgba(0,0,0,0)",
            }}
            onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = `0 0 25px ${ring}26, inset 0 0 0 1px ${ring}44`)
            }
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 0 rgba(0,0,0,0)")}
        >
            {/* Corner accents */}
            <div
                className="absolute top-0 left-0 w-3 h-3 border-t border-l opacity-30 group-hover:opacity-100 transition-opacity"
                style={{ borderColor: ring }}
            />
            <div
                className="absolute bottom-0 right-0 w-3 h-3 border-b border-r opacity-30 group-hover:opacity-100 transition-opacity"
                style={{ borderColor: ring }}
            />

            <div
                className="w-11 h-11 rounded-md border flex items-center justify-center mb-5 transition-colors"
                style={{
                    borderColor: `${ring}55`,
                    color: ring,
                    backgroundColor: `${ring}0d`,
                }}
            >
                {f.icon}
            </div>
            <h3 className="font-display font-bold text-white text-lg mb-2">
                {f.title}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
        </motion.div>
    );
};

export const Features = () => {
    return (
        <section
            id="features"
            data-testid="features-section"
            className="relative py-24 lg:py-32"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <motion.div
                    whileHover={{ scale: 1.03 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mb-14"
                >
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00F0FF]">
                        What You Get
                    </span>
                    <h2 className="font-display font-black text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.05] mt-4">
                        Everything you need to <br />
                        <span className="text-[#FFD700]">trade like a pro.</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {features.map((f, i) => (
                        <Card f={f} i={i} key={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};