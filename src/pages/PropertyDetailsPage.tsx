
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyDetail from '@/components/PropertyDetail';
import AIChatButton from '@/components/AIChatButton';

// Sample property data - in a real app this would come from an API call
const PROPERTY = {
  id: '1',
  title: 'Luxurious Beachfront Villa with Ocean Views',
  description: 'Experience the ultimate beachfront getaway in this stunning villa. Wake up to panoramic ocean views and fall asleep to the soothing sound of waves. This newly renovated property features high-end finishes throughout, a fully equipped gourmet kitchen, and direct access to a pristine beach. Perfect for families or groups looking for a luxurious coastal retreat.',
  location: 'Malibu, California',
  host: {
    name: 'Jessica',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    isSuperhost: true
  },
  price: 350,
  rating: 4.97,
  reviewCount: 124,
  images: [
    'https://a0.muscache.com/im/pictures/miso/Hosting-548979203462837296/original/e8979fca-946b-487f-9ba7-cbf8baffdd2a.jpeg',
    'https://a0.muscache.com/im/pictures/miso/Hosting-548979203462837296/original/0c80215c-e2b8-4ec4-9639-9733edd06eb2.jpeg',
    'https://a0.muscache.com/im/pictures/miso/Hosting-548979203462837296/original/702b5526-7eb4-4a16-b75b-c0a839af1cc9.jpeg',
    'https://a0.muscache.com/im/pictures/miso/Hosting-548979203462837296/original/2ecdb308-7778-4ba0-a487-c618ae7fffc5.jpeg',
    'https://a0.muscache.com/im/pictures/miso/Hosting-548979203462837296/original/4d627a79-af5f-4260-a5c0-a87715e1d288.jpeg'
  ],
  amenities: [
    { name: 'Wifi', available: true },
    { name: 'Free parking', available: true },
    { name: 'Kitchen', available: true },
    { name: 'Pool', available: true },
    { name: 'Hot tub', available: true },
    { name: 'Beach access', available: true },
    { name: 'TV', available: true },
    { name: 'Air conditioning', available: true },
    { name: 'Heating', available: true },
    { name: 'Washer', available: true },
    { name: 'Dryer', available: false },
    { name: 'Gym', available: false }
  ],
  maxGuests: 6,
  bedrooms: 3,
  beds: 4,
  baths: 2.5
};

const PropertyDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real app, we would fetch the property data based on the ID
  // For now, we'll just use our sample data
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <PropertyDetail {...PROPERTY} />
      </main>
      
      <AIChatButton />
      <Footer />
    </div>
  );
};

export default PropertyDetailsPage;
