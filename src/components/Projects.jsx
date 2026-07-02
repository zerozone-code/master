import { motion } from "motion/react";

const projectList = [
  {
    title: "1. Professional Developer Portfolio",
    desc: "ကိုယ်ပိုင် Skill တွေနဲ့ Projects တွေကို HR တွေ မျက်စိကျသွားအောင် Motion ရဲ့ Parallax & Custom Micro-interactions တွေသုံးပြီး ဖန်တီးမယ့် Animation Website။",
    tags: ["React", "Motion v12", "Tailwind v4"],
    icon: "💼",
  },
  {
    title: "2. Advanced Todo System with Analytics",
    desc: "ရိုးရိုး Todo မဟုတ်ဘဲ Local Api, Filtering, Category ခွဲခြားမှုတွေ ပါဝင်မယ့် CRUD Project။",
    tags: ["JavaScript", "React Router Dom", "React Hooks", "Clean UI"],
    icon: "📝",
  },
  {
    title: "3. E-Commerce App With Mock Api (Add to Cart)",
    desc: "Zustand ကိုသုံးပြီး Global State ထဲမှာ Cart Logic (Add, Remove, Quantity Dynamic ) တွေကို Real-time လုပ်ဆောင်ပေးမယ့်  System",
    tags: ["React", "Zustand State", "Tailwind"],
    icon: "🛒",
  },
  {
    title: "4. Real-time Weather Forecast App",
    desc: "Third-party Live Weather API ကနေ Data ချိတ်ပြီး  မြို့အလိုက် မိုးလေဝသ အခြေအနေတွေကို လှပတဲ့ Animated Layouts တွေနဲ့ Dynamic ပြမယ့် App။",
    tags: ["API Integration", "Async/Await", "React"],
    icon: "🌤️",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center space-y-4 mb-20">
        <span className="text-xs inline-block font-bold text-brand-green tracking-widest uppercase bg-brand-green/10 px-3 py-1 rounded-md">
          Hands-on Experience
        </span>
        <h2 className=" leading-relaxed text-3xl md:text-5xl font-black">
          သင်တန်းပြီးရင် <span className="text-brand-green">CV</span> မှာ <br />
          ဖင်ခေါင်းကျယ်ပီး ထည့်လို့ရမယ့်{" "}
          <span className="text-brand-green">Real Projects</span> များ 😛
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectList.map((pj, idx) => (
          <motion.div
            key={pj.title}
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.3, ease: "ease" }}
            className="p-8 rounded-3xl bg-linear-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-950/20 border border-border-main shadow-xs flex flex-col justify-between relative overflow-hidden group hover:border-brand-green/30 transition-all"
          >
            <div className="absolute top-0 left-0 w-full h-[3px] bg-brand-green scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center text-2xl border border-brand-green/20">
                {pj.icon}
              </div>
              <h3 className="text-xl font-bold group-hover:text-brand-green transition-colors">
                {pj.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                {pj.desc}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-6">
              {pj.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
