import Image from "next/image";

export default function Home() {
return (
      <main className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-2xl text-center space-y-6">
            <h1 className="text-4xl font-bold">Juste Bouithy</h1>
              <h2 className="text-xl text-gray-600">
              Software Engineering Student | Mobile & Full-Stack Developer
              </h2>


              <p className="text-base text-gray-700">
              I’m a graduating software engineering student focused on building modern
              mobile and full-stack applications using React, React Native, Node.js,
              and cloud technologies. I enjoy turning ideas into reliable, user-focused
              software.
              </p>


            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
              href="/projects"
              className="px-6 py-3 rounded-xl bg-black text-white font-medium hover:opacity-90"
              >
              View Projects
              </a>
              <a
              href="https://github.com/Justerodney"
              target="_blank"
              className="px-6 py-3 rounded-xl border font-medium"
              >
              GitHub
              </a>
              <a
              href="https://www.linkedin.com/in/juste-rodney-bouithy/"
              target="_blank"
              className="px-6 py-3 rounded-xl border font-medium"
              >
              LinkedIn
              </a>
            </div>
          </div>
      </main>
);
}
