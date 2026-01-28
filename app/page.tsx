"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
} from "react-icons/si";
import Image from "next/image";


export default function HomePage() {
  return (
    <main className="scroll-smooth pt-20">
      {/* CONTENT SURFACE */}
      <div className="max-w-6xl mx-auto bg-white shadow-sm">

        {/* HERO */}
        <section id="hero" className="min-h-screen flex items-center justify-center px-8">
          <div className="max-w-3xl text-center space-y-6">
            <Image
              src="/profile.jpeg"
              alt="Juste Bouithy"
              fill={false}
              width={200}
              height={200}
              className="mx-auto rounded-full object-cover"
            />
            <p className="text-gray-500 text-sm tracking-wide">
              Hi, my name is Juste Bouithy 👋
            </p>

            <h1 className=" text-gray-700 text-4xl sm:text-5xl font-bold leading-tight">
              Software Engineer
              <br />
              <span className="text-gray-700 font-medium">
                Mobile & Full-Stack Developer
              </span>
            </h1>

            <p className="text-gray-600 max-w-xl mx-auto">
              I build modern, reliable applications with a focus on clean architecture,
              performance, and user experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                View Projects
              </a>
              <a
                href="https://github.com/Justerodney"
                target="_blank"
                className="text-gray-700 px-6 py-3 rounded-xl border font-medium hover:text-blue-600 hover:border-blue-600 transition"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/juste-rodney-bouithy/"
                target="_blank"
                className="text-gray-700 px-6 py-3 rounded-xl border font-medium hover:text-blue-600 hover:border-blue-600 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* ABOUT */}
        <section id="about" className="py-28 px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className=" text-gray-700 text-3xl font-bold">
              <span className="text-blue-600">#</span> About Me
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
              I’m a software engineer focused on building intuitive, scalable applications.
              I care deeply about clean architecture, maintainable code, and thoughtful user
              experiences.
            </p>

            <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
              I enjoy working across the stack — from designing responsive interfaces to
              building secure APIs and data-driven systems — while continuously learning
              and improving my craft.
            </p>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* SKILLS */}
        <section id="skills" className="py-28 px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className=" text-gray-700 text-3xl font-bold mb-4">
              <span className="text-blue-600">#</span> Skills
            </h2>
            <p className="text-gray-600 mb-12">
              Technologies I work with regularly
            </p>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-10 place-items-center">
              <Skill icon={<FaReact />} label="React" />
              <Skill icon={<SiNextdotjs />} label="Next.js" />
              <Skill icon={<FaReact />} label="React Native" />
              <Skill icon={<SiTailwindcss />} label="Tailwind" />
              <Skill icon={<FaNodeJs />} label="Node.js" />
              <Skill icon={<FaJava />} label="Java" />
              <Skill icon={<SiMysql />} label="MySQL" />
              <Skill icon={<FaAws />} label="AWS" />
              <Skill icon={<FaGitAlt />} label="Git" />
            </div>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* PROJECTS */}
        <section id="projects" className="py-28 px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-gray-700 text-3xl font-bold mb-4 text-center">
              <span className="text-blue-600">#</span> Projects
            </h2>
            <p className="text-gray-600 mb-16 text-center">
              Selected work showcasing my experience
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="border rounded-xl p-6 shadow-sm hover:shadow-md transition flex flex-col"
              >
                <h3 className="text-gray-500 text-xl font-semibold mb-2">
                  Full-Stack Real Estate App
                </h3>
                <p className="text-gray-700 mb-3">
  A full-stack real estate platform with secure APIs and database persistence.
</p>

<p className="text-gray-600 text-sm leading-relaxed">
  <span className="font-medium">Why I built this:</span> This project was inspired
  by a system I grew up with, where rental and for-sale addresses were written on a
  public blackboard. While community-driven, the information was often outdated and
  difficult to manage. I built this application to simplify the process without
  removing the role of dealers—making it easier for homeowners to share listings,
  for dealers to promote them, and for people to find a place to live through one
  accessible platform.
</p>



                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge>React</Badge>
                  <Badge>Java (Quarkus)</Badge>
                  <Badge>MySQL</Badge>
                  <Badge>AWS</Badge>
                </div>

                <a
                  href="https://github.com/Justerodney/CS320-Project-JusteBouithy"
                  target="_blank"
                  className="text-gray-300 underline font-medium mt-auto hover:text-blue-600 transition"
                >
                  GitHub Repository
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="border rounded-xl p-6 shadow-sm hover:shadow-md transition flex flex-col"
              >
                <h3 className="text-gray-500 text-xl font-semibold mb-2">Aora – Mobile App</h3>
                <p className="text-gray-700 mb-4">
                  A mobile-first app focused on clean navigation, reusable components,
                  and a polished user experience.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge>React Native</Badge>
                  <Badge>Expo</Badge>
                  <Badge>NativeWind</Badge>
                </div>

                <a
                  href="https://github.com/Justerodney/Aora-App-Justerodney"
                  target="_blank"
                  className="text-gray-300 underline font-medium mt-auto hover:text-blue-600 transition"
                >
                  GitHub Repository
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* CONTACT */}
        <section id="contact" className="py-28 px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-gray-700 text-3xl font-bold">
              <span className="text-blue-600">#</span> Contact
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Interested in working together or have a question?
              I’m always open to discussing new opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="mailto:bouithyjusterodney@gmail.com"
                className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                Get in Touch
              </a>
              <a
                href="https://linkedin.com/in/juste-rodney-bouithy"
                target="_blank"
                className="text-gray-400 px-6 py-3 rounded-xl border font-medium hover:text-blue-600 hover:border-blue-600 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Juste Bouithy. All rights reserved.
        </footer>

      </div>
    </main>
  );
}

/* ---------- Components ---------- */

function Skill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 text-gray-600 hover:text-blue-600 transition">
      <div className="text-3xl">{icon}</div>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs px-3 py-1 rounded-full border text-gray-600">
      {children}
    </span>
  );
}
