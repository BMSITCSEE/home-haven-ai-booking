
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CategoryFilter from '@/components/CategoryFilter';
import PropertyCard from '@/components/PropertyCard';
import AIChatButton from '@/components/AIChatButton';
import BackendConnector from '@/components/BackendConnector';

// Sample categories data with absolute URLs for icons
const categories = [
  { id: 'all', name: 'All', icon: 'https://a0.muscache.com/pictures/8b318783-723f-4584-9b76-1519b624f86c.jpg' },
  { id: 'beach', name: 'Beach', icon: 'https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg' },
  { id: 'mountain', name: 'Mountain', icon: 'https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg' },
  { id: 'city', name: 'City', icon: 'https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg' },
  { id: 'countryside', name: 'Countryside', icon: 'https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg' },
  { id: 'lake', name: 'Lake', icon: 'https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg' },
];

// Sample data with absolute URLs for images
const listings = [
  {
    id: '1',
    title: 'Modern Beachfront Villa',
    location: 'Malibu, CA',
    price: 350,
    rating: 4.97,
    images: ['https://a0.muscache.com/im/pictures/miso/Hosting-548979203462837296/original/e8979fca-946b-487f-9ba7-cbf8baffdd2a.jpeg'],
  },
  {
    id: '2',
    title: 'Downtown Luxury Loft',
    location: 'New York, NY',
    price: 250,
    rating: 4.85,
    images: ['https://a0.muscache.com/im/pictures/miso/Hosting-549505300359123405/original/f22e51c8-e51c-4f20-b64e-4798ebf2d1ab.jpeg'],
  },
  {
    id: '3',
    title: 'Mountain Retreat Cabin',
    location: 'Aspen, CO',
    price: 180,
    rating: 4.92,
    images: ['https://a0.muscache.com/im/pictures/miso/Hosting-27583990/original/5bd13508-33d5-42be-8f9d-c4cbd972a037.jpeg'],
  },
  {
    id: '4',
    title: 'Oceanview Penthouse',
    location: 'Miami, FL',
    price: 300,
    rating: 4.9,
    images: ['https://a0.muscache.com/im/pictures/miso/Hosting-29459696/original/030256d3-db67-4d15-a913-8436b5474912.jpeg'],
  },
  {
    id: '5',
    title: 'Cozy Lakeside Cottage',
    location: 'Lake Tahoe, CA',
    price: 220,
    rating: 4.95,
    images: ['https://a0.muscache.com/im/pictures/e8babcf4-0407-4359-85d8-de187e0cf3e5.jpg'],
  },
  {
    id: '6',
    title: 'Historic Downtown Apartment',
    location: 'Charleston, SC',
    price: 170,
    rating: 4.88,
    images: ['https://a0.muscache.com/im/pictures/miso/Hosting-50768121/original/b0b7e61f-066a-4a93-a6d4-727265487276.jpeg'],
  },
];

const ListingsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    // In a real app, this would filter listings based on the category
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <BackendConnector 
          service="AI Booking Assistant" 
          description="The AI Booking Assistant connects to the backend to process natural language queries about properties, process booking requests, and provide property information."
        />
        
        <h1 className="text-3xl font-bold mb-6">Explore homes</h1>
        
        <CategoryFilter 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {listings.map((listing) => (
            <PropertyCard
              key={listing.id}
              id={listing.id}
              title={listing.title}
              location={listing.location}
              price={listing.price}
              rating={listing.rating}
              imageUrl={listing.images[0]}
            />
          ))}
        </div>
      </main>
      
      <AIChatButton />
      <Footer />
    </div>
  );
};

export default ListingsPage;
