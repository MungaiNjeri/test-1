import { ArrowRight, Mail, MessageCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-br from-blue-600 to-blue-700">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl md:text-2xl mb-12 text-blue-100 leading-relaxed">
          Let's turn your idea into reality. Get in touch and we'll discuss how I can help you build something amazing.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <a
            href="mailto:hello@yourname.com"
            className="group px-8 py-4 bg-white hover:bg-slate-50 text-blue-600 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl"
          >
            <Mail className="w-5 h-5" />
            Email Me
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-blue-800 hover:bg-blue-900 text-white rounded-lg font-semibold text-lg transition-all duration-200 flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Message on LinkedIn
          </a>
        </div>

        <div className="pt-8 border-t border-blue-500">
          <p className="text-blue-100 mb-2">Typical response time: Within 24 hours</p>
          <p className="text-sm text-blue-200">Available for projects starting immediately</p>
        </div>
      </div>
    </section>
  );
}
