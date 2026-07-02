import { motion } from "motion/react"; // Framer Motion v12 package name

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen pt-5 px-6 text-center overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="z-10 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-semibold tracking-wide backdrop-blur-sm shadow-lg shadow-blue-500/5 flex flex-col sm:flex-row items-center gap-2 sm:gap-4"
        >
          <span className="flex items-center gap-1">
            🔥 ပုံမှန်သင်တန်းကြေး -{" "}
            <span className="line-through text-slate-500 font-normal">
              ၁၂၀,၀၀၀ MMK
            </span>
          </span>
          <span className="hidden sm:inline text-slate-600">|</span>
          <span className="text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full text-xs font-bold border border-emerald-500/20 animated-pulse">
            ⚡ Early Bird (First 10) - ၁၀၀,၀၀၀ MMK
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs leading-relaxed font-extrabold sm:text-2xl tracking-tight"
        >
          မင်းတို့မှာ သင်တန်းကြေး နင့်{" "}
          <span className="text-brand-green">Zero Zone </span>ရှိရင် <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-400">
            Professional Developer
          </span>{" "}
          တစ်ယောက် ဖြစ်ပီ!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-base sm:text-xl text-slate-400 max-w-2xl font-light leading-relaxed"
        >
          ရိုးရိုးတန်းတန်း Web ဆောက်တာမျိုး မဟုတ်ဘဲ လုပ်ငန်းခွင်ဝင် Logic တွေ၊
          Complex State Management နဲ့ Web Animations တွေအထိ Production-Grade
          Stack တွေနဲ့ အပီအပြင် ကြိတ်မယ့် Masterclass 😛
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex gap-6 sm:gap-12 justify-center items-center px-6 py-3 rounded-2xl border border-slate-800/60 backdrop-blur-md shadow-inner"
        >
          <div className="text-center">
            <span className="block text-xs uppercase font-medium tracking-wider">
              သင်တန်းကာလ
            </span>
            <span className="text-lg sm:text-xl font-bold">2 Month +</span>
          </div>
          <div className="w-[1px] h-8 bg-slate-800" />
          <div className="text-center">
            <span className="block text-xs uppercase font-medium tracking-wider">
              စုစုပေါင်း Video
            </span>
            <span className="text-lg sm:text-xl font-bold text-brand-green">
              100 +
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center w-full"
        >
          <a
            href="https://t.me/zerozone5"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 text-white rounded-xl font-medium bg-brand-green hover:bg-brand-lime transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-center shadow-lg shadow-brand-green/20"
          >
            သင်တန်းအပ်မယ်ကွာ
          </a>

          <a
            href="#tech-stack"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-medium bg-slate-800/80 border border-slate-700 hover:bg-slate-800 text-slate-300 hover:text-white transition-all duration-300 text-center backdrop-blur-sm"
          >
            Course Outline & Tech Stack
          </a>
        </motion.div>
      </div>

      {/* Decorative Bottom Wave/Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
    </section>
  );
}
