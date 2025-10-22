'use client';

'use client';

import { useEffect, useRef } from 'react';

const testimonials = [
  { text: "The home screen widgets are a game changer! I can log my habits without even opening the app. My streak has never been longer!", author: "Sarah Mitchell", flag: "🇺🇸" },
  { text: "Finally, a habit tracker that understands my schedule changes. The smart streak tracking is brilliant—it doesn't punish me for taking planned breaks.", author: "Thomas Müller", flag: "🇩🇪" },
  { text: "The heatmap view is so motivating! Seeing my progress visualized keeps me coming back every day. Best habit tracker I've used.", author: "Yuki Tanaka", flag: "🇯🇵" },
  { text: "I love how I can customize each habit with colors and icons. Makes tracking feel personal and fun. The widgets are super useful too!", author: "Lucas Silva", flag: "🇧🇷" },
  { text: "The iCloud sync is seamless. I track on my iPhone in the morning and check progress on my iPad at night. Everything just works!", author: "Sophie Dubois", flag: "🇫🇷" },
  { text: "Simple, beautiful, and effective. The statistics help me understand my patterns. Worth every penny for the Pro version!", author: "Raj Patel", flag: "🇮🇳" },
];

export default function TestimonialCarousel() {
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
