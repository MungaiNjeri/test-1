import { Lightbulb, Pencil, Code, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Lightbulb,
    title: 'Idea',
    description: 'We start with your vision. I listen carefully to understand your goals, challenges, and target audience.',
    details: 'Discovery call, requirements gathering, feasibility analysis'
  },
  {
    icon: Pencil,
    title: 'Design',
    description: 'I create wireframes and prototypes that bring your idea to life. You see exactly what you\'re getting before any code is written.',
    details: 'UI/UX design, user flows, mockups for approval'
  },
  {
    icon: Code,
    title: 'Build',
    description: 'Clean, maintainable code that follows best practices. Regular updates keep you in the loop throughout development.',
    details: 'Agile development, weekly check-ins, iterative feedback'
  },
  {
    icon: Rocket,
    title: 'Deploy',
    description: 'Your application goes live with proper hosting, monitoring, and documentation. Plus ongoing support to ensure success.',
    details: 'Production deployment, testing, handoff documentation'
  }
];

export default function Process() {
  return (
    <section className="py-24 px-6 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            A Process You Can Trust
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Transparent, collaborative, and efficient. Here's how we'll work together to bring your project to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                    <Icon className="w-8 h-8" />
                  </div>

                  <div className="mb-4">
                    <span className="text-blue-400 font-semibold text-sm">Step {index + 1}</span>
                    <h3 className="text-2xl font-bold mt-1">{step.title}</h3>
                  </div>

                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  <p className="text-sm text-slate-400 italic">
                    {step.details}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-600 to-transparent -translate-x-1/2"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
