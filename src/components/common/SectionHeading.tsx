import React from 'react';
import { BlurText } from '../animations/BlurText';
import { ScrollReveal } from '../animations/ScrollReveal';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlightText?: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlightText,
  subtitle,
  align = 'center',
  className = '',
  light = false,
}) => {
  return (
    <div
      className={`max-w-3xl ${
        align === 'center' ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {badge && (
        <ScrollReveal y={10}>
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-[0.2em] uppercase mb-3 ${
              light
                ? 'bg-white/10 text-amber-200 border border-white/20'
                : 'bg-[#B18B59]/10 text-[#8E6838] border border-[#B18B59]/25'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#B18B59]"></span>
            {badge}
            <span className="w-1.5 h-1.5 rounded-full bg-[#B18B59]"></span>
          </div>
        </ScrollReveal>
      )}

      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight leading-[1.18] mb-4 ${
          light ? 'text-white' : 'text-[#29251F]'
        }`}
      >
        <BlurText text={title} className="justify-center" />
        {highlightText && (
          <span className="block font-script text-4xl sm:text-5xl lg:text-6xl text-[#7A245A] font-normal mt-1">
            {highlightText}
          </span>
        )}
      </h2>

      {subtitle && (
        <ScrollReveal delay={0.2} y={15}>
          <p
            className={`text-base sm:text-lg font-light leading-relaxed ${
              light ? 'text-stone-300' : 'text-[#4A443D]'
            }`}
          >
            {subtitle}
          </p>
        </ScrollReveal>
      )}

      <div
        className={`flex items-center gap-2 mt-4 ${
          align === 'center' ? 'justify-center' : 'justify-start'
        }`}
      >
        <span
          className={`h-[1px] w-8 ${
            light ? 'bg-white/30' : 'bg-[#B18B59]/40'
          }`}
        ></span>
        <span
          className={`text-xs ${
            light ? 'text-amber-200/80' : 'text-[#B18B59]'
          }`}
        >
          ✦
        </span>
        <span
          className={`h-[1px] w-8 ${
            light ? 'bg-white/30' : 'bg-[#B18B59]/40'
          }`}
        ></span>
      </div>
    </div>
  );
};
