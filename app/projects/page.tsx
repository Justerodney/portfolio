export default function ProjectsPage() {
return (
    <main className="min-h-screen px-6 py-16 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Projects</h1>
        {/* Aora Mobile App */}

            <section className="mb-16">
                <h2 className="text-2xl font-semibold mb-2">Aora – Mobile App</h2>
                <p className="text-gray-700 mb-4">
                A modern mobile application built to explore mobile-first navigation,
                styling, and user experience using the React Native ecosystem.
                </p>


                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                    <li>Built with Expo Router and React Native</li>
                    <li>Styled using NativeWind for consistent UI</li>
                    <li>Implemented mobile navigation and reusable components</li>
                    <li>Focused on clean architecture and developer experience</li>
                </ul>


                <p className="text-sm text-gray-600 mb-4">
                Tech Stack: React Native, Expo Router, NativeWind, JavaScript/TypeScript
                </p>


                <div className="flex gap-4">
                    <a
                    href="https://github.com/YOUR_GITHUB/AORA_REPO"
                    target="_blank"
                    className="underline font-medium"
                    >
                    GitHub Repo
                    </a>
                </div>


                {/* Demo video will go here */}
                <div className="mt-6">
                    <video
                    src="/aora-demo.mp4"
                    controls
                    className="w-full max-w-md rounded-xl border shadow"
                    />
                    <p className="text-sm text-gray-500 mt-2">
                    Demo showing the app running in mobile view during development.
                    </p>
                </div>

            </section>

            {/* Full-Stack Real Estate App */}
            <section className="mb-16">
                <h2 className="text-2xl font-semibold mb-2">Full-Stack Real Estate App</h2>


                <p className="text-gray-700 mb-4">
                A full-stack web application designed to manage real estate bidder data
                with secure authentication and cloud-based persistence.
                </p>


                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                    <li>Built RESTful APIs using Quarkus (Java) with Hibernate ORM</li>
                    <li>Implemented full CRUD operations for property and user data</li>
                    <li>Configured a local MySQL database using MySQL Server and Workbench</li>
                    <li>Updated backend configuration to support local JDBC connections</li>
                    <li>Integrated AWS Amplify and Amazon RDS for optional cloud deployment</li>
                    <li>Enabled the application to run fully locally without AWS dependencies</li>
                </ul>


                <p className="text-sm text-gray-600 mb-4">
                  Tech Stack: React, Quarkus (Java), MySQL, Hibernate, AWS Amplify, Amazon RDS
                </p>


                <div className="flex gap-4">
                    <a
                    href="https://github.com/Justerodney/CS320-Project-JusteBouithy"
                    target="_blank"
                    className="underline font-medium"
                    >
                    GitHub Repo
                    </a>
                </div>
            </section>
        
    </main>
);
}