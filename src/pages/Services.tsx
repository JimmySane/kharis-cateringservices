import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Users, Utensils, Calendar, Truck, Heart, Star } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Link } from 'react-router-dom';
// import { useScrollAnimation } from '../hooks/use-scroll-animation'; // REMOVED IMPORT

const Services = () => {
  // REMOVED: useScrollAnimation();

  const [selectedService, setSelectedService] = useState<string | null>(null);

  const mainServices = [
    {
      id: 'catering',
      title: 'Core Catering Services',
      icon: Utensils,
      description: 'Complete catering solutions for events of all kinds',
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      subServices: [
        {
          title: 'Full-Service Catering',
          description: 'Complete event catering: food prep, delivery, setup, professional serving, and post-event cleanup.',
          image: '/images/buffet-min.jpg'
        },
        {
          title: 'Drop-Off Catering',
          description: 'Convenient food delivery only—ideal for small events or casual meetings. No on-site service required.',
          image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        },
        {
          title: 'Buffet Catering',
          description: 'Stylish buffet stations with customizable menu options. Guests serve themselves or are assisted by our team.',
          image: '/images/buffet3-min.jpg'
        },
        {
          title: 'Plated Meal Service',
          description: 'Restaurant-style, plated meals served to seated guests—perfect for weddings and formal events.',
          image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        },
        {
          title: 'Cocktail & Canapé Catering',
          description: 'Elegant finger foods and cocktails for networking events, receptions, or private parties.',
          image: '/images/cocktail4-min.jpg'
        }
      ]
    },
    {
      id: 'events',
      title: 'Specialized Event Catering',
      icon: Calendar,
      description: 'Tailored catering packages based on event type',
      image: '/images/corporatecatering.jpg',
      subServices: [
        {
          title: 'Corporate Catering',
          description: 'Ideal for board meetings, staff lunches, conferences, and product launches. Includes flexible menus and punctual delivery.',
          image: '/images/eventsupport.jpg'
        },
        {
          title: 'Wedding Catering',
          description: 'Custom wedding menus, full-service staff, dessert tables, and event styling support for your special day.',
          image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        },
        {
          title: 'Event & Party Catering',
          description: 'From birthdays to baby showers—choose from themed menus and full-service or buffet options.',
          image: '/images/events.jpg'
        },
        {
          title: 'Private Chef Services',
          description: 'In-home dining experiences with a personal chef who prepares and serves meals on-site.',
          image: '/images/chefsupport.jpg'
        },
        {
          title: 'Mobile & Outdoor Catering',
          description: 'Suitable for outdoor parties, festivals, and remote locations using food trucks or mobile kitchen setups.',
          image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        }
      ]
    },
    {
      id: 'cuisine',
      title: 'Cuisine & Dietary Options',
      icon: Heart,
      description: 'Wide variety of palates and dietary needs',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      subServices: [
        {
          title: 'Custom Menu Design',
          description: 'Work with our chefs to design a menu that matches your theme, taste, and budget.',
          image: '/images/custom-menu.jpg'
        },
        {
          title: 'Traditional & Cultural Cuisine',
          description: 'Offering Ghanaian, Nigerian, Continental, Asian, and other ethnic dishes.',
          image: '/images/africancuisine2-min.jpg'
        },
        {
          title: 'Diet-Specific Meals',
          description: 'Vegan, vegetarian, keto, halal, gluten-free, and allergy-friendly menu options available on request.',
          image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        }
      ]
    },
    {
      id: 'enhancements',
      title: 'Event Enhancements & Add-Ons',
      icon: Star,
      description: 'Make your event seamless and stunning',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      subServices: [
        {
          title: 'Event Planning Support',
          description: 'Assistance with planning, coordinating, and executing the catering portion of your event.',
          image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        },
        {
          title: 'Equipment Rentals',
          description: 'Access to event essentials like tents, chairs, tables, plates, glassware, utensils, and food warmers.',
          image: '/images/utensilrental-min.jpg'
        },
        {
          title: 'Decor & Styling',
          description: 'Event-themed table settings, floral arrangements, and ambient decor to match your vision.',
          image: '/images/corporatestyling.jpg'
        },
        {
          title: 'Professional Staffing',
          description: 'Skilled waiters, bartenders, chefs, and cleaners available to manage your event professionally.',
          image: '/images/staffing-min.jpg'
        },
        {
          title: 'Live Cooking Stations',
          description: 'Engage your guests with on-site grilling, suya spots, shawarma, pasta stations, and more.',
          image: '/images/cookstation.jpg'
        }
      ]
    },
    {
      id: 'daily',
      title: 'Daily & Routine Catering Services',
      icon: Truck,
      description: 'For everyday nourishment and convenience',
      image: '/images/localcuisine.jpg',
      subServices: [
        {
          title: 'Meal Prep & Weekly Delivery',
          description: 'Healthy, portioned meals delivered to homes and offices based on personalized plans.',
          image: '/images/lunchpack7.jpg'
        },
        {
          title: 'Lunch Box Services',
          description: 'Packaged meals for schools, businesses, medical institutions, and field workers.',
          image: '/images/lunchpack3.jpg'
        },
        {
          title: 'Beverage Stations',
          description: 'Fresh juices, mocktails, cocktails, soft drinks, and hot beverages for all events.',
          image: '/images/cocktail2-min.jpg'
        },
        {
          title: 'Cakes & Dessert Tables',
          description: 'Custom cakes, pastries, cupcakes, and sweets table setups for all occasions.',
          image: '/images/dessert1.jpg'
        },
        {
          title: 'Tasting Sessions',
          description: 'Pre-event tasting appointments available for menu selection and quality assurance.',
          image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        },
        {
          title: 'Cooking Classes & Live Demos',
          description: 'Book us for in-person or virtual cooking classes and engaging live food preparation sessions.',
          image: '/images/livecooking.jpg'
        }
      ]
    },
    {
      id: 'menu',
      title: 'Menu Categories',
      icon: Users,
      description: 'Organized by categories with images and descriptions',
      image: '/images/vegan-min.jpg',
      subServices: [
        {
          title: 'Appetizers & Starters',
          description: 'Delicious small plates to begin your meal with style and flavor.',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        },
        {
          title: 'Main Courses',
          description: 'Hearty and satisfying main dishes featuring local and international cuisine.',
          image: '/images/maincourse.jpg'
        },
        {
          title: 'Sides & Salads',
          description: 'Fresh accompaniments and healthy options to complement your main dishes.',
          image: '/images/salad.jpg'
        },
        {
          title: 'Bread & Pastries',
          description: 'Freshly baked breads, rolls, and pastries made daily in our kitchen.',
          image: '/images/breads-min.jpg'
        },
        {
          title: 'Desserts',
          description: 'Sweet endings to your meal with traditional and modern dessert options.',
          image: '/images/dessert3.jpg'
        },
        {
          title: 'Drinks',
          description: 'Refreshing beverages including local and international drink selections.',
          image: '/images/cocktail6-min.jpg'
        },
        {
          title: 'Specialty Menus',
          description: 'Vegan, Kids, Traditional, and Health-focused menu options for special dietary needs.',
          image: '/images/vegan-min.jpg'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl">
            Comprehensive catering solutions for every occasion and dietary need
          </p>
        </div>
      </section>

      {selectedService ? (
        // Detailed Service View
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Button
                variant="outline"
                onClick={() => setSelectedService(null)}
                className="mb-4"
              >
                ← Back to All Services
              </Button>
              <h2 className="text-4xl font-bold text-forest-green mb-4">
                {mainServices.find(s => s.id === selectedService)?.title}
              </h2>
              <p className="text-xl text-gray-600">
                {mainServices.find(s => s.id === selectedService)?.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainServices.find(s => s.id === selectedService)?.subServices.map((subService, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                  <div className="relative overflow-hidden">
                    <img
                      src={subService.image}
                      alt={subService.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-forest-green/20 group-hover:bg-forest-green/30 transition-colors duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-3 text-forest-green">{subService.title}</h3>
                    <p className="text-gray-600 mb-4">{subService.description}</p>
                    <Link to="/quote">
                      <Button className="w-full bg-burnt-orange hover:bg-burnt-orange/90 text-white">
                        Get Quote for This Service
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ) : (
        // Main Services Overview
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-forest-green mb-4">Complete Catering Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From intimate gatherings to grand celebrations, we offer comprehensive catering services tailored to your needs. Click on any service category to explore our detailed offerings.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainServices.map((service, index) => (
                <Card
                  key={service.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  onClick={() => setSelectedService(service.id)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-forest-green/20 group-hover:bg-forest-green/30 transition-colors duration-300" />
                    <div className="absolute top-4 left-4 bg-white/90 p-3 rounded-full">
                      <service.icon className="w-6 h-6 text-burnt-orange" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-3 text-forest-green group-hover:text-burnt-orange transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex items-center text-burnt-orange font-semibold group-hover:text-golden-yellow transition-colors duration-300">
                      <span>Explore Details</span>
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-forest-green text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Plan Your Perfect Event?</h2>
          <p className="text-xl mb-8">
            Let our experienced team create a customized catering solution that exceeds your expectations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button size="lg" className="bg-golden-yellow hover:bg-golden-yellow/90 text-forest-green font-semibold px-8 py-3 rounded-full">
                Get Your Custom Quote
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

export default Services;