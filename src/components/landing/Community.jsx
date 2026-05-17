import { motion } from "framer-motion";

const photos = [



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
                       “Komunitas ini dibangun untuk kalian yang serius ingin berkembang di dunia trading, bukan cuma ikut-ikutan atau sekadar cari sinyal instan. Di sini kita belajar dari dasar sampai ke cara berpikir market yang benar, mulai dari market structure, liquidity, sampai bagaimana membaca pergerakan harga dengan lebih logis dan terarah.

Kami percaya setiap trader punya prosesnya masing-masing, dan tidak ada jalan instan untuk jadi konsisten. Karena itu, komunitas ini hadir sebagai tempat untuk saling support, saling berbagi insight, dan tumbuh bareng dengan ritme belajar yang jelas.

Kalian akan ketemu banyak trader lain yang juga sedang berproses, dari yang masih baru sampai yang sudah mulai konsisten, jadi suasananya bukan kompetisi tapi kolaborasi. Tujuannya sederhana: supaya setiap member bisa naik level pelan-pelan dengan cara yang lebih terarah dan tidak mengulang kesalahan yang sama terus-menerus.

Kami siap membimbing kalian untuk membangun mindset yang benar, disiplin dalam eksekusi, dan paham bagaimana market sebenarnya bekerja, supaya pada akhirnya kalian bisa jadi trader yang lebih stabil, matang, dan punya arah yang jelas dalam jangka panjang.”
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