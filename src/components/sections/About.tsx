export const About = () => {
const frontendSkills = [
        "React",
        "Redux",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Material-UI",
    ];

    const backendSkills = [
        "Java",
        "Spring Boot",
        "Node.js",              
    ];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20"> 
         <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-1xl md:text-4xl font-bold mb-6 bg-gradient-to-r
                      from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
                {" "}
                About Me
            </h2>
            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all" >
                <p className="text-xs text-justify text-gray-300 mb-4">
                    I am Salas Tech, a passionate Software Engineer with over 9 years of experience in designing and developing robust, scalable web applications. 
                    My expertise lies in utilizing technologies such as Java, Spring Boot, and React to build efficient and user-friendly solutions.
                </p>
                <p className="text-xs text-justify text-gray-100 mb-4">
                    Throughout my career, I have been involved in building RESTful and GraphQL APIs, integrating front-end interfaces, and managing the full software development life cycle. 
                    I have a strong proficiency in working with both SQL and NoSQL databases, as well as implementing CI/CD pipelines to streamline development processes.
                </p>
                <p className="text-xs text-justify text-gray-100">
                    I am also experienced in leveraging cloud platforms like AWS to deploy and scale applications effectively. 
                    I am passionate about writing clean, maintainable code and thrive in collaborative Agile environments to deliver high-quality solutions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Frontend Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((skill, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm 
                                         hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                
                
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Backend Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((skill, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm 
                                         hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                    {skill}
                                </span>
                            ))}
                 </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">{'\u{1F393}'}Education</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong>M.S. in Computer Science</strong> -Maharishi University of Management, Fairfield, Iowa, USA (2016 - 2017)
                        </li>                                                <li>
                            <strong>B.S. in Computer Science</strong> -Bahir Dar University, Bahir Dar, Ethiopia, (2005 - 2009)
                        </li>
                    </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Experience</h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <h4>Software Engineer at Freddie Mac (2020 - Present)</h4>
                            <p className="text-xs text-justify text-gray-300">
                                Mortgage Agreement Revision (MAR) - The system was designed for Mortgage management department to
                                manage revisions in mortgage agreements. Customer could request modifications such as changing
                                repayment schedules, updating interest rates, restructuring loan terms, while officers could approve,
                                reject or negotiate on customer needs. The platform ensured compliance, audit tracking, and secure
                                digital processing of mortgage contracts.
                            </p>
                        </div>
                        <div>
                            <h4>Software Engineer at Freddie Mac (2020 - Present)</h4>
                            <p className="text-xs text-justify text-gray-300">
                                Mortgage Agreement Revision (MAR) - The system was designed for Mortgage management department to
                                manage revisions in mortgage agreements. Customer could request modifications such as changing
                                repayment schedules, updating interest rates, restructuring loan terms, while officers could approve,
                                reject or negotiate on customer needs. The platform ensured compliance, audit tracking, and secure
                                digital processing of mortgage contracts.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
         </div>
        </section>
        );
    };