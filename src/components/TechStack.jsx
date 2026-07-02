import { motion } from "motion/react";

const stacks = [
  {
    name: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    desc: "ES6+, Async/Await, Array Methods အစုံ",
    icon: "💛",
  },
  {
    name: "React JS",
    link: "https://react.dev/",
    desc: "Hooks, Component Architecture, Optimization",
    icon: "⚛️",
  },
  {
    name: "Tailwind CSS v4",
    link: "https://tailwindcss.com/",
    desc: "Modern Utility-First Design & Fluid Layouts",
    icon: "🎨",
  },
  {
    name: "Motion (Framer)",
    link: "https://motion.dev/",
    desc: "Micro-interactions & Complex Scroll Animations",
    icon: "✨",
  },
  {
    name: "Zustand",
    link: "https://zustand-demo.pmnd.rs/",
    desc: "Bear necessities for state management in React.",
    icon: "🐻",
  },
];

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="py-20 bg-gray-50 dark:bg-gray-950/40 border-y border-border-main px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-3xl md:text-4xl font-black">
            သင်ကြားမယ့်{" "}
            <span className="text-brand-green">Industry-Standard Stacks</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-sm">
            လုပ်ငန်းခွင်ထဲ တကယ်အသုံးချနေတဲ့ နည်းပညာတွေကို အလွတ်ကျက်စရာမလိုဘဲ
            Logic အတိုင်း နားလည်အောင် သင်ပြပေးသွားမှာပါ။
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {stacks.map((tech, index) => (
            <motion.a
              href={tech.link}
              target="_blank"
              key={tech.name}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-border-main shadow-xs text-center flex flex-col items-center justify-center space-y-3 hover:border-brand-green/40 transition-colors"
            >
              <span className="text-3xl">{tech.icon}</span>
              <h3 className="font-bold text-base">{tech.name}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {tech.desc}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
