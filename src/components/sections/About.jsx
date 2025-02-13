import {RevealOnScroll} from '../RevealOnScroll'
export const About =()=>{

    const frontendSkills=["ReactJS","JavaScript","TailwindCSS","Bootstrap","HTML"];
    const backendSkills=["Node.Js","MongoDB","SQL","MySQL","Express.Js","REST API","Postman API"];
    const tool=["Git","Github","Tableau","VS code","Eclipse","R Studio"];
    const languages=["C","C++","JaxaScript","Python","Java","R (beginner)"];
    


    return <section id="about" 
    className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>

            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                I am a second-year Computer Science student at VNR VJIET with a keen interest in AI, web development, and cutting-edge technologies. Constantly looking for ways to enhance my skills, I actively participate in hackathons, internships, and collaborative projects. I believe in leveraging technology to drive meaningful impact and am always eager to learn from industry experts. With a strong passion for innovation, I strive to push boundaries, take on new challenges, and contribute effectively in dynamic environments.
             </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 tansition-all">
                        <h3 className="text-xl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {
                                frontendSkills.map((tech)=>(
                                    <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"> {tech}</span>
                                ))
                            }
                        </div>

                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 tansition-all">
                        <h3 className="text-xl font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {
                                backendSkills.map((tech)=>(
                                    <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"> {tech}</span>
                                ))
                            }
                        </div>

                    </div>
                    <div className="rounded-xl p-6 hover:-translate-y-1 tansition-all">
                        <h3 className="text-xl font-bold mb-4">Tools</h3>
                        <div className="flex flex-wrap gap-2">
                            {
                                tool.map((tech)=>(
                                    <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"> {tech}</span>
                                ))
                            }
                        </div>

                    </div>
                    <div className="rounded-xl p-6 hover:-translate-y-1 tansition-all">
                        <h3 className="text-xl font-bold mb-4">Languages</h3>
                        <div className="flex flex-wrap gap-2">
                            {
                                languages.map((tech)=>(
                                    <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"> {tech}</span>
                                ))
                            }
                        </div>

                    </div>
                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Education</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>B Tech- Computer Science and Engineering</strong> -VNR Vignanajyothi Institute of Engineering and Technology - (2023-2027)
                                </li>
                                <li>
                                    Relavent Coursework: Data Structures, Web Application Development, Object Oriented Programming through java, Desaign and analysis of algorithms
                                </li>
                                
                            </ul>
                    </div>
                    {/* <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Link to Resume</h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold">Lorem ipsum dolor sit amet.</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, nesciunt?</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Lorem ipsum dolor sit amet.</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, nesciunt?</p>
                                </div>
                            </div>
                    </div> */}
            </div>
        </div>
        </RevealOnScroll>
    </section>

}