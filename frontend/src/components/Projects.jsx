import React from 'react';

const projects = [
    {
        title: "Flight Booking App",
        description: "Integrated real-time APIs for global flight search and fare logic.",
        github: "https://github.com/yourusername/project1",
        live: "https://project1.vercel.app",
    },
    {
        title: "Food Delivery Clone",
        description: "MERN-based Zomato-like app with cart and Stripe payments.",
        github: "https://github.com/yourusername/project2",
        live: "https://project2.vercel.app",
    },
];

function Projects() {
    return (
        <section className="p-10 md:p-20 bg-gray-800">
            <h2 className="text-3xl font-semibold mb-8 text-accent">Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, i) => (
                    <div key={i} className="bg-gray-700 rounded-xl p-6 shadow-md">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-300">{project.description}</p>
                        <div className="mt-3 space-x-4">
                            <a href={project.github} className="text-blue-400" target="_blank">GitHub</a>
                            <a href={project.live} className="text-green-400" target="_blank">Live</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;