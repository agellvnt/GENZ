import { motion } from "framer-motion";

const photos = [
    {
        url: "https://images.unsplash.com/photo-1589483232748-515c025575bc?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
        alt: "Members celebrating",
        span: "md:col-span-2 md:row-span-2 aspect-square",
    },
    {
        url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=srgb&fm=jpg&q=85&w=700",
        alt: "Group strategy session",
        span: "aspect-[4/5]",
    },
    {
        url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?crop=entropy&cs=srgb&fm=jpg&q=85&w=700",
        alt: "Multi-screen trading setup",
        span: "aspect-[4/5]",
    },
    {
        url: "https://images.unsplash.com/photo-1556157382-97eda2d62296?crop=entropy&cs=srgb&fm=jpg&q=85&w=700",
        alt: "Young trader smiling",
        span: "aspect-[4/5]",
    },
    {
        url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
        alt: "Team collaboration",
        span: "md:col-span-2 aspect-[2/1]",
    },
];

export const Community = () => {
    return (
        <section
            id="community"
            data-testid="community-section"
            className="relative py-24 lg:py-32 overflow-hidden"
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
                        The Community
                    </span>
                    <h2 className="font-display font-black text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.05] mt-4">
                        More than a group. <br />
                        <span className="text-[#FFD700]">A movement.</span>
                    </h2>
                    <p className="text-base text-slate-400 mt-5">
                        From meetups in Mumbai to Discord game nights, GENZ Trade is where
                        young traders connect, build, and win — together.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-auto">
                    {photos.map((p, i) => (
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            data-testid={`community-photo-${i}`}
                            className={`group relative overflow-hidden rounded-lg border border-white/8 ${p.span}`}
                        >
                            <img
                                src={p.url}
                                alt={p.alt}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050507]/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <span className="text-xs uppercase tracking-widest text-[#00F0FF] font-bold">
                                    GENZ Trade
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};