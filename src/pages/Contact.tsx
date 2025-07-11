import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useToast } from '@/hooks/use-toast';
import { useScrollAnimation } from '../hooks/use-scroll-animation';

const Contact = () => {
  // Call the hook at the top level of your functional component
  useScrollAnimation();

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+233 XX XXX XXXX", "+233 XX XXX XXXX"],
      action: "Call us anytime"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@kharisgabi.com", "bookings@kharisgabi.com"],
      action: "Send us an email"
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Main Office: Tamale, Ghana", "Service Area: Northern Region"],
      action: "Visit our office"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Sat: 8:00 AM - 8:00 PM", "Sunday: 10:00 AM - 6:00 PM"],
      action: "Operating hours"
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
            // Changed the linear-gradient to black with 55% opacity
           backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl font-bold mb-6" data-gsap>Contact Us</h1> {/* Added data-gsap */}
          <p className="text-xl" data-gsap> {/* Added data-gsap */}
            Let's discuss how we can make your next event extraordinary
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-forest-green mb-4" data-gsap>Get In Touch</h2> {/* Added data-gsap */}
            <p className="text-xl text-gray-600" data-gsap> {/* Added data-gsap */}
              We're here to help you plan the perfect event
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 group" data-gsap> {/* Added data-gsap */}
                <CardContent className="p-6">
                  <div className="bg-burnt-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-burnt-orange/20 transition-colors duration-300">
                    <info.icon className="w-8 h-8 text-burnt-orange" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3 text-forest-green">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 mb-1">{detail}</p>
                  ))}
                  <p className="text-sm text-burnt-orange font-medium mt-2">{info.action}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-light-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div data-gsap> {/* Added data-gsap to animate the whole form section */}
              <h3 className="text-3xl font-bold text-forest-green mb-6">Send Us a Message</h3>
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="+233 XX XXX XXXX"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full h-32"
                        placeholder="Tell us about your event, number of guests, preferred date, and any special requirements..."
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-burnt-orange hover:bg-burnt-orange/90 text-white font-semibold py-3"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map and Additional Info */}
            <div data-gsap> {/* Added data-gsap to animate this whole section */}
              <h3 className="text-3xl font-bold text-forest-green mb-6">Find Us</h3>

              {/* Map Placeholder */}
              <Card className="shadow-lg mb-6">
                <CardContent className="p-0">
                  <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-burnt-orange mx-auto mb-2" />
                      <p className="text-gray-600">Interactive Map</p>
                      <p className="text-sm text-gray-500">Tamale, Northern Region, Ghana</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact Options */}
              <div className="space-y-4">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-green-500 p-3 rounded-full text-white">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.108" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-forest-green">WhatsApp Us</h4>
                        <p className="text-gray-600 text-sm">Get instant responses to your questions</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-burnt-orange p-3 rounded-full text-white">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-forest-green">Call for Urgent Bookings</h4>
                        <p className="text-gray-600 text-sm">For same-day or next-day events</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-golden-yellow p-3 rounded-full text-white">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-forest-green">Email for Detailed Quotes</h4>
                        <p className="text-gray-600 text-sm">Perfect for event planning discussions</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-forest-green mb-4" data-gsap>Frequently Asked Questions</h2> {/* Added data-gsap */}
            <p className="text-xl text-gray-600" data-gsap>Quick answers to common questions</p> {/* Added data-gsap */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card data-gsap> {/* Added data-gsap */}
              <CardContent className="p-6">
                <h4 className="font-semibold text-forest-green mb-2">How far in advance should I book?</h4>
                <p className="text-gray-600 text-sm">We recommend booking 2-4 weeks in advance for best availability, though we can accommodate shorter notice for smaller events.</p>
              </CardContent>
            </Card>

            <Card data-gsap> {/* Added data-gsap */}
              <CardContent className="p-6">
                <h4 className="font-semibold text-forest-green mb-2">Do you provide equipment and staff?</h4>
                <p className="text-gray-600 text-sm">Yes! We offer full-service catering including professional staff, tables, chairs, tents, and all necessary equipment.</p>
              </CardContent>
            </Card>

            <Card data-gsap> {/* Added data-gsap */}
              <CardContent className="p-6">
                <h4 className="font-semibold text-forest-green mb-2">Can you accommodate dietary restrictions?</h4>
                <p className="text-gray-600 text-sm">Absolutely! We specialize in vegan, vegetarian, halal, gluten-free, and other dietary accommodations.</p>
              </CardContent>
            </Card>

            <Card data-gsap> {/* Added data-gsap */}
              <CardContent className="p-6">
                <h4 className="font-semibold text-forest-green mb-2">What's your service area?</h4>
                <p className="text-gray-600 text-sm">We primarily serve the Northern Region of Ghana, with Tamale as our base. Contact us for events in other regions.</p>
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

export default Contact;