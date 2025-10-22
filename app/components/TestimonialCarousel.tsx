'use client';

import { useEffect, useRef } from 'react';

interface Testimonial {
  text: string;
  author: string;
  flag: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 0.5;

      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollPosition;

        // Reset when we've scrolled through half the content (because we duplicated it)
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
      }

      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="relative overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden"
        style={{ scrollBehavior: 'auto' }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full md:w-[calc(33.333%-16px)] bg-gray-900 border border-gray-800 p-8 rounded-2xl"
          >
            <p className="text-gray-300 italic mb-6 leading-relaxed">
              &quot;{testimonial.text}&quot;
            </p>
            <p className="font-semibold text-white flex items-center gap-2">
              <span>{testimonial.flag}</span>
              <span>- {testimonial.author}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
