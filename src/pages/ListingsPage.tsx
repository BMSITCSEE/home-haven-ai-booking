
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CategoryFilter from '@/components/CategoryFilter';
import PropertyCard from '@/components/PropertyCard';
import AIChatButton from '@/components/AIChatButton';
import BackendConnector from '@/components/BackendConnector';

// Sample data - in a real app, this would come from an API
const listings = [
  {
    id: '1',
    title: 'Modern Beachfront Villa',
    location: 'Malibu, CA',
    price: 350,
    rating: 4.97,
    images: ['/placeholder.svg'],
  },
  {
    id: '2',
    title: 'Downtown Luxury Loft',
    location: 'New York, NY',
    price: 250,
    rating: 4.85,
    images: ['/placeholder.svg'],
  },
  {
    id: '3',
    title: 'Mountain Retreat Cabin',
    location: 'Aspen, CO',
    price: 180,
    rating: 4.92,
    images: ['/placeholder.svg'],
  },
  {
    id: '4',
    title: 'Oceanview Penthouse',
    location: 'Miami, FL',
    price: 300,
    rating: 4.9,
    images: ['/placeholder.svg'],
  },
  {
    id: '5',
    title: 'Cozy Lakeside Cottage',
    location: 'Lake Tahoe, CA',
    price: 220,
    rating: 4.95,
    images: ['/placeholder.svg'],
  },
  {
    id: '6',
    title: 'Historic Downtown Apartment',
    location: 'Charleston, SC',
    price: 170,
    rating: 4.88,
    images: ['/placeholder.svg'],
  },
  // ... add more listings if needed
];

const ListingsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <BackendConnector 
          service="AI Booking Assistant" 
          description="The AI Booking Assistant connects to the backend to process natural language queries about properties, process booking requests, and provide property information."
        />
        
        <h1 className="text-3xl font-bold mb-6">Explore homes</h1>
        
        <CategoryFilter />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {listings.map((listing) => (
            <PropertyCard
              key={listing.id}
              id={listing.id}
              title={listing.title}
              location={listing.location}
              price={listing.price}
              rating={listing.rating}
              image={listing.images[0]}
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
