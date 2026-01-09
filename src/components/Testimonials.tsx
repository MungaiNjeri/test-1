import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Amara Okafor',
    role: 'CEO, TechStartup Africa',
    image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'Exceptional work. Mary delivered a sophisticated web platform that exceeded all our expectations. Her technical expertise and dedication to understanding our vision made all the difference.',
    rating: 5
  },
  {
    name: 'Kofi Mensah',
    role: 'Founder, Digital Solutions',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'Outstanding developer. Fast delivery, clean code, and always goes the extra mile. Working with Mary transformed our project timeline and delivered results beyond expectations.',
    rating: 5
  },
  {
    name: 'Zainab Hassan',
    role: 'Product Lead, InnovateCo',
    image: 'https://images.pexels.com/photos/3807318/pexels-photo-3807318.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'Mary is a professional who truly cares about project success. The communication was excellent, the code was pristine, and the delivery was on time. Highly recommended for any serious project.',
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
