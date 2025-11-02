

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col items-center justify-center relative">
        <div className="px-4">
            <h1 className="text-1xl md:text-4xl font-bold mb-6 bg-gradient-to-r
                      from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
                Hi, I am Salas Tech
            </h1>
            <p className="text-xs text-justify text-gray-100 mb-8 max-w-lg mx-auto">
                A skilled Software Engineer with over 9 years of professional experience in designing and developing robust, 
                scalable web applications using Java, Spring Boot, React. Skilled in building RESTful and GraphQL APIs, 
                integrating front-end interfaces, managing full software development life cycles. Proficient in working with 
                SQL/NoSQL databases, CI/CD pipelines, and cloud platform like AWS. Passionate about writing clean, maintainable 
                code and collaborate in Agile to deliver high-quality solutions.
            </p>
            <div className="flex justify-center space-x-4">
                <a href="#projects"
                   className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative 
                               overflow-hidden hover:-translate-y-0.5 shadow-lg 
                               hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                    View My Projects
                </a>
                <a href="#contact"
                   className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all
                       duration-200 hover:-translate-y-0.5 shadow-lg hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]
                       hover:bg-blue-500/10">
                    Contact Me
                </a>
            </div>
        </div>
        </section>
     );
    };