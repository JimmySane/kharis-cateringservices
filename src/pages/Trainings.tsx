import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  GraduationCap,
  Users,
  Award,
  Clock,
  ChefHat,
  Calendar,
  BookOpen,
  Trophy,
  Star
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

// Import the useScrollAnimation hook
import { useScrollAnimation } from '../hooks/use-scroll-animation';

const Trainings = () => {
  // Call the hook at the top level of your functional component
  useScrollAnimation();

  const courses = [
    {
      title: "Professional Catering & Event Management",
      description: "Learn comprehensive event planning, menu design, and professional catering operations.",
      icon: ChefHat
    },
    {
      title: "Continental & Local Dishes Masterclass",
      description: "Master both international cuisine and traditional African dishes with authentic techniques.",
      icon: Award
    },
    {
      title: "Pastries, Cakes & Dessert Design",
      description: "Create stunning desserts and decorative cakes for special occasions.",
      icon: Trophy
    },
    {
      title: "Food Presentation & Plating Techniques",
      description: "Transform ordinary dishes into visually stunning culinary masterpieces.",
      icon: Star
    },
    {
      title: "Hygiene, Safety & Kitchen Management",
      description: "Essential food safety protocols and efficient kitchen operations management.",
      icon: Users
    },
    {
      title: "Small Chops & Finger Foods",
      description: "Perfect the art of creating delicious appetizers and party finger foods.",
      icon: BookOpen
    },
    {
      title: "Mobile Food Business Training",
      description: "Learn to start and run a successful mobile food business venture.",
      icon: Calendar
    }
  ];

  const benefits = [
    {
      title: "Practical, Industry-Relevant Skills",
      description: "Hands-on training that prepares you for real-world culinary challenges",
      icon: ChefHat
    },
    {
      title: "Certification Upon Completion",
      description: "Receive recognized certificates that validate your culinary expertise",
      icon: Award
    },
    {
      title: "Real-World Experience",
      description: "Gain experience through actual event catering opportunities",
      icon: Users
    },
    {
      title: "Mentorship & Business Support",
      description: "Get ongoing guidance and support for starting your culinary business",
      icon: GraduationCap
    }
  ];

  const learningOptions = [
    {
      title: "Weekend Classes",
      description: "Perfect for working professionals",
      duration: "Saturdays & Sundays",
      icon: Calendar
    },
    {
      title: "Weekday Classes",
      description: "Intensive daily sessions",
      duration: "Monday - Friday",
      icon: Clock
    },
    {
      title: "Short Courses",
      description: "Quick skill acquisition",
      duration: "2-4 weeks",
      icon: BookOpen
    },
    {
      title: "Advanced Certificate",
      description: "Comprehensive professional training",
      duration: "3-6 months",
      icon: GraduationCap
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden" data-gsap>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "linear-gradient(rgba(46, 68, 45, 0.8), rgba(193, 76, 45, 0.8)), url('/images/livecooking.jpg')"
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="bg-golden-yellow w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" data-gsap>
            <GraduationCap className="w-10 h-10 text-forest-green" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6" data-gsap>
            Kharis Gabi Training Institute
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-golden-yellow font-semibold" data-gsap>
            Master the Art of Culinary Excellence
          </p>
          <p className="text-xl mb-8 max-w-3xl mx-auto" data-gsap>
            At our Catering Training Institute, we empower aspiring chefs, event caterers, and food entrepreneurs with the skills, confidence, and creativity to succeed in the vibrant world of food service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-gsap>
            <Link to="/contact">
              <Button size="lg" className="bg-golden-yellow hover:bg-golden-yellow/90 text-forest-green font-semibold px-8 py-3 rounded-full">
                Enroll Now
              </Button>
            </Link>
            <Link to="/quote">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-forest-green font-semibold px-8 py-3 rounded-full">
                Get Course Info
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Courses Section */}
      <section className="py-20 bg-white" data-gsap>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="bg-burnt-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" data-gsap>
              <ChefHat className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-forest-green mb-4" data-gsap>Our Courses Include</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-gsap>
              Comprehensive training programs designed to turn your passion into profession
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 group" data-gsap>
                <CardHeader className="text-center">
                  <div className="bg-golden-yellow/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-golden-yellow/20 transition-colors">
                    <course.icon className="w-8 h-8 text-burnt-orange" />
                  </div>
                  <CardTitle className="text-forest-green text-lg">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{course.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Gain Section */}
      <section className="py-20 bg-light-beige" data-gsap>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="bg-forest-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" data-gsap>
              <Trophy className="w-8 h-8 text-golden-yellow" />
            </div>
            <h2 className="text-4xl font-bold text-forest-green mb-4" data-gsap>What You'll Gain</h2>
            <p className="text-xl text-gray-600" data-gsap>
              Benefits that go beyond just learning recipes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300" data-gsap>
                <CardContent className="p-6">
                  <div className="bg-burnt-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-burnt-orange" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3 text-forest-green">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Flexible Learning Options */}
      <section className="py-20 bg-white" data-gsap>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="bg-golden-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" data-gsap>
              <Calendar className="w-8 h-8 text-forest-green" />
            </div>
            <h2 className="text-4xl font-bold text-forest-green mb-4" data-gsap>Flexible Learning Options</h2>
            <p className="text-xl text-gray-600" data-gsap>
              Choose the schedule that works best for your lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningOptions.map((option, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 group" data-gsap>
                <CardContent className="p-6 text-center">
                  <div className="bg-forest-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-forest-green/20 transition-colors">
                    <option.icon className="w-8 h-8 text-forest-green" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-forest-green">{option.title}</h3>
                  <p className="text-gray-600 mb-3">{option.description}</p>
                  <div className="bg-golden-yellow/20 px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-burnt-orange">{option.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-forest-green text-white" data-gsap>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-golden-yellow w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8" data-gsap>
            <GraduationCap className="w-10 h-10 text-forest-green" />
          </div>
          <h2 className="text-4xl font-bold mb-6" data-gsap>Ready to Start Your Culinary Journey?</h2>
          <p className="text-xl mb-8" data-gsap>
            Whether you're a beginner or seeking professional refinement, our hands-on programs are designed to turn passion into profession.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-gsap>
            <Link to="/contact">
              <Button size="lg" className="bg-golden-yellow hover:bg-golden-yellow/90 text-forest-green font-semibold px-8 py-3 rounded-full">
                Enroll Now
              </Button>
            </Link>
            <Link to="/quote">
              <Button size="lg" variant="outline" className="border-white text-golden-yellow hover:bg-white hover:text-forest-green font-semibold px-8 py-3 rounded-full">
                Request Course Details
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

export default Trainings;