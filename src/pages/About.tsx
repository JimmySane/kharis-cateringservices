import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Heart, Users, Target } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useScrollAnimation } from '../hooks/use-scroll-animation';

const About = () => {
  useScrollAnimation();

  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "We pour our love for food and service into every event we cater"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in food quality and presentation"
    },
    {
      icon: Users,
      title: "Community",
      description: "We believe in bringing people together through exceptional food"
    },
    {
      icon: Target,
      title: "Precision",
      description: "Every detail matters to us, from menu planning to final cleanup"
    }
  ];

  const whyChooseUs = [
    "15+ years of catering experience",
    "Certified professional chefs",
    "Farm-to-table fresh ingredients",
    "Custom menu development",
    "Full-service event support",
    "Competitive pricing",
    "Excellent customer reviews",
    "Licensed and insured"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(46, 68, 45, 0.8), rgba(46, 68, 45, 0.8)), url('/images/cookstation.jpg')",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl font-bold mb-6" data-gsap>About Kharis Gabi</h1> {/* Added data-gsap */}
          <p className="text-xl" data-gsap> {/* Added data-gsap */}
            Crafting culinary excellence and creating unforgettable moments since 2008
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-forest-green mb-6" data-gsap>Our Story</h2> {/* Added data-gsap */}
              <div className="space-y-4 text-gray-600">
                <p data-gsap> {/* Added data-gsap */}
                  Founded in 2008 in the heart of Tamale, Ghana, Kharis Gabi Catering Services began as a dream to bring authentic flavors and exceptional service to every celebration. What started as a small family business has grown into Northern Ghana's premier catering service.
                </p>
                <p >
                  Our founder, Kharis Gabi, grew up surrounded by the rich culinary traditions of Ghana. With a passion for cooking and an eye for detail, she started by catering small family gatherings. Word spread quickly about the exceptional quality and taste of our food.
                </p>
                <p >
                  Today, we're proud to serve hundreds of events each year, from intimate family dinners to grand corporate functions and beautiful weddings. Our commitment to quality, service, and creating memorable experiences remains at the heart of everything we do.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/livecooking.jpg"
                alt="Our kitchen"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-golden-yellow text-forest-green p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm font-semibold">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-light-beige"> {/* data-gsap removed from section, now on children */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="hover:shadow-lg transition-shadow duration-300" data-gsap> {/* Added data-gsap */}
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-forest-green mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To provide exceptional catering services that exceed our clients' expectations through innovative menus, impeccable service, and attention to detail. We strive to make every event memorable by delivering delicious food that brings people together and creates lasting memories.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300" data-gsap> {/* Added data-gsap */}
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-forest-green mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading catering service in Ghana, known for our culinary excellence, professional service, and commitment to celebrating life's special moments. We envision a future where every event we cater becomes a cherished memory for our clients and their guests.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white"> {/* data-gsap removed from section, now on children */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-forest-green mb-4" data-gsap>Our Values</h2> {/* Added data-gsap */}
            <p className="text-xl text-gray-600" data-gsap>The principles that guide everything we do</p> {/* Added data-gsap */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300 group"
                data-gsap // Added data-gsap
              >
                <CardContent className="p-6">
                  <div className="bg-burnt-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-burnt-orange/20 transition-colors duration-300">
                    <value.icon className="w-8 h-8 text-burnt-orange" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3 text-forest-green">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-forest-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" data-gsap>Why Choose Kharis Gabi?</h2> {/* Added data-gsap */}
            <p className="text-xl" data-gsap>What sets us apart from other catering services</p> {/* Added data-gsap */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors duration-300"
                data-gsap 
              >
                <div className="w-2 h-2 bg-golden-yellow rounded-full flex-shrink-0"></div>
                <span className="text-sm">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-light-beige"> {/* data-gsap removed from section, now on children */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-forest-green mb-4" data-gsap>Meet Our Team</h2> {/* Added data-gsap */}
            <p className="text-xl text-gray-600" data-gsap>The passionate professionals behind your perfect event</p> {/* Added data-gsap */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300" data-gsap> {/* Added data-gsap */}
              <CardContent className="p-6">
                <img
                  src="/images/kharisgabi.jpg"
                  alt="Agnes Taylor - Founder & Head Chef"
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="font-bold text-xl text-forest-green mb-2">Agnes Taylor</h3>
                <p className="text-burnt-orange font-semibold mb-3">Founder & Head Chef</p>
                <p className="text-gray-600 text-sm">
                  With over 15 years of culinary expertise, Kharis leads our team with passion and innovation, ensuring every dish meets our high standards.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300" data-gsap> {/* Added data-gsap */}
              <CardContent className="p-6">
                <img
                  src="images/daddy.jpg"
                  alt="Musa S. Taylor - Operations Manager"
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="font-bold text-xl text-forest-green mb-2">Musa S. Taylor</h3>
                <p className="text-burnt-orange font-semibold mb-3">Operations Manager</p>
                <p className="text-gray-600 text-sm">
                  Abdul ensures smooth operations and exceptional service delivery, managing logistics and coordinating our amazing team of professionals.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300" data-gsap> {/* Added data-gsap */}
              <CardContent className="p-6">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616c13c8dbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                  alt="Gabi Taylor - Event Coordinator"
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="font-bold text-xl text-forest-green mb-2">Gabi Taylor</h3>
                <p className="text-burnt-orange font-semibold mb-3">Event Coordinator</p>
                <p className="text-gray-600 text-sm">
                  Aisha works closely with clients to plan perfect events, handling details from menu selection to final presentation with care and precision.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;