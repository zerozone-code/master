import { motion } from "motion/react"; // Framer Motion v12 package name

export default function Requirements() {
  const reqs = [
    {
      title: "Prerequisite Knowledge",
      desc: "HTML & CSS ရဲ့ အခြေခံ (Tag များ၊ Styling နှင့် Layout ) ကို အနည်းငယ် နားလည်ထားရင်ရပီ ကျန်တာဘာမှမလိုတော့ဘူး။",
      icon: (
        <svg
          className="w-6 h-6 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Hardware Specifications",
      desc: "Code ရေးရင် အဆင်ပြေအောင် Laptop/Desktop က RAM အနည်းဆုံး 8 GB ဆိုရင် အေးဆေးလုပ်လို့ရပီ။",
      icon: (
        <svg
          className="w-6 h-6 text-emerald-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="requirements" className="py-20 px-6 max-w-7xl mx-auto">
      {/* Section Title */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl text-brand-green font-bold tracking-tight "
        >
          Requirements
        </motion.h2>
        {/* <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-4 text-sm md:text-base max-w-xl mx-auto"
        >
          သင်ခန်းစာများကို အဆင်ပြေပြေ လေ့လာနိုင်ဖို့အတွက် အောက်ပါအချက်လေးတွေ
          ပြည့်စုံဖို့ လိုအပ်ပါတယ်ဗျာ။
        </motion.p> */}
      </div>

      {/* Requirements Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {reqs.map((req, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl border border-black/10 dark:border-white/10  backdrop-blur-sm shadow-xl flex flex-col justify-between transition-all duration-300"
          >
            <div>
              {/* Icon & Title */}
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl border border-black/10 dark:border-white/10">
                  {req.icon}
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider block">
                    {req.title}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="leading-relaxed text-sm md:text-base">{req.desc}</p>
            </div>

            {/* Subtle Accent Bottom Line */}
            <div
              className={`h-1 w-12 rounded-full mt-6 ${index === 0 ? "bg-blue-500/50" : "bg-emerald-500/50"}`}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
