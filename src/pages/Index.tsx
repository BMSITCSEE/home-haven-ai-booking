
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import CategoryFilter from '@/components/CategoryFilter';
import AIChatButton from '@/components/AIChatButton';

// Sample data
const CATEGORIES = [
  { id: 'all', name: 'All', icon: 'https://a0.muscache.com/pictures/8b318783-723f-4584-9b76-1519b624f86c.jpg' },
  { id: 'beach', name: 'Beachfront', icon: 'https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg' },
  { id: 'cabin', name: 'Cabins', icon: 'https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg' },
  { id: 'mansion', name: 'Mansions', icon: 'https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg' },
  { id: 'countryside', name: 'Countryside', icon: 'https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg' },
  { id: 'pools', name: 'Amazing pools', icon: 'https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg' },
  { id: 'lakefront', name: 'Lakefront', icon: 'https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg' },
  { id: 'ski-in-out', name: 'Ski-in/out', icon: 'https://a0.muscache.com/pictures/c8bba3ed-34c0-464a-8e6e-27574d20e4d2.jpg' },
  { id: 'design', name: 'Design', icon: 'https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg' },
  { id: 'tropical', name: 'Tropical', icon: 'https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg' }
];

const PROPERTIES = [
  {
    id: '1',
    title: 'Luxurious Beachfront Villa',
    location: 'Malibu, California',
    price: 350,
    rating: 4.97,
    imageUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-548979203462837296/original/e8979fca-946b-487f-9ba7-cbf8baffdd2a.jpeg',
    superhost: true
  },
  {
    id: '2',
    title: 'Mountain View Cabin',
    location: 'Aspen, Colorado',
    price: 220,
    rating: 4.85,
    imageUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-549505300359123405/original/f22e51c8-e51c-4f20-b64e-4798ebf2d1ab.jpeg'
  },
  {
    id: '3',
    title: 'Urban Loft Downtown',
    location: 'New York City, New York',
    price: 180,
    rating: 4.75,
    imageUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-27583990/original/5bd13508-33d5-42be-8f9d-c4cbd972a037.jpeg'
  },
  {
    id: '4',
    title: 'Lakeside Cottage',
    location: 'Lake Tahoe, Nevada',
    price: 195,
    rating: 4.92,
    imageUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-29459696/original/030256d3-db67-4d15-a913-8436b5474912.jpeg',
    superhost: true
  },
  {
    id: '5',
    title: 'Historic Downtown Apartment',
    location: 'Boston, Massachusetts',
    price: 165,
    rating: 4.8,
    imageUrl: 'https://a0.muscache.com/im/pictures/e8babcf4-0407-4359-85d8-de187e0cf3e5.jpg'
  },
  {
    id: '6',
    title: 'Seaside Cottage',
    location: 'Newport, Rhode Island',
    price: 210,
    rating: 4.9,
    imageUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-50768121/original/b0b7e61f-066a-4a93-a6d4-727265487276.jpeg'
  },
  {
    id: '7',
    title: 'Modern Desert Home',
    location: 'Scottsdale, Arizona',
    price: 240,
    rating: 4.95,
    imageUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-52339324/original/a5d63be5-f3e0-4944-a0c0-247b2a70d39a.jpeg',
    superhost: true
  },
  {
    id: '8',
    title: 'Cozy Forest Retreat',
    location: 'Portland, Oregon',
    price: 170,
    rating: 4.82,
    imageUrl: 'https://a0.muscache.com/im/pictures/af9bdd21-1e56-4f52-b2aa-5bd8cfe0a100.jpg'
  }
];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Filter properties based on active category (in a real app, this would call an API)
  const filteredProperties = activeCategory === 'all' 
    ? PROPERTIES 
    : PROPERTIES.filter((_, index) => index % 2 === 0); // Just a simple mock filter
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="w-full bg-gray-100 py-12 mb-8">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl font-bold mb-6">Find your next perfect stay</h1>
              <p className="text-lg text-gray-600 mb-8">Discover the ideal home away from home for your next adventure</p>
              <Button className="bg-airbnb-primary hover:bg-airbnb-primary/90 text-white">
                Explore Homes
              </Button>
            </div>
          </div>
        </div>
        
        {/* Categories Filter */}
        <div className="container mx-auto px-4">
          <CategoryFilter 
            categories={CATEGORIES} 
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          
          {/* Property Listings */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8">
            {filteredProperties.map(property => (
              <PropertyCard
                key={property.id}
                id={property.id}
                title={property.title}
                location={property.location}
                price={property.price}
                rating={property.rating}
                imageUrl={property.imageUrl}
                superhost={property.superhost}
              />
            ))}
          </div>
        </div>
        
        {/* AI Assistant Feature Highlight */}
        <div className="bg-gray-50 py-16 my-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Meet Your Personal AI Booking Assistant</h2>
              <p className="text-lg text-gray-600 mb-6">
                Get personalized recommendations, instant answers to your questions, and help with booking your perfect stay
              </p>
              <Button className="bg-airbnb-secondary hover:bg-airbnb-secondary/90 text-white">
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <AIChatButton />
      <Footer />
    </div>
  );
};

export default Index;
