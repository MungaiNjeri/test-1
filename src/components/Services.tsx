import { Globe, Boxes, LayoutDashboard, Rocket } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Applications',
    description: 'Modern, responsive web apps built with React, TypeScript, and cutting-edge technologies. Fast, secure, and user-friendly.',
    features: ['Custom UI/UX', 'Real-time features', 'Mobile responsive']
  },
  {
    icon: Boxes,
    title: 'APIs & Backend',
    description: 'Robust backend systems and RESTful APIs that power your applications. Scalable architecture designed for growth.',
    features: ['Database design', 'Authentication', 'Third-party integrations']
  },
  {
    icon: LayoutDashboard,
    title: 'Admin Panels',
    description: 'Intuitive dashboards to manage your data, users, and business operations. Full CRUD functionality with beautiful interfaces.',
    features: ['Data visualization', 'User management', 'Analytics integration']
  },
  {
    icon: Rocket,
    title: 'MVP Development',
    description: 'Get your product to market fast. I help startups build and launch their minimum viable product in weeks, not months.',
    features: ['Rapid prototyping', 'Core features focus', 'Launch ready']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Services That Deliver Results
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            From concept to deployment, I handle every aspect of your project with expertise and attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl border-2 border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 bg-slate-50"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-700">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
