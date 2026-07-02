import { useState, useEffect } from "react";
import { motion } from "motion/react";
export default function CTA() {
  const calculateTimeLeft = () => {
    const currentYear = new Date().getFullYear();
    const difference =
      +new Date(`July 7, ${currentYear} 00:00:00`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => String(time).padStart(2, "0");

  return (
    <section id="cta" className="py-20 px-6 max-w-5xl mx-auto mb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-10 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-gray-900 via-gray-950 to-emerald-950 text-white text-center space-y-8 relative overflow-hidden shadow-2xl border border-emerald-500/20"
      >
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-green/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl leading-relaxed text-[25px] md:text-4xl font-extrabold tracking-tight">
            သင်တန်းသား ကန့်သတ်ထားပါတယ်!
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Record ကြည့်ပြီး Code လိုက်ရေးရုံတင်မဟုတ်ဘဲ လမ်းပျောက်နေရင်
            အချိန်မရွေး ဆွေးနွေးမေးမြန်းနိုင်မယ့်{" "}
            <span className="text-brand-green">Community</span> အပြင်{" "}
            <span className="text-brand-green"> Life-time Access</span> ပါ
            ရရှိမှာဖြစ်လို့ အခုပဲ{" "}
            <a
              href="https://t.me/@zerozone5"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400"
            >
              {" "}
              Telegram
            </a>{" "}
            ကနေ စာရင်းပေးလိုက်တော့။
          </p>
        </div>

        <div className=" font-semibold text-xs text-brand-green sm:text-2xl">
          Class Starts In
        </div>

        <div className="flex  justify-center items-center gap-1 sm:gap-3   my-6">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Mins", value: timeLeft.minutes },
            { label: "Secs", value: timeLeft.seconds },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2 ">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 sm:w-20 sm:h-20 bg-gray-900/80 border border-emerald-500/30 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-xl sm:text-3xl font-black text-emerald-400 font-mono tracking-wider">
                    {formatTime(item.value)}
                  </span>
                </div>
                <span className="text-xs text-gray-500 mt-2 font-medium uppercase tracking-widest">
                  {item.label}
                </span>
              </div>

              {index < 3 && (
                <span className="text-xl sm:text-2xl font-bold text-emerald-500/50 mb-6 animate-pulse">
                  :
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="https://t.me/@zerozone5"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-brand-green hover:bg-emerald-600 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-[1.03] shadow-[0_4px_20px_rgba(16,185,129,0.3)]"
          >
            သင်တန်းအပ်မယ်ကွာ 😛
          </a>
        </div>
      </motion.div>
    </section>
  );
}
