"use client";

import { useEffect, useState } from "react";

const sections = ["hero", "about", "projects", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        { threshold: 0.6 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-5xl mx-auto px-6">
        <ul className="flex items-center justify-center gap-8 py-4 text-sm font-medium">
          {sections.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`transition ${
                  active === id
                    ? "text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
