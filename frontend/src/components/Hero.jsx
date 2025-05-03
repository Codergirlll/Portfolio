import React from 'react';
import { motion } from "framer-motion";

function Hero() {
    return (
        <section className="flex flex-col items-center justify-center h-screen text-center p-4 bg-gray-900 text-white">
            <motion.h1
                className="text-5xl md:text-6xl font-bold mb-4"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Hi, I'm <span className="text-accent">Himani Gangwar</span>
            </motion.h1>
            <motion.p
                className="text-xl text-gray-300 max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                I’m a passionate Node.js backend developer with a strong focus on building efficient, secure, and scalable web applications. With over 2.9 years of hands-on experience, I specialize in integrating third-party APIs (especially in travel domains like flights and hotels), crafting seamless RESTful services, and ensuring data flows reliably across systems. I thrive in backend problem-solving, and I’m constantly learning to stay ahead in performance, architecture, and security. I love turning complex backend logic into clean, maintainable solutions that drive real-world value.
            </motion.p>
            <motion.a
                href="#projects"
                className="mt-6 inline-block px-6 py-3 bg-accent text-white rounded-full shadow-md hover:bg-opacity-80 transition"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
            >
                View My Work
            </motion.a>
        </section>
    );
}

export default Hero;
