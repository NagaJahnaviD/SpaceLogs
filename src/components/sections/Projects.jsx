import {RevealOnScroll} from '../RevealOnScroll'
export const Projects=()=>{
    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">Cab booking Simulator</h3>
                    <p className="text-gray-400 mb-4">Multithreaded system in Java for concurrent cab bookings, implementing thread synchronization
                    for conflict prevention and integrating MySQL for booking management.</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                    {["Java","MySQL","JDBC"].map((tech)=>(
                        <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"> 
                        {tech}
                        </span>
                    ))}
                </div>
                    <div className="flex justify-between items-center">
                        <a href="https://github.com/NagaJahnaviD/MultiThreaded-Cab-Booking-System.git" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project → </a>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">OmniGuard AI</h3>
                    <p className="text-gray-400 mb-4"> Engineered an AI-powered cyberbullying detection app, integrating NLP models and ASR, improving text/audio
                    analysis using Streamlit and Gemini API Tools.</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                    {["Streamlit","Transformers","Gemini API","NPL, ML models"].map((tech)=>(
                        <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"> 
                        {tech}
                        </span>
                    ))}
                </div>
                    <div className="flex justify-between items-center">
                        <a href="https://github.com/NagaJahnaviD/OmniGuard-AI" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project → </a>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">Personal Portfolio</h3>
                    <p className="text-gray-400 mb-4"> Designing a responsive portfolio template using modern web technologies to showcase projects, skills,
                    experience and contact page.</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                    {["TailwindCSS","React","EmailJS","HTML"].map((tech)=>(
                        <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"> 
                        {tech}
                        </span>
                    ))}
                </div>
                    <div className="flex justify-between items-center">
                        <a href="https://github.com/NagaJahnaviD/Jahnavi-Portfolio.git" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project → </a>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">The Legendary Snake</h3>
                    <p className="text-gray-400 mb-4"> Recreated the classic Snake game, focusing on event-driven programming and optimized rendering for a
                    smoother experience.</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                    {["JavaScript","HTML","CSS"].map((tech)=>(
                        <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"> 
                        {tech}
                        </span>
                    ))}
                </div>
                    <div className="flex justify-between items-center">
                        <a href="https://github.com/NagaJahnaviD/Snake-Game.git" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project → </a>
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
}