import React from "react";

const Footer = () => {
  return (
    <div className="  border-t border-black/10 dark:border-white/10 flex flex-col  py-10 md:flex-row items-center justify-between px-4 md:px-12">
      <div className="text-brand-green font-bold">
        တကယ် skill ရစေမယ့်အတန်းပါ
      </div>
      <div className="md:text-xl uppercase font-bold bg-linear-to-r from-brand-green to-blue-400 bg-clip-text text-transparent">
        develop by zero zone
      </div>
      <div className="text-brand-green font-bold text-center">
        တက်ချင်တက် မတက်ချင်နေ မင်းတို့အတွက် ပြော..တာ😛
      </div>
    </div>
  );
};

export default Footer;
