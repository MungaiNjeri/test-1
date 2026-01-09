import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mungai',
    role: 'Founder, Sarah-m-wear',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'Working with this developer was a game-changer. They took our rough idea and turned it into a fully functional MVP in just 6 weeks. The attention to detail and communication throughout was exceptional.',
    rating: 5
  },
  
  {
    name: 'Emily Rodriguez',
    role: 'Product Manager, InnovateCo',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'Best freelancer I\'ve worked with. Fast responses, clean code, and they actually care about the success of your project. Our API integration was seamless and well-documented.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Trusted by Founders & Teams
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what clients say about working together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-slate-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
