import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
          Available for new projects
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
          I build software that
          <span className="block text-blue-600">solves real problems</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Full-stack developer specializing in turning your ideas into production-ready applications.
          Fast, reliable, and built to scale.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="#contact"
            className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl"
          >
            Let's Build Something
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#services"
            className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 rounded-lg font-semibold text-lg transition-all duration-200 border-2 border-slate-200"
          >
            View Services
          </a>
        </div>

        <div className="flex gap-6 justify-center items-center text-slate-600">
          <a href="mailto:hello@yourname.com" className="hover:text-blue-600 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
