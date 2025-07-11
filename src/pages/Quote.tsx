import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useToast } from '@/hooks/use-toast';

// Import the useScrollAnimation hook
import { useScrollAnimation } from '../hooks/use-scroll-animation'; 

const Quote = () => {
  const { toast } = useToast();
  useScrollAnimation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    venue: '',
    budget: '',
    menuPreference: '',
    extraServices: [] as string[],
    specialRequests: ''
  });

  const eventTypes = [
    'Wedding Reception', 'Corporate Event', 'Birthday Party', 'Anniversary Celebration',
    'Conference/Meeting', 'Product Launch', 'Graduation Party', 'Baby Shower',
    'Traditional Ceremony', 'Festival/Outdoor Event', 'Private Dinner', 'Other'
  ];

  const menuPreferences = [
    'Traditional Ghanaian', 'Continental', 'Mixed (Ghanaian & Continental)',
    'Vegetarian/Vegan', 'Halal', 'Custom Menu', 'Not Sure - Need Consultation'
  ];

  const extraServices = [
    'Professional Waitstaff', 'Equipment Rental (Tables, Chairs, Tents)',
    'Event Decoration & Styling', 'Live Cooking Stations', 'Bartending Service',
    'Sound System', 'Photography/Videography', 'Event Planning Support',
    'Transportation/Delivery Only', 'Cleanup Service'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleExtraServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setFormData({
        ...formData,
        extraServices: [...formData.extraServices, service]
      });
    } else {
      setFormData({
        ...formData,
        extraServices: formData.extraServices.filter(s => s !== service)
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote request submitted:', formData);
    toast({
      title: "Quote Request Sent!",
      description: "Thank you! We'll prepare your custom quote and get back to you within 24 hours.",
    });
    setFormData({
      name: '', email: '', phone: '', eventType: '', eventDate: '', guestCount: '',
      venue: '', budget: '', menuPreference: '', extraServices: [], specialRequests: ''
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden" data-gsap>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "linear-gradient(rgba(46, 68, 45, 0.8), rgba(193, 76, 45, 0.8)), url('https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl font-bold mb-6" data-gsap>Get Your Custom Quote</h1>
          <p className="text-xl" data-gsap>
            Tell us about your event and we'll create a personalized catering package just for you
          </p>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl">
            <CardHeader className="bg-light-beige">
              <CardTitle className="text-3xl font-bold text-forest-green text-center" data-gsap>
                Request Your Free Quote
              </CardTitle>
              <p className="text-center text-gray-600 mt-2" data-gsap>
                Fill out the form below and we'll prepare a detailed quote within 24 hours
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">

                {/* Personal Information */}
                <div data-gsap>
                  <h3 className="text-xl font-semibold text-forest-green mb-4">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                        placeholder="Your full name"
                      />
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
                        placeholder="your.email@example.com"
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
                        placeholder="+233 XX XXX XXXX"
                      />
                    </div>
                  </div>
                </div>

                {/* Event Details */}
                <div data-gsap>
                  <h3 className="text-xl font-semibold text-forest-green mb-4">Event Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Event Type *
                      </label>
                      <Select onValueChange={(value) => handleSelectChange('eventType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent>
                          {eventTypes.map((type) => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-2">
                        Event Date *
                      </label>
                      <Input
                        id="eventDate"
                        name="eventDate"
                        type="date"
                        required
                        value={formData.eventDate}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="guestCount" className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Guests *
                      </label>
                      <Input
                        id="guestCount"
                        name="guestCount"
                        type="number"
                        required
                        value={formData.guestCount}
                        onChange={handleInputChange}
                        placeholder="e.g., 50"
                        min="1"
                      />
                    </div>
                    <div>
                      <label htmlFor="venue" className="block text-sm font-medium text-gray-700 mb-2">
                        Venue/Location
                      </label>
                      <Input
                        id="venue"
                        name="venue"
                        type="text"
                        value={formData.venue}
                        onChange={handleInputChange}
                        placeholder="Event venue or location"
                      />
                    </div>
                  </div>
                </div>

                {/* Menu Preferences */}
                <div data-gsap>
                  <h3 className="text-xl font-semibold text-forest-green mb-4">Menu Preferences</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Menu Type *
                      </label>
                      <Select onValueChange={(value) => handleSelectChange('menuPreference', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select menu preference" />
                        </SelectTrigger>
                        <SelectContent>
                          {menuPreferences.map((preference) => (
                            <SelectItem key={preference} value={preference}>{preference}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range (GHS)
                      </label>
                      <Select onValueChange={(value) => handleSelectChange('budget', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-1000">Under GHS 1,000</SelectItem>
                          <SelectItem value="1000-5000">GHS 1,000 - 5,000</SelectItem>
                          <SelectItem value="5000-10000">GHS 5,000 - 10,000</SelectItem>
                          <SelectItem value="10000-20000">GHS 10,000 - 20,000</SelectItem>
                          <SelectItem value="over-20000">Over GHS 20,000</SelectItem>
                          <SelectItem value="custom">Custom Budget</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Extra Services */}
                <div data-gsap>
                  <h3 className="text-xl font-semibold text-forest-green mb-4">Additional Services</h3>
                  <p className="text-sm text-gray-600 mb-4">Select any additional services you might need:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {extraServices.map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox
                          id={service}
                          checked={formData.extraServices.includes(service)}
                          onCheckedChange={(checked) => handleExtraServiceChange(service, checked as boolean)}
                        />
                        <label
                          htmlFor={service}
                          className="text-sm font-medium text-gray-700 cursor-pointer"
                        >
                          {service}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Special Requests */}
                <div data-gsap>
                  <h3 className="text-xl font-semibold text-forest-green mb-4">Special Requests</h3>
                  <Textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange} // This is now correctly typed
                    className="w-full h-32"
                    placeholder="Any dietary restrictions, special themes, specific dishes, or other requirements you'd like us to know about..."
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center" data-gsap>
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-burnt-orange hover:bg-burnt-orange/90 text-white font-semibold px-12 py-3 rounded-full"
                  >
                    Request My Free Quote
                  </Button>
                  <p className="text-sm text-gray-600 mt-4">
                    We'll review your requirements and send you a detailed quote within 24 hours
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 bg-light-beige" data-gsap>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-forest-green text-center mb-12" data-gsap>What Happens Next?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300" data-gsap>
              <CardContent className="p-6">
                <div className="bg-burnt-orange text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-semibold text-lg mb-2 text-forest-green">Review & Analysis</h3>
                <p className="text-gray-600 text-sm">
                  Our team carefully reviews your requirements and event details to understand your vision.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300" data-gsap>
              <CardContent className="p-6">
                <div className="bg-golden-yellow text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-semibold text-lg mb-2 text-forest-green">Custom Quote</h3>
                <p className="text-gray-600 text-sm">
                  We prepare a detailed, customized quote with menu options, services, and transparent pricing.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300" data-gsap>
              <CardContent className="p-6">
                <div className="bg-forest-green text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-semibold text-lg mb-2 text-forest-green">Personal Consultation</h3>
                <p className="text-gray-600 text-sm">
                  We'll contact you to discuss the quote, make adjustments, and finalize your perfect event.
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

export default Quote;