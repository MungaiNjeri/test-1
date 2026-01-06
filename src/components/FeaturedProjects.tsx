import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    name: 'E-Commerce Platform',
    description: 'A full-featured marketplace where sellers can list products and buyers can discover, review, and purchase items. Built with real-time inventory management and payment processing.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    liveLink: 'https://ecommerce-demo.example.com',
    githubLink: 'https://github.com/yourusername/ecommerce-platform',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'Task Management Dashboard',
    description: 'An intuitive admin panel for managing team tasks, deadlines, and workflows. Features real-time collaboration, file uploads, and automated notifications.',
    techStack: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    liveLink: 'https://taskdash-demo.example.com',
    githubLink: 'https://github.com/yourusername/task-dashboard',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'Analytics & Reporting API',
    description: 'A robust REST API that aggregates data from multiple sources and provides real-time analytics. Includes webhook support, custom reports, and comprehensive documentation.',
    techStack: ['Node.js', 'Express', 'MongoDB', 'Redis'],
    liveLink: 'https://api-docs.example.com',
    githubLink: 'https://github.com/yourusername/analytics-api',
    image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export default function FeaturedProjects() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A selection of recent projects showcasing my expertise in building complete solutions from concept to production.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:grid-flow-dense' : ''
              }`}
            >
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  {project.name}
                </h3>

                <p className="text-slate-700 text-lg mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-slate-600 mb-3 uppercase tracking-wider">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200"
                  >
                    <ExternalLink className="w-5 h-5" />
                    View Live
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-semibold transition-colors duration-200"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
