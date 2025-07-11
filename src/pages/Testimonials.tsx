import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '../hooks/use-scroll-animation';

const Testimonials = () => {
  // Call the hook at the top level of your functional component
  useScrollAnimation();

  const testimonials = [
    {
      id: 1,
      name: "Doreen Osei",
      event: "Wedding Reception",
      location: "Tamale",
      rating: 5,
      comment: "Kharis Gabi made our wedding day absolutely perfect! The food was exceptional, beautifully presented, and every guest was raving about the delicious Ghanaian dishes. The service was flawless and the team was so professional. Highly recommend!",
      image: "/images/testi2-min.jpg",
      eventImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Kwame Asante",
      event: "Corporate Product Launch",
      location: "Accra",
      rating: 5,
      comment: "Professional, punctual, and delicious! They handled our product launch catering beautifully. The continental menu was perfect for our international guests, and the setup was impressive. Will definitely use them again.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      eventImage: "/images/eventsparty.jpg"
    },
    {
      id: 3,
      name: "Nana Ama Boateng",
      event: "50th Birthday Party",
      location: "Kumasi",
      rating: 5,
      comment: "The food was amazing and everyone is still talking about how good everything tasted! The variety was incredible - traditional Ghanaian dishes alongside international options. The staff was friendly and efficient.",
      image: "images/testi3-min.jpg",
      eventImage: "/images/parties.jpg"
    },
    {
      id: 4,
      name: "Dr. Samuel Oppong",
      event: "Medical Conference",
      location: "Tamale",
      rating: 5,
      comment: "Excellent service for our 3-day medical conference. They handled breakfast, lunch, and coffee breaks seamlessly. The healthy options were appreciated by our attendees. Very professional team!",
      image: "/images/testi4-min.jpg",
      eventImage: "/images/lunchpack2.jpg"
    },
    {
      id: 5,
      name: "Aisha Mohammed",
      event: "Traditional Wedding",
      location: "Bolgatanga",
      rating: 5,
      comment: "They perfectly captured the essence of our traditional ceremony with authentic Northern Ghanaian dishes. The presentation was beautiful and the taste was incredible. Our families were so impressed!",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      eventImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 6,
      name: "Michael Boateng",
      event: "Graduation Party",
      location: "Tamale",
      rating: 5,
      comment: "From start to finish, everything was perfect! The buffet setup was elegant, the food was fresh and delicious, and the team cleaned up everything. Made our celebration stress-free and memorable.",
      image: "/images/testi1-min.jpg",
      eventImage: "/images/buffet3-min.jpg"
    },
    {
      id: 7,
      name: "Grace Mensah",
      event: "Anniversary Celebration",
      location: "Wa",
      rating: 5,
      comment: "50 years of marriage deserved a special celebration, and Kharis Gabi delivered beyond our expectations! The romantic setup, excellent food, and attentive service made it unforgettable.",
      image: "/images/testi3-min.jpg",
      eventImage: "/images/weddingcatering-min.jpg"
    },
    {
      id: 8,
      name: "Abdul Rahman Yakubu",
      event: "Community Festival",
      location: "Yendi",
      rating: 5,
      comment: "They catered for over 300 people at our community festival. The logistics were handled perfectly, everyone was fed on time, and the quality never dropped. Truly professional service!",
      image: "/images/testi2-min.jpg",
      eventImage: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 9,
      name: "Salamatu Ibrahim",
      event: "Baby Naming Ceremony",
      location: "Tamale",
      rating: 5,
      comment: "Beautiful traditional setup for our baby's naming ceremony. The food was authentic and delicious, and they helped make our special day even more meaningful. Thank you for the excellent service!",
      image: "https://images.unsplash.com/photo-1494790108755-2616c13c8dbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      eventImage: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const eventTypes = [
    {
      type: "Weddings",
      count: 25,
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      type: "Corporate Functions",
      count: 18,
      image: "/images/corporatestyling.jpg"
    },
    {
      type: "Birthday Parties",
      count: 32,
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      type: "Anniversaries",
      count: 15,
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      type: "Festivals & Outdoor Events",
      count: 12,
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden" data-gsap>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "linear-gradient(rgba(46, 68, 45, 0.8), rgba(193, 76, 45, 0.8)), url('https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl font-bold mb-6" data-gsap>Client Testimonials</h1>
          <p className="text-xl" data-gsap style={{ animationDelay: '0.2s' }}>
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white" data-gsap>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-forest-green mb-4" data-gsap>Our Recent Events</h2>
            <p className="text-xl text-gray-600" data-gsap>A glimpse of the events we've had the pleasure to cater</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {eventTypes.map((eventType, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 group" data-gsap>
                <div className="relative overflow-hidden">
                  <img
                    src={eventType.image}
                    alt={eventType.type}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-forest-green/20 group-hover:bg-forest-green/30 transition-colors duration-300" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-forest-green mb-1">{eventType.type}</h3>
                  <p className="text-2xl font-bold text-burnt-orange">{eventType.count}+</p>
                  <p className="text-sm text-gray-600">Events This Year</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-light-beige" data-gsap>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-forest-green mb-4" data-gsap>What Our Clients Say</h2>
            <p className="text-xl text-gray-600" data-gsap>Real experiences from real people</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-xl transition-shadow duration-300 h-full" data-gsap>
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Event Image */}
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={testimonial.eventImage}
                      alt={testimonial.event}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded-full text-xs font-semibold text-forest-green">
                      {testimonial.event}
                    </div>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-forest-green">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-golden-yellow text-golden-yellow" />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-gray-600 italic flex-grow">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-forest-green text-white" data-gsap>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6" data-gsap>Ready to Create Your Own Success Story?</h2>
          <p className="text-xl mb-8" data-gsap>
            Join our growing list of satisfied clients and let us make your event unforgettable
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-gsap>
            <Link to="/quote">
              <Button size="lg" className="bg-golden-yellow hover:bg-golden-yellow/90 text-forest-green font-semibold px-8 py-3 rounded-full">
                Plan Your Event With Us
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-golden-yellow hover:bg-white hover:text-forest-green font-semibold px-8 py-3 rounded-full">
                Schedule a Consultation
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

export default Testimonials;