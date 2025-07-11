import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Users, Award, Clock } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import HeroCarousel from '@/components/HeroCarousel'; 
import { useScrollAnimation } from '../hooks/use-scroll-animation'; 

const Index = () => {
  useScrollAnimation();

  const services = [
    {
      title: "Wedding Catering",
      description: "Make your special day unforgettable with our custom wedding menus and full-service staff.",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Corporate Events",
      description: "Professional catering for meetings, conferences, and corporate functions.",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Private Parties",
      description: "From birthdays to anniversaries, we create memorable dining experiences.",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const testimonials = [
    {
      name: "Amina Osei",
      event: "Wedding Reception",
      rating: 5,
      comment: "Kharis Gabi made our wedding day absolutely perfect! The food was exceptional and the service was flawless.",
      image: "https://images.unsplash.com/photo-1494790108755-2616c13c8dbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Kwame Asante",
      event: "Corporate Launch",
      rating: 5,
      comment: "Professional, punctual, and delicious! They handled our product launch catering beautifully.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Fatima Abdul",
      event: "Birthday Party",
      rating: 5,
      comment: "The food was amazing and everyone is still talking about how good everything tasted!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <HeroCarousel
          interval={6000}
          transitionDuration={2000}
        />
        <div
          className="
                z-10 text-center text-white px-4 py-8 md:px-8 md:py-10 max-w-4xl w-[90%]
              bg-black/45 backdrop-blur-sm rounded-lg shadow-xl border border-white/20
              animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Delightful Catering,
            <span className="block text-golden-yellow">Unforgettable Experiences</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Bringing taste, style, and service to your table
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button size="lg" className="bg-golden-yellow hover:bg-golden-yellow/90 text-forest-green font-semibold px-8 py-3 rounded-full">
                Explore Our Menu
              </Button>
            </Link>
            <Link to="/quote">
              <Button size="lg" variant="outline" className="border-white text-golden-yellow hover:bg-white hover:text-forest-green font-semibold px-8 py-3 rounded-full">
                Book an Event
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-forest-green mb-4" data-gsap>Why Choose Kharis Gabi?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-gsap>
              We bring years of culinary expertise and passion to every event, ensuring your guests have an unforgettable dining experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "Premium Quality", desc: "Only the finest ingredients and traditional recipes" },
              { icon: Users, title: "Expert Team", desc: "Professional chefs and service staff" },
              { icon: Clock, title: "Timely Service", desc: "Punctual delivery and setup every time" },
              { icon: Star, title: "5-Star Reviews", desc: "Consistently rated excellent by our clients" }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300" data-gsap>
                <CardContent className="p-6">
                  <div className="bg-burnt-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-burnt-orange" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-forest-green">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-light-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-forest-green mb-4" data-gsap>Our Featured Services</h2>
            <p className="text-xl text-gray-600" data-gsap>
              From intimate gatherings to grand celebrations, we cater to all your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group" data-gsap>
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-forest-green/20 group-hover:bg-forest-green/30 transition-colors duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-forest-green">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link to="/services">
                    <Button variant="outline" className="border-burnt-orange text-burnt-orange hover:bg-burnt-orange hover:text-white">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-forest-green mb-4" data-gsap>What Our Clients Say</h2>
            <p className="text-xl text-gray-600" data-gsap>
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300" data-gsap>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-forest-green">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.event}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-golden-yellow text-golden-yellow" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/testimonials">
              <Button className="bg-burnt-orange hover:bg-burnt-orange/90 text-white px-8 py-3 rounded-full" data-gsap>
                Read More Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-forest-green text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6" data-gsap>Ready to Create Your Perfect Event?</h2>
          <p className="text-xl mb-8" data-gsap>
            Let us handle the catering while you focus on enjoying your special occasion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button size="lg" className="bg-golden-yellow hover:bg-golden-yellow/90 text-forest-green font-semibold px-8 py-3 rounded-full" data-gsap>
                Get Your Free Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-golden-yellow hover:bg-white hover:text-forest-green font-semibold px-8 py-3 rounded-full" data-gsap>
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;