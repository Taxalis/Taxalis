"use client";

import { useState } from "react";
import Icon from "@/app/components/Icon";
import { Reveal, DELAYS } from "@/app/components/Reveal";
import { faqItems } from "@/app/lib/faq";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {faqItems.map((item, i) => {
        const open = openIndex === i;
        return (
          <Reveal key={item.question} className={DELAYS[i % 4]}>
            <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm shadow-slate-200/40">
              <button
                onClick={() => setOpenIndex(open ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={open}
              >
                <span className="font-semibold text-slate-900">{item.question}</span>
                <span
                  className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 transition-transform ${
                    open ? "rotate-45" : ""
                  }`}
                >
                  <Icon name="x" size={14} className={open ? "" : "rotate-45"} />
                </span>
              </button>
              {open && (
                <div className="px-6 pb-6 text-sm leading-relaxed text-slate-600">{item.answer}</div>
              )}
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
